// Site content, sourced from docs/source-audit/content/site-content.json.
// Every wording change from the original is logged in docs/content-changes.md
// and awaits client sign-off. Do not add facts that are not in the source.

export const site = {
  name: 'Ubud Chakra Healing',
  tagline: 'Heal from within',
  healer: 'Mr. Ketut',
  phone: { display: '+62 813 5304 0211', href: 'tel:+6281353040211' },
  email: 'info@ubudchakrahealing.com',
  location: {
    street: 'Monkey Forest Street, Ubud, Bali',
    note: 'In the centre of Ubud, across from the football field.',
    // Coordinates from the original Contact page map. The venue name is
    // unconfirmed (08 §1 F3), so the map pins a point, not a business.
    lat: -8.510074,
    lng: 115.261218,
  },
  copyrightYear: 2026,
};

export const mapLinks = {
  embed: `https://maps.google.com/maps?q=${site.location.lat},${site.location.lng}&z=17&output=embed`,
  open: `https://www.google.com/maps/search/?api=1&query=${site.location.lat},${site.location.lng}`,
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/about-us', label: 'About' },
  { href: '/what-is-chakra', label: 'Meaning of chakra' },
  { href: '/contact-us', label: 'Contact' },
];

// price / duration stay null until the client supplies them; the detail page
// only renders the facts list when at least one value exists.
export const treatments = [
  {
    slug: 'chakra-balancing',
    title: 'Chakra Balancing',
    summary:
      'A session to check and analyse the chakras within your body, with energy transmitted through the healer’s hands.',
    image: 'hands-crown',
    imageAlt: 'Mr. Ketut’s hands resting lightly on the crown of a client’s head',
    price: null,
    duration: null,
    description: 'Chakra balancing with Mr. Ketut in Ubud: a session to check and analyse the chakras within your body.',
  },
  {
    slug: 'palm-reading',
    title: 'Palm Reading',
    summary:
      'Palmistry, which originated in ancient India, reads a person’s fate and personality from the lines, shape and colour of the hands.',
    image: 'palm-reading',
    imageAlt: 'A palm reader in a white headband studies a client’s hand across a low table lit by a candle',
    price: null,
    duration: null,
    description: 'Palm reading in Ubud, Bali: what the five main lines on the palm are said to show.',
  },
  {
    slug: 'water-purification',
    title: 'Water Purification (Melukat)',
    summary:
      'Melukat is a sacred Balinese ritual that uses water to cleanse the body, mind, spirit and soul.',
    image: 'melukat',
    imageAlt: 'A man stands with hands pressed together beneath the spring-water spouts of a Balinese temple',
    price: null,
    duration: null,
    description: 'Melukat, the Balinese water purification ritual, with transfer from your Ubud hotel, offering and guide.',
  },
  {
    slug: 'balinese-massage',
    title: 'Balinese Massage',
    summary:
      'Massage relaxes the body and de-stresses the mind. Balinese massage uses essential oils and upward pressure-point strokes.',
    image: 'hands-holding',
    imageAlt: 'The healer holds and presses a client’s hand between both of his',
    price: null,
    duration: null,
    description: 'Balinese massage in Ubud: relieves muscle pain, boosts circulation and helps keep stress away.',
  },
];

export function getTreatment(slug) {
  return treatments.find((t) => t.slug === slug);
}

// Chakra names and short meanings as labelled on the original site's chakra
// diagram (Chakra.png), listed from the base of the spine to the crown.
export const chakras = [
  { name: 'Root', meaning: 'Honours the earth', color: '#C8322B' },
  { name: 'Splenic', meaning: 'Honours the creative', color: '#E07425' },
  { name: 'Solar plexus', meaning: 'Honours the life force', color: '#E3B12A' },
  { name: 'Heart', meaning: 'Honours the heart', color: '#4C9A57' },
  { name: 'Throat', meaning: 'Honours communication', color: '#3C93C4' },
  { name: 'Third eye', meaning: 'Honours the psychic', color: '#3C4FA6' },
  { name: 'Crown', meaning: 'Honours spiritual connectedness', color: '#7B4FAA' },
];

export const chakraFaq = [
  {
    q: 'What is chakra healing?',
    a: [
      'When we talk about chakra healing, we may refer to various techniques and meanings. A commonly accepted definition of chakra balancing is the process through which the energy of the chakras is brought to a well-functioning and harmonious state.',
    ],
  },
  {
    q: 'Why balance your chakras?',
    a: [
      'The purpose of chakra healing is to support a balanced flow that will sustain our overall level of energy. In everyday life we are subjected to activities, sources of stress and demands that cause our energy level to fluctuate. Some may feel draining, others fulfilling or nourishing. Past events and experiences often leave a long-lasting influence on how we feel and are in the world, and so on how we manage our energy day to day.',
      'The stresses placed on us by the demands of life may result in interruptions and fluctuations in our energy flow, and in chakra imbalances.',
    ],
  },
];
