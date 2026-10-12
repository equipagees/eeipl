import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// ─── BELTAS FULL SPEC DATA ────────────────────────────────────────────────────
// All models: L18 · L32 · L42 · L56 · L64
// Parameters drawn from standard Beltaş aerial ladder product data

const beltasModels = [
  {
    id: 'l18',
    model: 'BELTAS L18',
    workingHeight: '18 m',
    ladderLength: '16.5 m',
    horizontalReach: '12 m',
    cageLoad: '200 Kg',
    rotation: '360° Continuous',
    elevationAngle: '-14° to +75°',
    extensionTime: '~50 sec',
    gvwRequired: '10T+ GVW',
    chassisRecommended: 'TATA / Ashok Leyland LCV/MCV',
    ladderSections: '3 sections',
    ladderMaterial: 'High-Tensile Steel',
    outriggerType: 'H-Type Hydraulic',
    levelling: 'Automatic ±7°',
    controlStation: 'Upper Cage + Lower Panel',
    waterMonitor: '800 LPM (Optional)',
    application: 'Compact urban deployment, 4–5 storey buildings',
    highlight: 'Smallest footprint, ideal for narrow urban streets'
  },
  {
    id: 'l32',
    model: 'BELTAS L32',
    workingHeight: '32 m',
    ladderLength: '30 m',
    horizontalReach: '18 m',
    cageLoad: '300 Kg',
    rotation: '360° Continuous',
    elevationAngle: '-14° to +75°',
    extensionTime: '~70 sec',
    gvwRequired: '16T+ GVW',
    chassisRecommended: 'TATA LPT / Ashok Leyland / MAN',
    ladderSections: '4 sections',
    ladderMaterial: 'High-Tensile Steel',
    outriggerType: 'H-Type Hydraulic',
    levelling: 'Automatic ±7°',
    controlStation: 'Upper Cage + Lower Panel',
    waterMonitor: '1,000 LPM (Optional)',
    application: 'Mid-rise buildings, 8–10 storey structures',
    highlight: 'Balanced reach & maneuverability for urban fire brigades'
  },
  {
    id: 'l42',
    model: 'BELTAS L42',
    workingHeight: '42 m',
    ladderLength: '40 m',
    horizontalReach: '20 m',
    cageLoad: '400 Kg',
    rotation: '360° Continuous',
    elevationAngle: '-14° to +75°',
    extensionTime: '~80 sec',
    gvwRequired: '19T+ GVW',
    chassisRecommended: 'Ashok Leyland / MAN / Mercedes',
    ladderSections: '4 sections',
    ladderMaterial: 'High-Tensile Laser-Welded Steel',
    outriggerType: 'H-Type Hydraulic (Wide)',
    levelling: 'Automatic ±7°',
    controlStation: 'Upper Cage + Lower Panel + Radio Remote',
    waterMonitor: '1,200 LPM (Optional)',
    application: 'High-rise buildings up to 12 storeys',
    highlight: 'Most popular model for state fire departments'
  },
  {
    id: 'l56',
    model: 'BELTAS L56',
    workingHeight: '56 m',
    ladderLength: '53 m',
    horizontalReach: '22 m',
    cageLoad: '400 Kg',
    rotation: '360° Continuous',
    elevationAngle: '-14° to +78°',
    extensionTime: '~100 sec',
    gvwRequired: '26T+ GVW',
    chassisRecommended: 'MAN / Mercedes-Benz / Scania',
    ladderSections: '5 sections',
    ladderMaterial: 'High-Tensile Laser-Welded Steel',
    outriggerType: 'H-Type Hydraulic (Extra Wide)',
    levelling: 'Automatic ±7°',
    controlStation: 'Upper Cage + Lower Panel + Radio Remote',
    waterMonitor: '1,500 LPM (Optional)',
    application: 'Tall commercial towers 15–18 floors',
    highlight: 'Industrial & refinery complex deployments'
  },
  {
    id: 'l64',
    model: 'BELTAS L64',
    workingHeight: '64 m',
    ladderLength: '61 m',
    horizontalReach: '24 m',
    cageLoad: '400 Kg',
    rotation: '360° Continuous',
    elevationAngle: '-14° to +78°',
    extensionTime: '~120 sec',
    gvwRequired: '31T+ GVW',
    chassisRecommended: 'Mercedes-Benz / Scania / MAN Heavy Duty',
    ladderSections: '5 sections',
    ladderMaterial: 'Aluminium Alloy + High-Tensile Steel',
    outriggerType: 'H-Type Hydraulic (Heavy Duty)',
    levelling: 'Automatic ±7°',
    controlStation: 'Upper Cage + Lower Panel + Radio Remote',
    waterMonitor: '2,000 LPM (Optional)',
    application: 'Skyscrapers, mega-towers, refineries',
    highlight: 'Tallest aerial ladder in the Beltas range'
  }
];

const specRows = [
  { key: 'workingHeight',       label: 'Working Height' },
  { key: 'ladderLength',        label: 'Ladder Length' },
  { key: 'horizontalReach',     label: 'Max Horizontal Reach' },
  { key: 'cageLoad',            label: 'Cage Safe Working Load' },
  { key: 'rotation',            label: 'Turret Rotation' },
  { key: 'elevationAngle',      label: 'Elevation Angle' },
  { key: 'extensionTime',       label: 'Full Extension Time' },
  { key: 'ladderSections',      label: 'Ladder Sections' },
  { key: 'ladderMaterial',      label: 'Ladder Material' },
  { key: 'outriggerType',       label: 'Outrigger Type' },
  { key: 'levelling',           label: 'Auto-Levelling Range' },
  { key: 'controlStation',      label: 'Control Stations' },
  { key: 'waterMonitor',        label: 'Water Monitor' },
  { key: 'gvwRequired',         label: 'Required Chassis GVW' },
  { key: 'chassisRecommended',  label: 'Recommended Chassis' },
  { key: 'application',         label: 'Primary Application' },
];

const features = [
  {
    icon: '📐',
    title: 'Precision Ladder Levelling',
    description:
      'The automatic levelling system compensates for ground slopes up to 7°, ensuring the ladder remains vertically aligned even on uneven urban terrain. The system reacts in real-time to load shifts during active rescue operations.'
  },
  {
    icon: '⚙️',
    title: 'High-Strength Laser-Welded Steel Booms',
    description:
      'Ladder sections are constructed from laser-welded high-tensile steel (aluminium alloy on L64), providing exceptional strength-to-weight ratios that allow for greater outreach and higher rescue cage payloads while keeping overall vehicle GVW manageable.'
  },
  {
    icon: '🕹️',
    title: 'Proportional Electro-Hydraulic Controls',
    description:
      'The electro-hydraulic control system delivers smooth, jerk-free movements. Operators can simultaneously control extension, elevation, and rotation with pinpoint accuracy using ergonomic joysticks from both the rescue cage and the lower ground panel.'
  },
  {
    icon: '🛡️',
    title: 'Advanced Safety Monitoring Systems',
    description:
      'Equipped with cage-mounted ultrasonic collision sensors, wind speed indicators, and structural load monitors. The computer safety system automatically restricts outreach based on real-time wind speed, load, and angle data — preventing unsafe operation.'
  },
  {
    icon: '💧',
    title: 'Integrated Water Monitor System',
    description:
      'All Beltas models support an integrated high-capacity water monitor mounted on the rescue cage with jet/fog switching. Optional radio remote control allows ground-level water monitor operation — keeping firefighters safe from exposure to direct heat or smoke.'
  },
  {
    icon: '🚒',
    title: 'Rapid Deployment Design',
    description:
      'Outrigger deployment, ladder extension, and cage positioning are all sequenced for the fastest possible setup time. From vehicle stop to operational position, Beltas ladders are designed to reach full working height in under 2 minutes in optimal conditions.'
  }
];

const techSpecs = [
  { label: 'Product Type', value: 'Hydraulic Turntable Aerial Ladder Platform' },
  { label: 'Working Height Range', value: '18 m to 64 m (L18 to L64 series)' },
  { label: 'Cage Safe Working Load', value: '200 Kg (L18) to 400 Kg (L32–L64)' },
  { label: 'Turret Rotation', value: '360° continuous hydraulic rotation' },
  { label: 'Elevation Angle', value: '-14° to +78° (model dependent)' },
  { label: 'Outrigger Type', value: 'H-type hydraulic, automatic levelling ±7°' },
  { label: 'Control System', value: 'Electro-hydraulic proportional joystick (cage + lower panel + radio remote)' },
  { label: 'Safety System', value: 'Computer load monitor, wind speed limiter, ultrasonic collision sensors' },
  { label: 'Ladder Material', value: 'High-tensile laser-welded steel / aluminium alloy (L64)' },
  { label: 'Water Monitor', value: 'Up to 2,000 LPM (jet/fog), optional radio remote control' },
  { label: 'Chassis Compatibility', value: 'TATA, Ashok Leyland, MAN, Mercedes-Benz, Scania' },
  { label: 'Manufacturer Certification', value: 'Manufactured under ISO 9001 quality management' },
  { label: 'Country of Origin', value: 'Turkey (Beltaş Fire Extinguishing Technologies — est. 1974)' },
  { label: 'India Distribution', value: 'PAN India via EES' },
];

const whyBeltas = [
  { title: 'Founded 1974', desc: 'Over 50 years of dedicated aerial fire ladder manufacturing heritage.' },
  { title: 'ISO 9001 Certified', desc: 'Consistent quality management standards on every unit produced.' },
  { title: 'Widest Model Range', desc: '5 height classes from 18m to 64m — the widest range from a single manufacturer.' },
  { title: 'Proven Globally', desc: 'Deployed by fire departments across Europe, Middle East, and Asia.' },
  { title: 'Fast Deployment', desc: 'Engineered for under 2-minute setup from arrival to full operational height.' },
  { title: 'Indian Chassis Ready', desc: 'Pre-engineered for mounting on TATA, Ashok Leyland, MAN chassis in India.' },
  { title: 'Full Safety Suite', desc: 'Computer load monitoring, wind limiters, and collision sensors as standard.' },
  { title: 'EES Backed', desc: 'Full sales, commissioning, training, AMC, and spare parts support via EES.' },
];

const faqs = [
  {
    question: 'What is the difference between the Beltas L18 and L42 models?',
    answer:
      'The L18 has a working height of 18 m with a cage capacity of 200 Kg and is designed for compact urban deployment on lighter chassis (10T+ GVW). The L42 reaches 42 m with a 400 Kg cage capacity and requires a heavier chassis (19T+ GVW). The L42 is the most popular model chosen by state fire departments in India for general-purpose high-rise fire fighting and rescue operations.'
  },
  {
    question: 'Can Beltas ladders be mounted on Indian commercial vehicle chassis?',
    answer:
      'Yes. Beltas superstructures are pre-engineered for mounting on Indian commercial chassis. EES handles full chassis selection (TATA, Ashok Leyland, MAN, Mercedes-Benz), structural sub-frame fabrication, hydraulic integration, and electrical connection as a complete turnkey supply. All required regulatory documentation is also handled.'
  },
  {
    question: 'What is the maximum horizontal outreach of the Beltas L64?',
    answer:
      'The Beltas L64 provides a maximum horizontal outreach of 24 m at its full working height of 64 m. This allows firefighters to reach building facades from a safe standoff distance, away from falling glass, structural debris, and direct heat.'
  },
  {
    question: 'Is a water monitor included on all Beltas ladders?',
    answer:
      'The water monitor is an optional fitment on all Beltas models and can be specified at the time of order. Capacities range from 800 LPM on the L18 up to 2,000 LPM on the L64. Radio remote control for the water monitor — allowing ground-level operation — is also available as an option.'
  },
  {
    question: 'Does EES provide operator training for Beltas ladders?',
    answer:
      'Yes. EES provides comprehensive operator and crew training on Beltas aerial ladder platforms, covering pre-operation checks, outrigger deployment, ladder extension sequencing, cage rescue procedures, water monitor operation, and emergency lowering protocols. Training is available at EES\'s facility or on-site.'
  },
  {
    question: 'What is the warranty and AMC coverage for Beltas ladders supplied by EES?',
    answer:
      'EES provides standard manufacturer warranty coverage on all Beltas ladders. Annual Maintenance Contracts (AMC) are available and cover scheduled hydraulic system checks, structural inspection, ladder section lubrication, safety sensor calibration, and certification renewal. Contact EES for specific warranty terms.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────

function BeltasPage() {
  const [activeModel, setActiveModel] = useState('l42'); // Default to most popular
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const selectedModel = beltasModels.find((m) => m.id === activeModel);

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

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <div className="beltas-page animate-fade-up">
      <SEO
        title="Beltas Turntable Ladders India | Hydraulic Fire Rescue Ladders (18m - 64m)"
        description="Equipage Equipment Solutions (EES) is the authorized distributor of Beltas hydraulic turntable rescue ladders in India. 18m to 64m working heights, pre-engineered for Tata, Ashok Leyland & MAN chassis."
        keywords="Beltas turntable ladder, fire fighting ladder India, hydraulic rescue platform, aerial ladder truck India, Beltas L64, municipal fire equipment"
        canonicalUrl="https://eeipl.co.in/products/beltas"
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0d18 0%, #131826 60%, #0a0d18 100%)',
          color: '#fff',
          padding: '100px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Grid dot background */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,90,50,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px', pointerEvents: 'none'
          }}
        />
        {/* Orange glow */}
        <div
          style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(255,90,50,0.15) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,90,50,0.1)', border: '1px solid rgba(255,90,50,0.3)',
                color: '#ff5a32', padding: '5px 14px', borderRadius: '4px',
                fontSize: '.75rem', fontWeight: '800', letterSpacing: '.1em',
                textTransform: 'uppercase', marginBottom: '20px'
              }}
            >
              🚒 Authorised Distributor in India
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900',
                lineHeight: '1.1', margin: '0 0 20px', color: '#fff'
              }}
            >
              BELTAS<br />
              <span style={{ color: '#ff5a32' }}>Hydraulic Turntable</span><br />
              Aerial Ladders
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.65', maxWidth: '560px', marginBottom: '12px' }}>
              High-Elevation Fire Fighting Solutions · 18m to 64m
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', maxWidth: '540px', marginBottom: '32px' }}>
              Beltaş has designed and manufactured aerial rescue platforms since 1974. Every ladder is engineered for rapid deployment, precision stability, and reliable performance at extreme heights — trusted by fire departments worldwide.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#beltas-enquiry"
                style={{
                  display: 'inline-block', padding: '14px 28px',
                  background: '#ff5a32', color: '#fff', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Request a Quote
              </a>
              <a
                href="#beltas-spec-table"
                style={{
                  display: 'inline-block', padding: '14px 28px', background: 'transparent',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                View All Models ↓
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,90,50,0.2)',
                borderRadius: '16px', padding: '32px', textAlign: 'center', width: '100%', maxWidth: '360px'
              }}
            >
              <img
                src="/beltas_ladder.png"
                alt="Beltas Turntable Ladder"
                style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', filter: 'drop-shadow(0 12px 28px rgba(255,90,50,0.25))' }}
              />
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}>
                {[
                  { value: '64m', label: 'Max Height' },
                  { value: '400Kg', label: 'Cage Load' },
                  { value: '5', label: 'Models' }
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '1.5rem', color: '#ff5a32', fontWeight: '900', lineHeight: '1' }}>
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

      {/* ── 2. KEY FEATURES ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Engineering
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Precision Engineered for Life-Safety
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Every Beltas ladder integrates structural, hydraulic, and electronic systems designed to perform under the most demanding emergency conditions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '28px', transition: 'all 0.3s ease'
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

      {/* ── 3. MODEL SELECTOR + DETAIL CARD ─────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Model Range
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>Select a Model to Explore</h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              5 height classes covering 18m to 64m — choose the right reach for your deployment requirements.
            </p>
          </div>

          {/* Model selector tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {beltasModels.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModel(m.id)}
                style={{
                  padding: '10px 20px', borderRadius: '6px', cursor: 'pointer',
                  fontWeight: '700', fontSize: '.95rem', transition: 'all 0.2s ease',
                  background: activeModel === m.id ? '#ff5a32' : '#ffffff',
                  color: activeModel === m.id ? '#ffffff' : 'var(--navy)',
                  border: activeModel === m.id ? '2px solid #ff5a32' : '2px solid var(--light)'
                }}
              >
                {m.model}
                {m.id === 'l42' && (
                  <span style={{ marginLeft: '6px', fontSize: '.68rem', background: 'rgba(255,255,255,0.25)', padding: '2px 5px', borderRadius: '3px' }}>
                    POPULAR
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Selected model detail */}
          {selectedModel && (
            <div
              style={{
                background: '#fff', border: '1px solid var(--light)',
                borderTop: '4px solid #ff5a32', borderRadius: '12px',
                overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ padding: '32px 40px', borderBottom: '1px solid var(--light)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.9rem', color: 'var(--navy)', fontWeight: '900', margin: '0 0 6px' }}>{selectedModel.model}</h3>
                  <p style={{ color: '#ff5a32', fontWeight: '700', fontSize: '1.1rem', margin: '0 0 8px' }}>{selectedModel.application}</p>
                  <p style={{ color: '#4A5A72', fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>{selectedModel.highlight}</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  {[
                    { val: selectedModel.workingHeight, lbl: 'Working Height' },
                    { val: selectedModel.cageLoad, lbl: 'Cage Load' },
                    { val: selectedModel.horizontalReach, lbl: 'Max Reach' },
                    { val: selectedModel.gvwRequired, lbl: 'Min. Chassis' }
                  ].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center', background: 'var(--offwhite)', padding: '14px 20px', borderRadius: '8px', minWidth: '90px' }}>
                      <strong style={{ display: 'block', fontSize: '1.5rem', color: '#ff5a32', fontWeight: '900' }}>{stat.val}</strong>
                      <span style={{ fontSize: '.72rem', color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{stat.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full spec grid for selected model */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
                {specRows.map((row, idx) => (
                  <div
                    key={row.key}
                    style={{
                      display: 'flex', flexDirection: 'column', padding: '16px 24px',
                      borderBottom: '1px solid var(--light)',
                      borderRight: idx % 2 === 0 ? '1px solid var(--light)' : 'none',
                      background: idx % 4 < 2 ? '#fff' : 'var(--offwhite)'
                    }}
                  >
                    <span style={{ fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', color: '#ff5a32', marginBottom: '4px' }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: '.97rem', color: 'var(--navy)', fontWeight: '600' }}>
                      {selectedModel[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. FULL COMPARISON TABLE ─────────────────────────────────────────── */}
      <section id="beltas-spec-table" style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Full Specifications
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              All Models Comparison Table
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Compare working height, outreach, cage capacity, chassis requirements and more across all 5 Beltas models.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', minWidth: '800px' }}>
              <thead>
                <tr style={{ background: '#0a0d18' }}>
                  <th style={{ padding: '16px 18px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: '2px solid #ff5a32', whiteSpace: 'nowrap', minWidth: '180px' }}>
                    Parameter
                  </th>
                  {beltasModels.map((m) => (
                    <th
                      key={m.id}
                      style={{
                        padding: '16px 18px', textAlign: 'center',
                        color: m.id === 'l42' ? '#ff5a32' : '#ffffff',
                        fontSize: '.85rem', fontWeight: '800', borderBottom: '2px solid #ff5a32',
                        whiteSpace: 'nowrap',
                        background: m.id === 'l42' ? 'rgba(255,90,50,0.12)' : 'transparent'
                      }}
                    >
                      {m.model}
                      {m.id === 'l42' && (
                        <div style={{ fontSize: '.65rem', color: '#ff5a32', fontWeight: '700', marginTop: '3px', letterSpacing: '.06em' }}>
                          ★ POPULAR
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, rowIdx) => (
                  <tr
                    key={row.key}
                    style={{ background: rowIdx % 2 === 0 ? '#fff' : 'var(--offwhite)' }}
                  >
                    <td
                      style={{
                        padding: '13px 18px', fontSize: '.82rem', fontWeight: '700',
                        color: 'var(--navy)', borderBottom: '1px solid var(--light)',
                        textTransform: 'uppercase', letterSpacing: '.05em', whiteSpace: 'nowrap'
                      }}
                    >
                      {row.label}
                    </td>
                    {beltasModels.map((m) => (
                      <td
                        key={m.id}
                        style={{
                          padding: '13px 18px', fontSize: '.9rem', color: '#4A5A72',
                          borderBottom: '1px solid var(--light)', textAlign: 'center',
                          background: m.id === 'l42' && rowIdx % 2 === 0
                            ? 'rgba(255,90,50,0.03)'
                            : m.id === 'l42'
                            ? 'rgba(255,90,50,0.06)'
                            : undefined,
                          fontWeight: m.id === 'l42' ? '600' : '400'
                        }}
                      >
                        {m[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', color: '#8898aa', fontSize: '.85rem', marginTop: '16px', fontStyle: 'italic' }}>
            * All specifications are indicative and subject to final chassis configuration. Contact EES for project-specific technical drawings.
          </p>
        </div>
      </section>

      {/* ── 5. GENERAL TECHNICAL SPECIFICATIONS ─────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Technical Specifications
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 20px', fontSize: '2rem', lineHeight: '1.2' }}>
                General Specification Parameters (All Models)
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                These parameters apply across the full Beltas range. Specific values vary by model — refer to the comparison table above for model-specific data. All units are supplied as per customer-specified chassis and configuration.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '10px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {techSpecs.map((spec, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--light)', background: idx % 2 === 0 ? '#fff' : 'var(--offwhite)' }}>
                      <td style={{ padding: '13px 18px', fontSize: '.82rem', fontWeight: '700', color: 'var(--navy)', width: '42%', verticalAlign: 'top' }}>
                        {spec.label}
                      </td>
                      <td style={{ padding: '13px 18px', fontSize: '.9rem', color: '#4A5A72', verticalAlign: 'top' }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY BELTAS ───────────────────────────────────────────────────── */}
      <section style={{ background: '#0a0d18', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Why Beltas
            </div>
            <h2 style={{ color: '#fff', margin: '0 0 14px', fontSize: '2.2rem' }}>
              The Beltas Performance Advantage
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', margin: 0 }}>
              Trusted by fire departments for over 50 years. Distributed across India by EES.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {whyBeltas.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px', padding: '24px',
                  borderTop: '2px solid rgba(255,90,50,0.4)'
                }}
              >
                <h4 style={{ color: '#ff5a32', fontSize: '1rem', fontWeight: '800', margin: '0 0 10px' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.93rem', lineHeight: '1.55', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EES SUPPORT ────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                EES Support
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 20px', fontSize: '2rem', lineHeight: '1.2' }}>
                Complete Lifecycle Support from EES
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                EES is the authorised distributor of Beltas turntable ladders across PAN India. Our support doesn't end at delivery — we provide the full lifecycle of service your aerial ladder requires.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Application consultation & model selection',
                  'Chassis selection, procurement, and sub-frame engineering',
                  'Full superstructure mounting & commissioning',
                  'Crew operator training & certification',
                  'OEM spare parts supply (cylinders, seals, valves, electronics)',
                  'Annual maintenance contracts (AMC)',
                  'PAN India field service engineers',
                  'Safety re-certification & load testing'
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff5a32', fontWeight: '800', fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.5' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 24px' }}>Beltas Product Indicators</h3>
              {[
                { value: '50+ Years', label: 'Beltaş manufacturing heritage (est. 1974)' },
                { value: '5 Models', label: 'Height classes from 18m to 64m working height' },
                { value: '400 Kg', label: 'Maximum rescue cage safe working load (L32–L64)' },
                { value: '360°', label: 'Continuous hydraulic turret rotation on all models' }
              ].map((stat, i, arr) => (
                <div
                  key={i}
                  style={{
                    paddingTop: i === 0 ? 0 : '20px',
                    marginTop: i === 0 ? 0 : '20px',
                    borderTop: i === 0 ? 'none' : '1px solid var(--light)'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '2rem', color: '#ff5a32', fontWeight: '900' }}>{stat.value}</strong>
                  <span style={{ fontSize: '.93rem', color: 'var(--gray)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              FAQ
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Common questions about Beltas turntable ladders and EES's supply and support services.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '8px', overflow: 'hidden' }}
                >
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
                        fontSize: '1.4rem', color: '#ff5a32', fontWeight: '400',
                        flexShrink: 0, lineHeight: '1',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s'
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

      {/* ── 9. ENQUIRY FORM + CTA ────────────────────────────────────────────── */}
      <section
        id="beltas-enquiry"
        style={{
          background: 'linear-gradient(135deg, #0a0500 0%, #1c0c00 50%, #0a0500 100%)',
          padding: '90px 0',
          borderTop: '1px solid rgba(255,90,50,0.2)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: '#ff5a32', fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              From Urban Fire Departments to Heavy Industry
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              We've Got You Covered
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '28px' }}>
              EES has been delivering high-performance fire fighting and rescue platforms to municipal fire departments, state disaster response forces, and industrial fire brigades across India. Our end-to-end support — from chassis selection to operator training — ensures your Beltas ladder is mission-ready from day one.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '16px' }}>
                <strong style={{ display: 'block', color: '#ff5a32', fontSize: '.82rem', marginBottom: '4px' }}>Sales Coordination</strong>
                <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700' }}>+91 98682 38367</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '16px' }}>
                <strong style={{ display: 'block', color: '#ff5a32', fontSize: '.82rem', marginBottom: '4px' }}>Email</strong>
                <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: '700' }}>info@eeipl.co.in</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: '#ff5a32',
                  color: '#fff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                Explore Our Products
              </Link>
              <a
                href="#"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: 'transparent',
                  color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,90,50,0.15)',
              borderRadius: '12px', padding: '36px'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 8px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.87rem', marginBottom: '24px' }}>
              Tell us your model preference, chassis requirements, and application — our team will respond with a technical proposal.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: '1px solid rgba(255,90,50,0.2)' }}>
                <h4 style={{ color: '#ff5a32', margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your Beltas enquiry has been received. Our technical team will contact you shortly.
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
                      htmlFor={`beltas-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`beltas-${field.id}`}
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
                    htmlFor="beltas-message"
                    style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                  >
                    Model preference & application details (optional)
                  </label>
                  <textarea
                    id="beltas-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., L42 model for state fire department, MAN chassis..."
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
                    marginTop: '4px', padding: '13px', background: '#ff5a32', border: 'none',
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

export default BeltasPage;
