import Link from 'next/link';

// Body copy per treatment. Health claims are kept from the original pending a
// client decision (08 §3 C4); see docs/content-changes.md.

function ChakraBalancing() {
  return (
    <>
      <p className="lede">
        Chakra balancing is a session to check and analyse the chakras within your body. The aim is a relaxing and happy
        experience after the healing session.
      </p>
      <p>
        The healer’s body is used as a vehicle for energy, transmitted through the hands to the client. This promotes
        healing and relaxation throughout the whole body, leaving calm and well-being on every level: physical, mental,
        emotional and spiritual.
      </p>
      <p>
        Mr. Ketut learned chakra balancing from a Japanese teacher named Kayo. To learn what chakras are and why people
        balance them, read <Link href="/what-is-chakra">the meaning of chakra</Link>.
      </p>
    </>
  );
}

function PalmReading() {
  return (
    <>
      <p className="lede">
        Palm reading, also called palmistry, originated in ancient India and is now popular worldwide as a way of seeing
        a person’s fate and personality by reading palm lines, hand shapes and colours.
      </p>
      <h2>The five main lines</h2>
      <p>There are five main lines on the palm. Different lines correspond with different traits.</p>
      <dl className="term-list">
        <dt>Life line</dt>
        <dd>Health and physical vitality</dd>
        <dt>Heart line, or love line</dt>
        <dd>Love and emotion</dd>
        <dt>Money line, or fate line</dt>
        <dd>Career and fortune</dd>
        <dt>Head line</dt>
        <dd>Intelligence and mentality</dd>
        <dt>Marriage line</dt>
        <dd>Married life and relationships</dd>
      </dl>
    </>
  );
}

function WaterPurification() {
  return (
    <>
      <p className="lede">
        Melukat is one of the sacred rituals of Bali, using water as a cleansing tool. Its purpose is to cleanse the
        body, mind, spirit and soul, to eliminate bad spirits and negative effects, and to bring good fortune.
      </p>
      <p>It is believed that Melukat cures non-medical and spiritual diseases.</p>
      <h2>What the package includes</h2>
      <p>Transfer from your hotel in Ubud, the offering, and a guide for the purification.</p>
    </>
  );
}

function BalineseMassage() {
  return (
    <>
      <p className="lede">
        Science has stated that massage therapies are the best therapy for your mind and body. Massage not only relaxes
        your body but also de-stresses the mind by releasing serotonin in the body.
      </p>
      <h2>Benefits of Balinese massage</h2>
      <dl className="term-list">
        <dt>Relieves muscle pain</dt>
        <dd>
          This massage helps the muscles to stretch, which keeps pain away from the body, including the joints.
        </dd>
        <dt>Treats any kind of sleep issues</dt>
        <dd>
          Balinese massage can improve your sleep pattern. Proper circulation of blood helps the brain to function
          properly and rectify sleep issues.
        </dd>
        <dt>Boosts blood circulation</dt>
        <dd>The therapist uses upward pressure-point strokes, which boost the circulation of blood.</dd>
        <dt>Promotes skin health</dt>
        <dd>The essential oils used in Balinese massage support the health of your skin, especially against dryness.</dd>
        <dt>Helps keep away stress</dt>
        <dd>Like all types of massage, Balinese massage is a stress buster, thanks to its boost to blood circulation.</dd>
        <dt>Serves as an energiser</dt>
        <dd>By keeping stress away, it boosts your energy. The body relaxes and feels free to carry out other activities.</dd>
        <dt>Boosts the immunity level</dt>
        <dd>
          The oil and the pressure points used in Balinese massage boost the immune system, which acts well against any
          kind of disease.
        </dd>
      </dl>
    </>
  );
}

export const treatmentBodies = {
  'chakra-balancing': {
    Body: ChakraBalancing,
    gallery: [
      { name: 'healer-treating', alt: 'Mr. Ketut treating a client lying face down beneath a mandala painting' },
      { name: 'hands-temple', alt: 'Fingertips resting on a client’s temples' },
    ],
  },
  'palm-reading': { Body: PalmReading },
  'water-purification': { Body: WaterPurification },
  'balinese-massage': {
    Body: BalineseMassage,
    gallery: [{ name: 'massage-arm', alt: 'Hands working along a client’s upper arm and shoulder during a massage' }],
  },
};
