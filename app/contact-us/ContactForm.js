'use client';

import { useActionState, useEffect, useRef } from 'react';
import { sendMessage } from './actions';

function Field({ id, name, label, type = 'text', required, state, autoComplete, defaultValue = '', multiline }) {
  const error = state.errors?.[name];
  const value = state.values?.[name] ?? defaultValue;
  const props = {
    id,
    name: id,
    required,
    autoComplete,
    defaultValue: value,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  };
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {!required && <span className="field__optional">(optional)</span>}
      </label>
      {multiline ? <textarea {...props} rows={6} /> : <input type={type} {...props} />}
      {error && (
        <span id={`${id}-error`} className="field__error">
          {error}
        </span>
      )}
    </div>
  );
}

const initial = { status: 'idle', values: {} };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);
  const statusRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.status === 'sent' || state.status === 'error') statusRef.current?.focus();
    if (state.status === 'sent') formRef.current?.reset();
    if (state.status === 'invalid') formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
  }, [state]);

  // Key the fields on each response so defaultValue re-applies after a submit.
  const k = JSON.stringify(state.values);

  return (
    <form ref={formRef} action={action} className="form" noValidate key={k}>
      {(state.status === 'sent' || state.status === 'error') && (
        <p
          ref={statusRef}
          tabIndex={-1}
          role={state.status === 'error' ? 'alert' : 'status'}
          className={state.status === 'error' ? 'form__status form__status--error' : 'form__status'}
        >
          {state.status === 'sent' ? 'Thank you. Your message has been sent.' : state.message}
        </p>
      )}

      <div className="form__row">
        <Field id="your-name" name="name" label="Name" required state={state} autoComplete="name" />
        <Field id="your-email" name="email" label="Email" type="email" required state={state} autoComplete="email" />
      </div>
      <div className="form__row">
        <Field
          id="your-number"
          name="phone"
          label="Phone"
          type="tel"
          required
          state={state}
          autoComplete="tel"
          defaultValue="+62"
        />
        <Field id="your-subject" name="subject" label="Subject" state={state} />
      </div>
      <Field id="your-message" name="message" label="Message" state={state} multiline />

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button type="submit" className="button" disabled={pending}>
          {pending ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
