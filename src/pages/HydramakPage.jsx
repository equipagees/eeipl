import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// ─── HYDRAMAK HM24A FULL SPEC DATA ──────────────────────────────────────────
const hydramakData = {
  model: 'HYDRAMAK HM24A',
  brand: 'HYDRAMAK',
  tagline: 'Elevate with Safety — Coherence, Agility & Accuracy',
  slogan: 'Truck-Mounted Mobile Elevating Work Platform (MEWP)',
  manufacturer: 'Integrated & Installed by MN Engineering Solutions',
  distributor: 'Authorised Distributor — Equipage ES / EES',
  overview:
    'It takes just a few words to describe HYDRAMAK Mobile Elevating Work Platforms: Coherence, Agility and Accuracy. These qualities are always focused on the needs of rental companies and end-users who demand a high-reach AWP with low maintenance costs and high equipment availability. HYDRAMAK is a choice rewarded by supply to major utility, municipality, power, and telecommunication companies across India.',
  
  aboutText:
    'The HYDRAMAK HM24A features an advanced hybrid boom system — combining double articulated booms with a telescopic section to deliver a 23.2m working height and 10.0m horizontal outreach with a full 250 Kg cage capacity. Designed for 5,100 Kg+ GVW commercial truck chassis, the HM24A is the ideal solution for municipal street lighting, power distribution maintenance, telecom tower servicing, and industrial overhead access.',

  // 16 Detailed Technical Specification Parameters from the official brochure
  specs: [
    { label: 'Max. Working Height', value: '23.2 m' },
    { label: 'Max. Cage Bottom Height', value: '21.2 m' },
    { label: 'Max. Horizontal Outreach (250 Kg Load)', value: '10.0 m' },
    { label: 'Turret Rotation', value: '± 360° Continuous' },
    { label: 'Cage Rotation', value: '± 80°' },
    { label: 'Cage Lifting Capacity', value: '250 Kg (2 Operators + Tools)' },
    { label: 'Cage Dimensions (L x W x H)', value: '1.4 m x 1.1 m x 0.8 m' },
    { label: 'Equipment Closed Height (from Chassis Frame)', value: '2.2 m' },
    { label: 'Width in Transport Position', value: '2.1 m' },
    { label: 'Minimum Required Truck GVW', value: '5,100 Kg (Tata, Eicher, Ashok Leyland LCV/MCV)' },
    { label: 'Air / Water Pipeline (to Cage)', value: 'Provided (Integrated in Boom Cable Track)' },
    { label: 'Electrical Wiring (230V / 12V to Cage)', value: 'Provided' },
    { label: 'Stabilizer Outriggers (Up/Down)', value: 'Hydraulic A-Type Stabilizers' },
    { label: 'Stability Load Testing Standard', value: '150% Overload Tested' },
    { label: 'Safety Standard Compliance', value: 'EN280 Compliant European Standard' },
    { label: 'Control System', value: 'Proportional Electro-Hydraulic (Cage & Base Panel)' },
  ],

  // 6 Core Features & Engineering Pillars
  features: [
    {
      icon: '🌿',
      title: 'Coherence, Agility & Accuracy',
      description:
        'Engineered for maximum up-and-over reach in crowded urban environments. The dual articulated boom geometry allows the platform to clear obstacles and position workers precisely where needed.'
    },
    {
      icon: '⚡',
      title: 'Low Maintenance & High Availability',
      description:
        'Simple, robust hydraulic components and heavy-duty wear pads ensure minimal downtime and low operating costs — trusted by major utility fleets and rental companies nationwide.'
    },
    {
      icon: '📐',
      title: '250 Kg Full Outreach Capacity',
      description:
        'Delivers a full 250 Kg basket load at maximum 10.0m horizontal outreach, allowing two technicians with heavy tools to operate safely without capacity restrictions.'
    },
    {
      icon: '🔒',
      title: 'EN280 Certified Safety Architecture',
      description:
        'Features hydraulic check valves on all cylinders, emergency manual hand pump for cage lowering, dual controls, and 150% stability load testing as standard.'
    },
    {
      icon: '💧',
      title: 'Integrated Utilities in Cage',
      description:
        'Pre-wired with 230V/12V electrical sockets and integrated air/water high-pressure lines running through the internal boom track directly into the basket.'
    },
    {
      icon: '🚚',
      title: 'Compact 5.1T+ Chassis Integration',
      description:
        'Low transport height of 2.2m and 2.1m transport width allow mounting on standard 5,100 Kg+ GVW Indian commercial truck chassis like Tata, Eicher, and Ashok Leyland.'
    }
  ],

  // Applications
  applications: [
    { icon: '💡', title: 'Municipal Street Lighting', desc: 'Maintenance and repair of urban streetlights and high-mast towers.' },
    { icon: '⚡', title: 'Power & Electricity Utilities', desc: 'Overhead HT/LT line repair, transformer maintenance, and substation work.' },
    { icon: '📡', title: 'Telecommunications & 5G', desc: 'Cellular tower antenna mounting and optical fiber line installation.' },
    { icon: '🏢', title: 'Building Facade & Signage', desc: 'Commercial building maintenance, glass cleaning, and billboard erection.' },
    { icon: '🌳', title: 'Tree Trimming & Arboriculture', desc: 'Roadside tree pruning away from live overhead power lines.' },
    { icon: '🏭', title: 'Industrial Facility Maintenance', desc: 'Overhead piping, crane girder, and roof truss inspection in factories.' }
  ],

  // FAQs
  faqs: [
    {
      question: 'What commercial truck chassis is required for the Hydramak HM24A?',
      answer:
        'The Hydramak HM24A requires a minimum truck Gross Vehicle Weight (GVW) of 5,100 Kg. It is pre-engineered for mounting on popular Indian LCV/MCV truck chassis including Tata 407 / 709, Eicher Pro series, and Ashok Leyland Partner. EES handles the complete subframe fabrication and chassis integration.'
    },
    {
      question: 'What is the maximum outreach and cage capacity of the HM24A?',
      answer:
        'The Hydramak HM24A provides a maximum working height of 23.2 meters and a maximum horizontal outreach of 10.0 meters. Unlike many competing lifts that restrict outreach at full capacity, the HM24A allows a full 250 Kg cage capacity (2 workers + tools) across its entire 10.0m outreach diagram.'
    },
    {
      question: 'What safety standards does the Hydramak HM24A comply with?',
      answer:
        'The HM24A is EN280 compliant (European standard for Mobile Elevating Work Platforms) and undergoes 150% stability overload testing. It includes hydraulic lock valves on all cylinders, emergency manual hand pump for basket lowering, remote engine start/stop from cage, and A-type hydraulic stabilizers.'
    },
    {
      question: 'Are electrical and water utilities available directly inside the cage?',
      answer:
        'Yes! The HM24A comes standard with an integrated internal boom cable track carrying 230V/12V electrical wiring and high-pressure air/water pipelines directly into the cage, eliminating dangling cords or hoses.'
    },
    {
      question: 'What after-sales support and spare parts are provided by EES?',
      answer:
        'EES (Equipage ES) is the authorised distributor providing turnkey delivery, chassis mounting, on-site operator certification, OEM spare parts (cylinders, seals, control valves), and Annual Maintenance Contracts (AMC) across PAN India.'
    }
  ]
};

// Color Palette for Hydramak: Vibrant Green & Dark Charcoal
const ACCENT = '#2ea24c';
const ACCENT_LIGHT = 'rgba(46,162,76,0.12)';
const ACCENT_BORDER = 'rgba(46,162,76,0.28)';
const DARK = '#0c1410';
const DARK2 = '#14221b';

function HydramakPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <div className="hydramak-page animate-fade-up">
      <SEO
        title="Hydramak HM24A Truck Mounted Boom Lift India | 24m Articulated AWP"
        description="Equipage Equipment Solutions is the authorized distributor for Hydramak HM24A truck-mounted aerial work platforms in India. 23.2m working height, 10m outreach, 250kg cage capacity."
        keywords="Hydramak HM24A, truck mounted boom lift, articulated aerial work platform India, street light maintenance lift, utility truck lift"
        canonicalUrl="https://eeipl.co.in/products/hydramak"
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 60%, ${DARK} 100%)`,
          color: '#fff',
          padding: '100px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(${ACCENT_LIGHT} 1px, transparent 1px)`,
            backgroundSize: '28px 28px', pointerEvents: 'none'
          }}
        />
        {/* Green glow */}
        <div
          style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '500px', height: '500px',
            background: `radial-gradient(circle, rgba(46,162,76,0.18) 0%, transparent 65%)`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                color: ACCENT, padding: '5px 14px', borderRadius: '4px',
                fontSize: '.75rem', fontWeight: '800', letterSpacing: '.1em',
                textTransform: 'uppercase', marginBottom: '20px'
              }}
            >
              🌿 Elevate with Safety · EN280 Certified
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900',
                lineHeight: '1.1', margin: '0 0 20px', color: '#fff'
              }}
            >
              HYDRAMAK<br />
              <span style={{ color: ACCENT }}>HM24A</span> Boom Lift
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.65', maxWidth: '560px', marginBottom: '12px', fontWeight: '600' }}>
              {hydramakData.tagline}
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6', maxWidth: '540px', marginBottom: '32px' }}>
              {hydramakData.overview}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#hydramak-enquiry"
                style={{
                  display: 'inline-block', padding: '14px 28px',
                  background: ACCENT, color: '#fff', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Request a Quote
              </a>
              <a
                href="#hydramak-specs"
                style={{
                  display: 'inline-block', padding: '14px 28px', background: 'transparent',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                View Specifications ↓
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)', border: `1px solid ${ACCENT_BORDER}`,
                borderRadius: '16px', padding: '32px', textAlign: 'center', width: '100%', maxWidth: '360px'
              }}
            >
              <img
                src="/hydramak_lift.png"
                alt="Hydramak HM24A Truck Mounted Boom Lift"
                style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', filter: `drop-shadow(0 12px 28px rgba(46,162,76,0.25))` }}
              />
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}>
                {[
                  { value: '23.2m', label: 'Max Height' },
                  { value: '10.0m', label: 'Outreach' },
                  { value: '250Kg', label: 'Cage Load' }
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '1.5rem', color: ACCENT, fontWeight: '900', lineHeight: '1' }}>
                      {stat.value}
                    </strong>
                    <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '.07em' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT HYDRAMAK HM24A ────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Ideology & Engineering
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 20px', fontSize: '2.2rem', lineHeight: '1.2' }}>
              Coherence, Agility & Accuracy
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '20px' }}>
              {hydramakData.overview}
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
              {hydramakData.aboutText}
            </p>
          </div>
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
            <h3 style={{ color: 'var(--navy)', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px' }}>
              HM24A Key Performance Highlights
            </h3>
            {[
              { value: '23.2 m', label: 'Maximum Working Height' },
              { value: '10.0 m', label: 'Maximum Horizontal Outreach (Full 250 Kg load)' },
              { value: '± 360°', label: 'Continuous Turret Rotation Angle' },
              { value: '5,100 Kg', label: 'Minimum Required Truck Chassis GVW' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : '20px',
                  marginTop: i === 0 ? 0 : '20px',
                  borderTop: i === 0 ? 'none' : '1px solid var(--light)'
                }}
              >
                <strong style={{ display: 'block', fontSize: '1.8rem', color: ACCENT, fontWeight: '900' }}>{stat.value}</strong>
                <span style={{ fontSize: '.93rem', color: 'var(--gray)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FEATURES GRID ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Engineering Pillars
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Built for High Availability & Safety
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Every feature of the Hydramak HM24A is focused on user safety, operational agility, and minimal maintenance costs.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {hydramakData.features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '28px', transition: 'all 0.3s ease',
                  borderTop: `3px solid ${ACCENT}`
                }}
              >
                <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '14px', lineHeight: '1' }}>{f.icon}</span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '700' }}>{f.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DETAILED SPECIFICATIONS TABLE ─────────────────────────────────── */}
      <section id="hydramak-specs" style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Technical Data
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              HYDRAMAK HM24A Specifications
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Official technical parameters from the brochure data sheet.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: DARK }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}`, width: '45%' }}>
                    Technical Parameter
                  </th>
                  <th style={{ padding: '16px 24px', textAlign: 'left', color: '#fff', fontSize: '.9rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Specification Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {hydramakData.specs.map((spec, idx) => (
                  <tr
                    key={idx}
                    style={{ borderBottom: '1px solid var(--light)', background: idx % 2 === 0 ? '#fff' : 'var(--offwhite)' }}
                  >
                    <td style={{ padding: '14px 24px', fontSize: '.88rem', fontWeight: '700', color: 'var(--navy)' }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: '14px 24px', fontSize: '.95rem', color: '#4A5A72', fontWeight: '600' }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', color: '#8898aa', fontSize: '.85rem', marginTop: '20px', fontStyle: 'italic' }}>
            * Technical specifications are subject to change without notice. Authorised Distributor — Equipage ES / EES.
          </p>
        </div>
      </section>

      {/* ── 5. APPLICATIONS ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Deployment
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Primary Application Sectors
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Chosen by municipalities, power distribution utilities, and telecom operators across India.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {hydramakData.applications.map((app, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '24px', transition: 'all 0.25s ease'
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px', lineHeight: '1' }}>{app.icon}</span>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{app.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.55', margin: 0 }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY BUY FROM EES ───────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                EES Support
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 20px', fontSize: '2rem', lineHeight: '1.2' }}>
                Turnkey Chassis Integration & Field Support
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                EES (Equipage ES) is the authorised distributor for Hydramak mobile elevating work platforms. We handle the complete lifecycle from chassis selection to final testing and field maintenance.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Chassis selection consultation (Tata 407/709, Eicher, Ashok Leyland)',
                  'Custom subframe engineering and superstructure mounting',
                  '150% load testing and EN280 stability certification',
                  'On-site operator safety and control training',
                  'Genuine OEM hydraulic cylinders, valves, and seal kits',
                  'Annual Maintenance Contracts (AMC) and routine inspection',
                  'PAN India field service engineers for emergency repairs'
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: ACCENT, fontWeight: '800', fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.5' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px' }}>Hydramak Manufacturer Specs</h3>
              {[
                { value: 'MN Engineering', label: 'Integrated & Installed by MN Engineering Solutions' },
                { value: 'Equipage ES', label: 'Authorised Sales & Distribution Partner — EES' },
                { value: 'EN280', label: 'European Standard for Mobile Elevating Work Platforms' },
                { value: '150%', label: 'Stability Test Load Standard on every machine' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    paddingTop: i === 0 ? 0 : '20px',
                    marginTop: i === 0 ? 0 : '20px',
                    borderTop: i === 0 ? 'none' : '1px solid var(--light)'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: ACCENT, fontWeight: '900' }}>{stat.value}</strong>
                  <span style={{ fontSize: '.93rem', color: 'var(--gray)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              FAQ
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Common questions regarding the Hydramak HM24A boom lift.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {hydramakData.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '8px', overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%', background: 'none', border: 'none', padding: '20px 24px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left', cursor: 'pointer', outline: 'none'
                    }}
                  >
                    <span style={{ fontSize: '1.03rem', fontWeight: '700', color: 'var(--navy)', paddingRight: '16px' }}>
                      {faq.question}
                    </span>
                    <span
                      style={{
                        fontSize: '1.4rem', color: ACCENT, fontWeight: '400', flexShrink: 0, lineHeight: '1',
                        transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s'
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? '400px' : '0', overflow: 'hidden',
                      transition: 'max-height 0.3s cubic-bezier(0, 1, 0, 1)',
                      borderTop: isOpen ? '1px solid var(--light)' : 'none'
                    }}
                  >
                    <div style={{ padding: '20px 24px', color: '#4A5A72', fontSize: '1rem', lineHeight: '1.65' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. ENQUIRY FORM + CTA ────────────────────────────────────────────── */}
      <section
        id="hydramak-enquiry"
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 50%, ${DARK} 100%)`,
          padding: '90px 0',
          borderTop: `1px solid ${ACCENT_BORDER}`
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contact Us Today! Deals don't last forever...!!!
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              Request a Proposal for HYDRAMAK HM24A
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '28px' }}>
              Whether you represent a municipal corporation, power utility, telecom infrastructure firm, or equipment rental company, EES will provide a turnkey quotation including chassis mounting, PDI, delivery, and training.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '16px' }}>
                <strong style={{ display: 'block', color: ACCENT, fontSize: '.82rem', marginBottom: '4px' }}>Sales Coordination</strong>
                <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700' }}>+91 98682 38367</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '16px' }}>
                <strong style={{ display: 'block', color: ACCENT, fontSize: '.82rem', marginBottom: '4px' }}>Email</strong>
                <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700' }}>info@eeipl.co.in</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: ACCENT,
                  color: '#fff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                Explore All Products
              </Link>
              <a
                href="/brochures/Hydramak AWP/Hydramak HM24A_V1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{
                  display: 'inline-block', padding: '13px 22px', background: 'transparent',
                  color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                📥 Download Brochure (PDF)
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${ACCENT_BORDER}`,
              borderRadius: '12px', padding: '36px'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 8px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.87rem', marginBottom: '24px' }}>
              Tell us your chassis preference and application — our technical team will respond.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: `1px solid ${ACCENT_BORDER}` }}>
                <h4 style={{ color: ACCENT, margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your Hydramak HM24A enquiry has been received. Our technical team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { id: 'name', label: 'Enter Your Full Name', type: 'text', required: true, placeholder: 'Full Name' },
                  { id: 'email', label: 'Enter Email ID', type: 'email', required: true, placeholder: 'Email Address' },
                  { id: 'phone', label: 'Enter Your Phone Number', type: 'tel', required: true, placeholder: '+91 99999 99999' }
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`hydramak-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`hydramak-${field.id}`}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px', padding: '11px 14px', color: '#fff',
                        fontSize: '.95rem', outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="hydramak-message"
                    style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                  >
                    Chassis preference & project details (optional)
                  </label>
                  <textarea
                    id="hydramak-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., Mounting HM24A on Tata 709 chassis for streetlight maintenance..."
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px', padding: '11px 14px', color: '#fff',
                      fontSize: '.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: '4px', padding: '13px', background: ACCENT, border: 'none',
                    borderRadius: '6px', color: '#fff', fontWeight: '700',
                    cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s ease'
                  }}
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HydramakPage;
