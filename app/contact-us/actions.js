'use server';

import { headers } from 'next/headers';
import { site } from '@/lib/content';

const LIMITS = { name: 120, email: 200, phone: 40, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{6,}$/;

// Best-effort, per-instance rate limit: 5 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function validate(data) {
  const errors = {};
  if (!data.name) errors.name = 'Enter your name.';
  if (!data.email) errors.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Enter an email address like name@example.com.';
  if (!data.phone || data.phone === '+62') errors.phone = 'Enter your phone number, including the country code.';
  else if (!PHONE_RE.test(data.phone)) errors.phone = 'Use digits only, with an optional + and country code.';
  for (const [key, max] of Object.entries(LIMITS)) {
    if (data[key].length > max) errors[key] = `Keep this under ${max} characters.`;
  }
  return errors;
}

async function deliver(data) {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) return 'unconfigured';

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Subject: ${data.subject || '(none)'}`,
    '',
    data.message || '(no message)',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL.split(',').map((s) => s.trim()),
      reply_to: data.email,
      subject: `Website enquiry: ${data.subject || data.name}`,
      text,
    }),
  });
  if (!res.ok) {
    console.error('Contact form delivery failed', res.status, await res.text().catch(() => ''));
    return 'failed';
  }
  return 'sent';
}

export async function sendMessage(_prev, formData) {
  const field = (k) => String(formData.get(k) ?? '').trim();
  const data = {
    name: field('your-name'),
    email: field('your-email'),
    phone: field('your-number'),
    subject: field('your-subject'),
    message: field('your-message'),
  };

  // Honeypot: real visitors never see or fill this field.
  if (field('company')) return { status: 'sent', values: {} };

  const errors = validate(data);
  if (Object.keys(errors).length) return { status: 'invalid', errors, values: data };

  const h = await headers();
  const ip = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return {
      status: 'error',
      message: `Too many messages from this connection. Please wait a few minutes, or email ${site.email}.`,
      values: data,
    };
  }

  const result = await deliver(data);
  if (result === 'sent') return { status: 'sent', values: {} };
  if (result === 'unconfigured') {
    return {
      status: 'error',
      message: `The contact form isn’t connected to an inbox yet, so your message was not sent. Please email ${site.email} or call ${site.phone.display}.`,
      values: data,
    };
  }
  return {
    status: 'error',
    message: `Your message could not be sent. Please try again, or email ${site.email}.`,
    values: data,
  };
}
