import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// ─── SKYMECH KNUCKLE & STRAIGHT BOOM CRANES COMPLETE DATA ──────────────────
const skymechModels = [
  // ── KNUCKLE BOOM SERIES ──
  {
    id: 'skb-8',
    type: 'Knuckle Boom',
    name: 'SKB 8',
    brochurePdf: '/brochures/Skymech/SKB 08 Skymech Knuckle Boom Crane.pdf',
    title: 'SKB 8 Knuckle Boom Crane',
    tagline: '8.5 Tm Load Moment · Up to 8.1m Hydraulic Reach',
    loadMoment: '8.5 Tm (A) / 8.2 Tm (B)',
    maxCapacity: '1,360 Kg',
    maxReach: '8.1 m',
    description:
      'The SKB 8 is an agile, medium-duty knuckle boom crane engineered for optimal performance on light and medium commercial vehicles. Featuring advanced hydraulics and high-strength steel boom construction, the SKB 8 provides excellent load-bearing capacity with a low deadweight footprint.',
    variants: [
      { name: 'SKB8 - A', reach: '6.2 m', capacity: '1,360 Kg', loadMoment: '8.5 Tm' },
      { name: 'SKB8 - B', reach: '8.1 m', capacity: '910 Kg', loadMoment: '8.2 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '8.5', b: '8.2' },
      { param: 'Hydraulic Reach (m)', unit: 'm', a: '6.2', b: '8.1' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg/m', a: '1,360', b: '910' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°' },
      { param: 'Slewing Torque (kg.m)', unit: 'kg.m', a: '900', b: '900' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,058', b: '2,058' },
      { param: 'Width When Folded', unit: 'mm', a: '745', b: '745' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,908', b: '4,908' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,364', b: '5,364' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '1,050', b: '2,050' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '315', b: '315' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '40/45', b: '40/45' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '60', b: '60' }
    ]
  },
  {
    id: 'skb-10',
    type: 'Knuckle Boom',
    name: 'SKB 10',
    brochurePdf: '/brochures/Skymech/SKB 10 Skymech Knuckle Boom Crane.pdf',
    title: 'SKB 10 Knuckle Boom Crane',
    tagline: '9.5 Tm Load Moment · Up to 8.1m Hydraulic Reach',
    loadMoment: '9.5 Tm (A) / 9.2 Tm (B)',
    maxCapacity: '1,550 Kg',
    maxReach: '8.1 m',
    description:
      'Designed to handle heavy industrial logistics and utility work, the SKB 10 delivers higher slewing torque (1,200 kg.m) and a robust 1,550 Kg lifting capacity. Its compact folded width of 770mm preserves deck space for cargo transportation.',
    variants: [
      { name: 'SKB10 - A', reach: '6.2 m', capacity: '1,550 Kg', loadMoment: '9.5 Tm' },
      { name: 'SKB10 - B', reach: '8.1 m', capacity: '1,100 Kg', loadMoment: '9.2 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '9.5', b: '9.2' },
      { param: 'Hydraulic Reach (m)', unit: 'm', a: '6.2', b: '8.1' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg/m', a: '1,550', b: '1,100' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°' },
      { param: 'Slewing Torque (kg.m)', unit: 'kg.m', a: '1,200', b: '1,200' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,090', b: '2,090' },
      { param: 'Width When Folded', unit: 'mm', a: '770', b: '770' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,900', b: '4,900' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,364', b: '5,364' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '2,050', b: '2,150' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '315', b: '315' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '45/48', b: '45/48' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '100', b: '100' }
    ]
  },
  {
    id: 'skb-12',
    type: 'Knuckle Boom',
    name: 'SKB 12',
    brochurePdf: '/brochures/Skymech/SKB 12 Skymech Knuckle Boom crane .pdf',
    title: 'SKB 12 Knuckle Boom Crane',
    tagline: '11 Tm Load Moment · Up to 10.0m Hydraulic Reach',
    loadMoment: '11 Tm (A) / 10.5 Tm (B) / 10 Tm (C)',
    maxCapacity: '1,800 Kg',
    maxReach: '10.0 m',
    description:
      'The SKB 12 offers a 3-variant boom lineup (SKB12-A, SKB12-B, SKB12-C) reaching up to 10.0 meters. Built with 17.7 kNm slewing torque and an extra-long stabilizer spread of 5,600mm, it is built for demanding infrastructure and material handling jobs.',
    variants: [
      { name: 'SKB12 - A', reach: '6.0 m', capacity: '1,800 Kg', loadMoment: '11 Tm' },
      { name: 'SKB12 - B', reach: '8.0 m', capacity: '1,400 Kg', loadMoment: '10.5 Tm' },
      { name: 'SKB12 - C', reach: '10.0 m', capacity: '980 Kg', loadMoment: '10 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '11', b: '10.5', c: '10' },
      { param: 'Hydraulic Outreach (m)', unit: 'm', a: '6.0', b: '8.0', c: '10.0' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg', a: '1,800', b: '1,400', c: '980' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°', c: '400°' },
      { param: 'Slewing Torque (kNm)', unit: 'kNm', a: '17.7', b: '17.7', c: '17.7' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,302', b: '2,302', c: '2,302' },
      { param: 'Width When Folded', unit: 'mm', a: '888', b: '888', c: '888' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,600', b: '4,600', c: '4,600' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,600', b: '5,600', c: '5,600' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '1,600', b: '1,700', c: '1,800' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '310', b: '310', c: '310' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '40-50', b: '40-50', c: '40-50' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '100', b: '100', c: '100' }
    ]
  },
  {
    id: 'skb-15',
    type: 'Knuckle Boom',
    name: 'SKB 15',
    brochurePdf: '/brochures/Skymech/SKB 15 Skymech Knuckle Boom Crane.pdf',
    title: 'SKB 15 Knuckle Boom Crane',
    tagline: '14.5 Tm Load Moment · Up to 10.0m Hydraulic Reach',
    loadMoment: '14.5 Tm (A) / 13.7 Tm (B) / 13.5 Tm (C)',
    maxCapacity: '2,400 Kg',
    maxReach: '10.0 m',
    description:
      'The heavy-duty SKB 15 delivers a massive 14.5 Tm load moment and up to 2,400 Kg lifting capacity. Engineered for multi-axle heavy commercial vehicles, it excels in precast handling, steel fabrication transport, and heavy machinery loading.',
    variants: [
      { name: 'SKB15 - A', reach: '6.0 m', capacity: '2,400 Kg', loadMoment: '14.5 Tm' },
      { name: 'SKB15 - B', reach: '8.0 m', capacity: '1,600 Kg', loadMoment: '13.7 Tm' },
      { name: 'SKB15 - C', reach: '10.0 m', capacity: '1,200 Kg', loadMoment: '13.5 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '14.5', b: '13.7', c: '13.5' },
      { param: 'Hydraulic Reach (m)', unit: 'm', a: '6.0', b: '8.0', c: '10.0' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg', a: '2,400', b: '1,600', c: '1,200' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°', c: '400°' },
      { param: 'Slewing Torque (kNm)', unit: 'kNm', a: '17.7', b: '17.7', c: '17.7' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,303', b: '2,303', c: '2,303' },
      { param: 'Width When Folded', unit: 'mm', a: '837', b: '837', c: '837' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,800', b: '4,800', c: '4,800' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,800', b: '5,800', c: '5,800' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '2,350', b: '2,500', c: '2,550' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '315', b: '315', c: '315' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '50', b: '50', c: '50' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '100', b: '100', c: '100' }
    ]
  },
  {
    id: 'skb-20',
    type: 'Knuckle Boom',
    name: 'SKB 20',
    brochurePdf: '/brochures/Skymech/SKB 20 Skymech Knuckle Boom.pdf',
    title: 'SKB 20 Knuckle Boom Crane',
    tagline: '19 Tm Load Moment · Up to 10.0m Hydraulic Reach',
    loadMoment: '19 Tm (A) / 18.75 Tm (B) / 18.5 Tm (C)',
    maxCapacity: '3,100 Kg',
    maxReach: '10.0 m',
    description:
      'The SKB 20 is a high-capacity loader crane, boasting a 19 Tm load moment and a 3,100 Kg lifting capacity. Built with 2,500 kg.m slewing torque and 125L oil tank capacity for continuous heavy-duty operation.',
    variants: [
      { name: 'SKB20 - A', reach: '6.0 m', capacity: '3,100 Kg', loadMoment: '19 Tm' },
      { name: 'SKB20 - B', reach: '8.0 m', capacity: '2,300 Kg', loadMoment: '18.75 Tm' },
      { name: 'SKB20 - C', reach: '10.0 m', capacity: '1,760 Kg', loadMoment: '18.5 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '19', b: '18.75', c: '18.5' },
      { param: 'Hydraulic Reach (m)', unit: 'm', a: '6.0', b: '8.0', c: '10.0' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg/m', a: '3,100', b: '2,300', c: '1,760' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°', c: '400°' },
      { param: 'Slewing Torque (kg.m)', unit: 'kg.m', a: '2,500', b: '2,500', c: '2,500' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,335', b: '2,335', c: '2,335' },
      { param: 'Width When Folded', unit: 'mm', a: '937', b: '937', c: '937' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,900', b: '4,900', c: '4,900' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,300', b: '5,300', c: '5,300' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '2,400', b: '2,500', c: '2,680' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '315', b: '315', c: '315' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '50', b: '50', c: '50' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '125', b: '125', c: '125' }
    ]
  },
  {
    id: 'skb-23',
    type: 'Knuckle Boom',
    name: 'SKB 23',
    brochurePdf: '/brochures/Skymech/SKB 23 Skymech Knuckle Boom Crane.pdf',
    title: 'SKB 23 Knuckle Boom Crane',
    tagline: '22.5 Tm Load Moment · Up to 10.0m Hydraulic Reach',
    loadMoment: '22.5 Tm (A) / 21.75 Tm (B) / 21.25 Tm (C)',
    maxCapacity: '3,500 Kg',
    maxReach: '10.0 m',
    description:
      'The flagship SKB 23 is Skymech\'s highest-capacity heavy-duty knuckle boom crane. Delivering an extraordinary 22.5 Tm load moment, 3,500 Kg lifting capacity, and 2,700 kg.m slewing torque, it is purpose-built for heavy infrastructure projects, stone/precast lifting, and heavy logistics.',
    variants: [
      { name: 'SKB23 - A', reach: '6.0 m', capacity: '3,500 Kg', loadMoment: '22.5 Tm' },
      { name: 'SKB23 - B', reach: '8.0 m', capacity: '2,750 Kg', loadMoment: '21.75 Tm' },
      { name: 'SKB23 - C', reach: '10.0 m', capacity: '2,050 Kg', loadMoment: '21.25 Tm' }
    ],
    specTable: [
      { param: 'Load Moment (Tm)', unit: 'Tm', a: '22.5', b: '21.75', c: '21.25' },
      { param: 'Hydraulic Reach (m)', unit: 'm', a: '6.0', b: '8.0', c: '10.0' },
      { param: 'Lifting Capacity (Kg)', unit: 'kg/m', a: '3,500', b: '2,750', c: '2,050' },
      { param: 'Slewing Angle (Degree)', unit: 'Degree', a: '400°', b: '400°', c: '400°' },
      { param: 'Slewing Torque (kg.m)', unit: 'kg.m', a: '2,700', b: '2,700', c: '2,700' },
      { param: 'Height Above Chassis (Folded)', unit: 'mm', a: '2,383', b: '2,383', c: '2,383' },
      { param: 'Width When Folded', unit: 'mm', a: '895', b: '895', c: '895' },
      { param: 'Stabilizer Spread (Standard)', unit: 'mm', a: '4,500', b: '4,500', c: '4,500' },
      { param: 'Stabilizer Spread (Extra Long)', unit: 'mm', a: '5,200', b: '5,200', c: '5,200' },
      { param: 'Standard Weight (kg)', unit: 'kg', a: '2,400', b: '2,530', c: '2,800' },
      { param: 'Max. Operating Pressure', unit: 'bar', a: '315', b: '315', c: '315' },
      { param: 'Recommended Pump Capacity', unit: 'L/min', a: '50', b: '50', c: '50' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '127', b: '127', c: '127' }
    ]
  },

  // ── STRAIGHT BOOM SERIES ──
  {
    id: 'ssb-15',
    type: 'Straight Boom',
    name: 'SSB 15',
    brochurePdf: '/brochures/Skymech/SSB 15 Straight Boom Crane.pdf',
    title: 'SSB 15 Straight Boom Crane',
    tagline: '3,200 Kg Lifting Capacity · 360° Continuous Rotation Winch Crane',
    loadMoment: '3.2 Ton Class',
    maxCapacity: '3,200 Kg @ 2.5m',
    maxReach: '10.7 m',
    description:
      'The Skymech SSB 15 Straight (Stiff) Boom Crane is designed for high-hook height lifting, precision winch hoisting, and long working radiuses up to 10.7m. Featuring 360° continuous rotation, 3 or 4 section telescopic booms, and high-strength wire rope winch systems.',
    variants: [
      { name: 'SSB 151 (3-Section)', reach: '8.0 m', capacity: '3,200 Kg', loadMoment: '9.3m Hook Height' },
      { name: 'SSB 152 (4-Section)', reach: '10.7 m', capacity: '3,200 Kg', loadMoment: '12.0m Hook Height' }
    ],
    specTable: [
      { param: 'Maximum Lifting Capacity (KG)', unit: 'KG', a: '3,200 @ 2.5m', b: '3,200 @ 2.5m' },
      { param: 'Maximum Hook Height (M)', unit: 'M', a: '9.3', b: '12.0' },
      { param: 'Maximum Working Radius (M)', unit: 'M', a: 'Min 1.0 / Max 8.0', b: 'Min 1.0 / Max 10.7' },
      { param: 'Boom Length (M)', unit: 'M', a: 'Min 3.4 / Max 8.0', b: 'Min 3.4 / Max 10.7' },
      { param: 'Boom Sections', unit: 'No.', a: '3 Sections', b: '4 Sections' },
      { param: 'Boom Raising Angle', unit: 'Degree', a: 'Min 1° / Max 78°', b: 'Min 1° / Max 78°' },
      { param: 'Slewing Angle (Continuous)', unit: 'Degree', a: '360° Continuous', b: '360° Continuous' },
      { param: 'Wire Rope (mm x M)', unit: 'mm x M', a: '10 x 45', b: '10 x 63' },
      { param: 'Stabilizer Spread (MM)', unit: 'MM', a: 'Min 2,615 / Max 4,501', b: 'Min 2,615 / Max 4,501' },
      { param: 'Height Above Chassis (MM)', unit: 'MM', a: '2,272', b: '2,272' },
      { param: 'Maximum Operating Pressure', unit: 'Bar', a: '210', b: '210' },
      { param: 'Oil Tank Capacity', unit: 'Ltr', a: '65', b: '65' }
    ]
  }
];

// Color Palette for Skymech: Industrial Orange & Deep Navy
const ACCENT = '#f36f21';
const ACCENT_LIGHT = 'rgba(243,111,33,0.12)';
const ACCENT_BORDER = 'rgba(243,111,33,0.3)';
const DARK = '#081220';
const DARK2 = '#102036';

function SkymechPage() {
  const [selectedModelId, setSelectedModelId] = useState('skb-8');
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const selectedModel = skymechModels.find((m) => m.id === selectedModelId) || skymechModels[0];

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
    <div className="skymech-page animate-fade-up">
      <SEO
        title="Skymech Truck Loader Cranes India | Knuckle Boom & Straight Boom Cranes"
        description="Equipage Equipment Solutions is the authorized distributor for Skymech truck loader cranes across North & West India. Knuckle boom (SKB 8 to SKB 23) and straight boom (SSB 15) models mounted on commercial trucks."
        keywords="Skymech truck loader crane, knuckle boom crane India, truck mounted crane, hydraulic lorry crane, Skymech SKB, self loading truck crane"
        canonicalUrl="https://eeipl.co.in/products/skymech"
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
        {/* Orange glow */}
        <div
          style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '520px', height: '520px',
            background: `radial-gradient(circle, rgba(243,111,33,0.18) 0%, transparent 68%)`,
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
              🇮🇳 Made in India · Authorised Partner — EES
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900',
                lineHeight: '1.1', margin: '0 0 20px', color: '#fff'
              }}
            >
              SKYMECH EQUIPMENTS<br />
              <span style={{ color: ACCENT }}>Knuckle & Straight Booms</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#fff', lineHeight: '1.5', maxWidth: '580px', marginBottom: '16px', fontWeight: '700', letterSpacing: '.02em' }}>
              PUT AN END TO YOUR LIFTING STRESS AND STRAIN.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.65', maxWidth: '540px', marginBottom: '32px' }}>
              Skymech Knuckle Boom Cranes (SKB 8, SKB 10, SKB 12, SKB 15, SKB 20, SKB 23) and Straight Boom Cranes (SSB 15) are engineered for heavy lifting operations, versatility across commercial truck platforms, and advanced hydraulic control.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#skymech-enquiry"
                style={{
                  display: 'inline-block', padding: '14px 28px',
                  background: ACCENT, color: '#fff', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Request a Quote
              </a>
              <a
                href="#skymech-selector"
                style={{
                  display: 'inline-block', padding: '14px 28px', background: 'transparent',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Explore All Models ↓
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
                src="/skymech_crane.png"
                alt="Skymech Knuckle and Straight Boom Cranes"
                style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', filter: `drop-shadow(0 12px 28px rgba(243,111,33,0.3))` }}
              />
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}>
                {[
                  { value: '8.5-22.5Tm', label: 'Load Moment' },
                  { value: '3,500Kg', label: 'Max Lift' },
                  { value: '12.0m', label: 'Max Height' },
                  { value: '400° / 360°', label: 'Slewing' }
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: ACCENT, fontWeight: '900', lineHeight: '1' }}>
                      {stat.value}
                    </strong>
                    <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT SKYMECH ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Advanced Hydraulic Engineering
            </div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2.3rem', margin: '0 0 20px', lineHeight: '1.2' }}>
              Optimal Solutions for Heavy Industrial Lifting
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '20px' }}>
              The knuckle boom and straight boom cranes from Skymech are optimal for industrial uses and heavy lifting operations. Working on advanced hydraulic technology, Skymech cranes are available in different capacities from 8.5 Tm up to 22.5 Tm load moment and 3.2-tonne straight boom winch configurations.
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
              The versatility and diversity in installation on static platforms and mobile commercial truck chassis give Skymech an edge over the competition across construction, utility, logistics, and heavy industrial operations.
            </p>
          </div>
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: '700' }}>
              Skymech Key Advantages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { title: 'Customisation Options', desc: 'Tailored boom extension steps, stabilizer lengths, and chassis subframes to match specific site requirements.' },
                { title: 'Heavy Load-Bearing Capacity', desc: 'High-tensile structural steel construction providing up to 3,500 Kg lifting capacity.' },
                { title: 'Smooth Hydraulic Operation', desc: 'Proportional hydraulic control valves for precise, jerk-free load placement.' },
                { title: 'Knuckle & Straight Boom Lineup', desc: '7 model families (SKB 8, 10, 12, 15, 20, 23 & SSB 15) covering articulated and winch-hoisting cranes.' }
              ].map((adv, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ background: ACCENT_LIGHT, color: ACCENT, width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '.8rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '1.02rem', marginBottom: '4px' }}>{adv.title}</strong>
                    <span style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.5' }}>{adv.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE MODEL SELECTOR & DATA SHEETS ──────────────────────── */}
      <section id="skymech-selector" style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Complete Lineup
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Select a Skymech Model
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Inspect technical specifications, boom variant breakdown, and hydraulic data for Knuckle Booms (SKB) and Straight Booms (SSB).
            </p>
          </div>

          {/* Model Navigation Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
            {skymechModels.map((m) => {
              const isActive = m.id === selectedModelId;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModelId(m.id)}
                  style={{
                    padding: '12px 24px', borderRadius: '8px',
                    border: isActive ? `2px solid ${ACCENT}` : '1px solid var(--light)',
                    background: isActive ? ACCENT : '#fff',
                    color: isActive ? '#fff' : 'var(--navy)',
                    fontWeight: '800', fontSize: '1rem',
                    cursor: 'pointer', transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 4px 16px rgba(243,111,33,0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                    display: 'inline-flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  <span>{m.name}</span>
                  <span style={{ fontSize: '.68rem', opacity: 0.8, textTransform: 'uppercase', background: isActive ? 'rgba(255,255,255,0.2)' : 'var(--offwhite)', padding: '2px 6px', borderRadius: '4px' }}>
                    {m.type === 'Straight Boom' ? 'Straight' : 'Knuckle'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Model Card */}
          <div
            style={{
              background: '#fff', border: '1px solid var(--light)',
              borderRadius: '12px', padding: '36px', boxShadow: '0 8px 32px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginBottom: '36px', alignItems: 'center' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                    color: ACCENT, padding: '4px 12px', borderRadius: '4px',
                    fontSize: '.72rem', fontWeight: '800', letterSpacing: '.1em',
                    textTransform: 'uppercase', marginBottom: '12px'
                  }}
                >
                  {selectedModel.type} · {selectedModel.tagline}
                </span>
                <h3 style={{ fontSize: '2rem', color: 'var(--navy)', fontWeight: '900', margin: '0 0 12px' }}>
                  {selectedModel.title}
                </h3>
                <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 0 18px' }}>
                  {selectedModel.description}
                </p>
                {selectedModel.brochurePdf && (
                  <a
                    href={selectedModel.brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 18px', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                      color: ACCENT, borderRadius: '6px', fontWeight: '700', textDecoration: 'none',
                      fontSize: '.9rem', transition: 'all 0.2s ease'
                    }}
                  >
                    📥 Download {selectedModel.name} Brochure (PDF)
                  </a>
                )}
              </div>

              {/* Variant Badge Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <strong style={{ fontSize: '.78rem', color: ACCENT, textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  Available Boom Variants:
                </strong>
                {selectedModel.variants.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--offwhite)', border: '1px solid var(--light)',
                      borderRadius: '8px', padding: '14px 18px', display: 'flex',
                      justify: 'space-between', alignItems: 'center'
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.98rem' }}>{v.name}</strong>
                      <span style={{ fontSize: '.82rem', color: '#4A5A72' }}>Max Reach: {v.reach}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <strong style={{ display: 'block', color: ACCENT, fontSize: '1.05rem', fontWeight: '900' }}>{v.capacity}</strong>
                      <span style={{ fontSize: '.75rem', color: '#8898aa' }}>{v.loadMoment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specification Table for Selected Model */}
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--light)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
                <thead>
                  <tr style={{ background: DARK }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}`, width: '40%' }}>
                      Specification Parameter
                    </th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.4)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}`, width: '15%' }}>
                      Unit
                    </th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                      {selectedModel.id === 'ssb-15' ? 'SSB 151 (3-Sec)' : 'Variant A'}
                    </th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                      {selectedModel.id === 'ssb-15' ? 'SSB 152 (4-Sec)' : 'Variant B'}
                    </th>
                    {selectedModel.specTable[0].c && (
                      <th style={{ padding: '14px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                        Variant C
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {selectedModel.specTable.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{ borderBottom: '1px solid var(--light)', background: idx % 2 === 0 ? '#fff' : 'var(--offwhite)' }}
                    >
                      <td style={{ padding: '12px 20px', fontSize: '.88rem', fontWeight: '700', color: 'var(--navy)' }}>
                        {row.param}
                      </td>
                      <td style={{ padding: '12px 20px', fontSize: '.82rem', color: '#8898aa' }}>
                        {row.unit}
                      </td>
                      <td style={{ padding: '12px 20px', fontSize: '.93rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                        {row.a}
                      </td>
                      <td style={{ padding: '12px 20px', fontSize: '.93rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                        {row.b}
                      </td>
                      {row.c && (
                        <td style={{ padding: '12px 20px', fontSize: '.93rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                          {row.c}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COMPLETE SIDE-BY-SIDE MODEL COMPARISON MATRIX ───────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Comparison
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Skymech Lineup Comparison Matrix
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Compare all 7 Skymech models (SKB Knuckle & SSB Straight Booms) at a glance to select the right crane capacity.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', minWidth: '760px' }}>
              <thead>
                <tr style={{ background: DARK }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}` }}>
                    Model
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}` }}>
                    Crane Type
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Load Moment / Class
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Max Capacity
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Max Reach / Height
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Slewing Angle
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {skymechModels.map((m, idx) => (
                  <tr
                    key={m.id}
                    style={{
                      borderBottom: '1px solid var(--light)',
                      background: m.id === 'ssb-15' ? 'rgba(243,111,33,0.06)' : idx % 2 === 0 ? '#fff' : 'var(--offwhite)'
                    }}
                  >
                    <td style={{ padding: '14px 20px', fontSize: '1.05rem', fontWeight: '800', color: 'var(--navy)' }}>
                      {m.name}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '.82rem', color: '#4A5A72', fontWeight: '700', textAlign: 'center', textTransform: 'uppercase' }}>
                      {m.type}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '.95rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                      {m.loadMoment}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '.95rem', color: ACCENT, fontWeight: '800', textAlign: 'center' }}>
                      {m.maxCapacity}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '.95rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                      {m.maxReach}
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: '.95rem', color: '#4A5A72', fontWeight: '600', textAlign: 'center' }}>
                      {m.id === 'ssb-15' ? '360° Cont.' : '400°'}
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                      <button
                        onClick={() => {
                          setSelectedModelId(m.id);
                          const el = document.getElementById('skymech-selector');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                          padding: '6px 14px', background: ACCENT_LIGHT, color: ACCENT,
                          border: `1px solid ${ACCENT_BORDER}`, borderRadius: '4px',
                          fontWeight: '700', fontSize: '.82rem', cursor: 'pointer'
                        }}
                      >
                        Inspect Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. WHY BUY FROM EES ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Turnkey Distributor
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 20px', fontSize: '2rem', lineHeight: '1.2' }}>
                Complete Chassis Integration & Support
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                EES (Equipage ES) is the authorised sales and distribution partner for Skymech Equipments across India. We deliver end-to-end Solutions from crane selection to commercial vehicle PTO mounting.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Subframe engineering for Tata, Eicher, Ashok Leyland, and BharatBenz trucks',
                  'PTO gearbox installation and hydraulic pump calibration',
                  'Hydraulic stabilizer outrigger mounting (Standard & Extra Long)',
                  'Complete PDI, load testing, and slewing torque verification',
                  'Hands-on operator training for safe load chart reading & control',
                  'Dedicated stock of genuine OEM hydraulic cylinders, valves & seal kits',
                  'Annual Maintenance Contracts (AMC) and on-site field breakdown service'
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: ACCENT, fontWeight: '800', fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.5' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px' }}>Skymech Manufacturer Data</h3>
              {[
                { value: 'Skymech Equipments', label: 'Sanand, Ahmedabad, Gujarat, INDIA' },
                { value: 'Make in India', label: '100% Indigenous Manufacturing Heritage' },
                { value: 'SKB & SSB Series', label: 'Knuckle Boom (8-23 Tm) & Straight Boom (SSB 15)' },
                { value: '315 / 210 Bar', label: 'High Operating Hydraulic Pressure Systems' }
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

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              FAQ
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Common questions regarding Skymech Knuckle and Straight Boom Cranes.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                question: 'What is the difference between Skymech SKB (Knuckle Boom) and SSB (Straight Boom) cranes?',
                answer:
                  'SKB series knuckle boom (articulated) cranes fold compactly behind the truck cabin when traveling, leaving maximum deck space for cargo. SSB series straight (stiff) boom cranes feature a wire rope winch system and high-angle telescopic boom, ideal for precision hook hoisting into high vertical spaces up to 12m.'
              },
              {
                question: 'What models are available in the Skymech Knuckle and Straight Boom range?',
                answer:
                  'Skymech manufactures 6 Knuckle Boom models (SKB 8, SKB 10, SKB 12, SKB 15, SKB 20, SKB 23 ranging from 8.5 Tm to 22.5 Tm load moment) and the Straight Boom SSB 15 series (SSB 151 3-section & SSB 152 4-section with 3,200 Kg lifting capacity).'
              },
              {
                question: 'Can Skymech cranes be installed on standard Indian commercial trucks?',
                answer:
                  'Yes! Skymech SKB and SSB series cranes are designed for mounting directly on standard Indian commercial vehicles like Tata, Eicher, Ashok Leyland, and BharatBenz. EES handles complete subframe fabrication and PTO pump integration.'
              },
              {
                question: 'What stabilizer options are available for Skymech cranes?',
                answer:
                  'All Skymech cranes come standard with hydraulic stabilizer outriggers. Depending on the model, customers can select Standard stabilizer spread (up to 4,900mm) or Extra Long stabilizer spread (up to 5,800mm) for maximum stability on uneven ground.'
              },
              {
                question: 'Does EES provide spare parts and maintenance across India?',
                answer:
                  'Yes. EES is the authorised partner providing turnkey delivery, load testing certification, operator training, OEM spare parts stock (cylinders, control valves, seal kits, winch cables), and Annual Maintenance Contracts (AMC) across India.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', overflow: 'hidden' }}>
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

      {/* ── 7. ENQUIRY FORM + CTA ────────────────────────────────────────────── */}
      <section
        id="skymech-enquiry"
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 50%, ${DARK} 100%)`,
          padding: '90px 0',
          borderTop: `1px solid ${ACCENT_BORDER}`
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Put An End To Your Lifting Stress & Strain
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              Request a Quotation for Skymech Cranes
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '28px' }}>
              Tell us your lifting capacity requirement (SKB Knuckle Boom or SSB Straight Boom) and truck chassis model — our engineering team will provide a turnkey technical proposal and quote.
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
                href={selectedModel.brochurePdf || '/brochures/Skymech/SKB 08 Skymech Knuckle Boom Crane.pdf'}
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
              Select your preferred Skymech model and share your project details.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: `1px solid ${ACCENT_BORDER}` }}>
                <h4 style={{ color: ACCENT, margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your Skymech enquiry has been received. Our technical team will contact you shortly.
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
                      htmlFor={`skymech-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`skymech-${field.id}`}
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
                    htmlFor="skymech-message"
                    style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                  >
                    Model preference & truck chassis details
                  </label>
                  <textarea
                    id="skymech-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., SKB 23 Knuckle Boom or SSB 15 Straight Boom for mounting on Tata truck..."
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

export default SkymechPage;
