import { useState } from 'react';
import { Link } from 'react-router-dom';
import { liftmakBrandInfo, liftmakCategories } from '../data/liftmakData';
import SEO from '../components/SEO';

function LiftmakParent() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

  // Category accent colors
  const categoryAccents = ['#e63946', '#ff6b35', '#f4a261', '#2a9d8f'];

  return (
    <div className="liftmak-parent-page animate-fade-up">
      <SEO
        title="Liftmak Fire Fighting Hydraulic Platforms India | Aerial Rescue (15m - 70m)"
        description="Equipage Equipment Solutions is the authorized distributor for Liftmak aerial ladder platforms and hydraulic rescue platforms in India. 15m to 70m reach, CANBus safety, water monitors."
        keywords="Liftmak fire platform, aerial hydraulic platform, municipal fire fighting truck India, Liftmak India, hydraulic rescue platform"
        canonicalUrl="https://eeipl.co.in/products/liftmak"
      />

      {/* ── 1. HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 50%, #0f0f0f 100%)',
          color: '#ffffff',
          padding: '100px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Red diagonal stripe background */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(230,57,70,0.04) 0px, rgba(230,57,70,0.04) 1px, transparent 1px, transparent 48px)',
            pointerEvents: 'none'
          }}
        />
        {/* Red glow top-right */}
        <div
          style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span
              style={{
                display: 'inline-block', background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.3)',
                color: '#e63946', padding: '5px 14px', borderRadius: '4px', fontSize: '.78rem',
                fontWeight: '800', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px'
              }}
            >
              Authorised Distributor in India
            </span>
            <h1
              style={{
                color: '#ffffff', fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                lineHeight: '1.1', fontWeight: '900', margin: '0 0 20px'
              }}
            >
              LIFTMAK<br />
              <span style={{ color: '#e63946' }}>Hydraulic Platforms</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.65', marginBottom: '14px', maxWidth: '580px' }}>
              {liftmakBrandInfo.tagline}
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6', marginBottom: '32px', maxWidth: '560px' }}>
              Fire Fighting Platforms · Aerial Work Platforms · Knuckle Boom Cranes · Municipal Equipment
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href="#liftmak-enquiry"
                className="btn btn-primary"
                style={{ padding: '14px 28px', borderRadius: '6px', fontWeight: '700', background: '#e63946', border: 'none', color: '#fff' }}
              >
                Request a Quote
              </a>
              <a
                href="#liftmak-categories"
                style={{
                  border: '2px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px',
                  borderRadius: '6px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s ease',
                  background: 'transparent'
                }}
              >
                Explore Equipment ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(230,57,70,0.2)',
                borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '340px', textAlign: 'center'
              }}
            >
              <img
                src="/liftmak-hero.png"
                alt="Liftmak Hydraulic Platform"
                style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', filter: 'drop-shadow(0 12px 24px rgba(230,57,70,0.3))' }}
              />
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#e63946', fontWeight: '900' }}>92m</strong>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Max Height</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#e63946', fontWeight: '900' }}>500Kg</strong>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Cage Load</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#e63946', fontWeight: '900' }}>360°</strong>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Rotation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT LIFTMAK ── */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Engineering Excellence
            </div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2.4rem', margin: '0 0 20px', lineHeight: '1.2' }}>
              India's Premier Aerial Platform Specialist
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '20px' }}>
              {liftmakBrandInfo.overview}
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
              {liftmakBrandInfo.aboutText}
            </p>
          </div>
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: '700' }}>Liftmak Platform Standards</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: '#e63946', fontWeight: '900' }}>11m – 92m</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>India's widest working height range for aerial platforms</span>
              </div>
              <div style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: '#e63946', fontWeight: '900' }}>750 Kg</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Factory-tested cage load capacity (500 Kg safe working load)</span>
              </div>
              <div style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: '#e63946', fontWeight: '900' }}>ISO 9001:2000</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Certified manufacturing quality management system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY BUY FROM EES ── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Preferred Partner
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 16px', color: 'var(--navy)' }}>Why Buy Liftmak from EES?</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              We don't just supply platforms — we engineer complete aerial solutions backed by India-wide technical support.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {liftmakBrandInfo.eeiplSupport.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px',
                  padding: '28px', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span
                    style={{
                      background: 'rgba(230,57,70,0.08)', color: '#e63946', width: '28px', height: '28px',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '800', fontSize: '.85rem', flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--navy)', margin: 0, fontWeight: '700' }}>{item.title}</h4>
                </div>
                <p style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.55', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. KEY TECHNOLOGY BENEFITS ── */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Technology
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 16px', color: 'var(--navy)' }}>Engineering Built for Extreme Conditions</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Every Liftmak platform is built with redundant safety systems, high-strength materials, and precision hydraulic controls.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {liftmakBrandInfo.techBenefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '24px', transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '14px', lineHeight: '1' }}>{benefit.icon}</span>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{benefit.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.5', margin: 0 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT CATEGORIES ── */}
      <section
        id="liftmak-categories"
        style={{ background: '#0f0f0f', padding: '95px 0', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'radial-gradient(rgba(230,57,70,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px', pointerEvents: 'none'
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Catalog
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 16px', color: '#ffffff' }}>
              Explore Liftmak Equipment Families
            </h2>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', margin: 0 }}>
              Select a category to view models, working heights, capacity ranges, and detailed technical configurations.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {liftmakCategories.map((cat, idx) => (
              <div
                key={cat.id}
                style={{
                  background: '#1a1a1a', border: `1px solid rgba(255,255,255,0.06)`,
                  borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  borderTop: `3px solid ${categoryAccents[idx]}`
                }}
              >
                <div
                  style={{
                    display: 'inline-block', background: `rgba(230,57,70,0.1)`,
                    border: `1px solid rgba(230,57,70,0.2)`, color: categoryAccents[idx],
                    padding: '4px 10px', borderRadius: '4px', fontSize: '.72rem',
                    fontWeight: '800', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px'
                  }}
                >
                  {cat.accentTag}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', margin: '0 0 12px' }}>
                  {cat.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                  {cat.description}
                </p>
                <div style={{ marginBottom: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px' }}>
                  <strong style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.07em', color: categoryAccents[idx], display: 'block', marginBottom: '10px' }}>
                    Typical Applications:
                  </strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.applications.slice(0, 3).map((app, i) => (
                      <li
                        key={i}
                        style={{
                          background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)',
                          padding: '3px 9px', borderRadius: '4px', fontSize: '.8rem'
                        }}
                      >
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/products/liftmak/${cat.id}`}
                  style={{
                    display: 'block', textAlign: 'center', padding: '13px 16px',
                    background: categoryAccents[idx], color: '#ffffff', borderRadius: '6px',
                    fontWeight: '700', textDecoration: 'none', fontSize: '.95rem',
                    transition: 'all 0.2s ease', marginTop: 'auto'
                  }}
                >
                  View Products →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES SERVED ── */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Applications
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 16px', color: 'var(--navy)' }}>Industries We Serve</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Liftmak platforms are trusted by India's most demanding emergency, infrastructure, and industrial operators.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
            {liftmakBrandInfo.industries.map((ind, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '18px 20px', display: 'flex',
                  alignItems: 'center', gap: '14px', transition: 'all 0.25s ease'
                }}
              >
                <span style={{ fontSize: '1.9rem', flexShrink: 0 }}>{ind.icon}</span>
                <strong style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: '700' }}>{ind.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PERFORMANCE INDICATORS ── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Standards
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 16px', color: 'var(--navy)' }}>The Liftmak Performance Indicators</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Verified manufacturer engineering benchmarks built into every platform.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {liftmakBrandInfo.liftmakFeatures.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '22px', transition: 'all 0.25s ease'
                }}
              >
                <h4 style={{ fontSize: '1.08rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{feat.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.5', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ENQUIRY FORM ── */}
      <section id="liftmak-enquiry" style={{ background: '#ffffff', padding: '90px 0' }}>
        <div
          className="container"
          style={{
            background: '#0f0f0f', color: '#ffffff', borderRadius: '12px', padding: '48px',
            display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '48px', alignItems: 'start',
            border: '1px solid rgba(230,57,70,0.15)'
          }}
        >
          <div>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Consultation
            </div>
            <h2 style={{ color: '#ffffff', fontSize: '2.1rem', margin: '0 0 16px' }}>
              Get the Specs.<br />Start a Project.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '28px' }}>
              Connect with our Liftmak technical engineers to receive platform specifications, chassis recommendations, and project pricing.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ display: 'block', color: '#e63946', fontSize: '.85rem', marginBottom: '4px' }}>Please fill in — Name, Surname. Someone from our team will contact you soon.</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '.85rem' }}>Sales Coordination</strong>
                <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>+91 98682 38367</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '.85rem' }}>Email</strong>
                <span style={{ fontSize: '1.05rem', fontWeight: '700' }}>info@eeipl.co.in</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(230,57,70,0.2)',
                  borderRadius: '8px', padding: '40px', textAlign: 'center'
                }}
              >
                <h3 style={{ color: '#e63946', margin: '0 0 12px' }}>Thank You!</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your Liftmak platform enquiry has been received. Our technical team will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {[
                  { id: 'name', label: 'Enter Your Full Name', type: 'text', placeholder: 'Full Name', required: true },
                  { id: 'email', label: 'Enter Email ID', type: 'email', placeholder: 'Email Address', required: true },
                  { id: 'phone', label: 'Enter Your Phone Number', type: 'tel', placeholder: '+91 99999 99999', required: true }
                ].map((field) => (
                  <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor={`liftmak-${field.id}`} style={{ fontSize: '.88rem', fontWeight: '600', color: 'rgba(255,255,255,0.85)' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`liftmak-${field.id}`}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      style={{
                        background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px', padding: '12px', color: '#ffffff', fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="liftmak-message" style={{ fontSize: '.88rem', fontWeight: '600', color: 'rgba(255,255,255,0.85)' }}>
                    Describe your requirement (height, application, chassis preference)
                  </label>
                  <textarea
                    id="liftmak-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., 52m fire fighting platform on MAN chassis for municipal fire department..."
                    style={{
                      background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px', padding: '12px', color: '#ffffff', fontSize: '1rem',
                      resize: 'vertical', outline: 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '14px', fontWeight: '700', borderRadius: '6px',
                    background: '#e63946', border: 'none', color: '#ffffff',
                    cursor: 'pointer', fontSize: '1rem', letterSpacing: '.03em',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              FAQ
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 12px', color: 'var(--navy)' }}>Frequently Asked Questions</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem' }}>
              Common questions about Liftmak hydraulic platforms and EES's support services.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {liftmakBrandInfo.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%', background: 'none', border: 'none', padding: '20px 24px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left', cursor: 'pointer', outline: 'none'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--navy)', paddingRight: '16px' }}>{faq.question}</span>
                    <span
                      style={{
                        fontSize: '1.5rem', color: '#e63946', fontWeight: '400', lineHeight: '1',
                        flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s'
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

      {/* ── 10. BOTTOM CTA BANNER ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a0000 0%, #2d0505 50%, #1a0000 100%)',
          padding: '80px 0',
          borderTop: '1px solid rgba(230,57,70,0.2)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              From Urban Fire Departments to Heavy Industry
            </div>
            <h2 style={{ color: '#ffffff', fontSize: '2.2rem', margin: '0 0 16px', lineHeight: '1.2' }}>
              We've Got You Covered
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              With decades of experience and a commitment to innovation, EES delivers high-performance hydraulic platforms tailored for safety, reliability, and strength-serving industries, municipalities, and emergency response teams worldwide.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '32px' }}>
              At EES, we understand that every sector faces unique challenges — and we've built to meet them head-on. Our tailored solutions are trusted by urban fire departments, deployed by municipal bodies for essential infrastructure maintenance, reaching high-rise buildings across cities, lifting loads in rugged industrial environments. Liftmak platforms deliver unmatched performance, safety, and adaptability across the board.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-block', padding: '14px 24px', background: '#e63946',
                  color: '#ffffff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none',
                  fontSize: '.95rem'
                }}
              >
                Explore Our Products
              </Link>
              <a
                href="#liftmak-enquiry"
                style={{
                  display: 'inline-block', padding: '14px 24px', background: 'transparent',
                  color: '#ffffff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)', fontSize: '.95rem'
                }}
              >
                Download Brochure
              </a>
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(230,57,70,0.15)',
              borderRadius: '12px', padding: '36px'
            }}
          >
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', margin: '0 0 24px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.9rem', marginBottom: '20px' }}>
              Please fill in — Name, Surname. Someone from our team will contact you soon.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Enter Your Full Name', 'Enter Email ID', 'Enter Your Phone Number'].map((placeholder, i) => (
                <input
                  key={i}
                  type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
                  placeholder={placeholder}
                  style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px', padding: '12px 14px', color: '#ffffff',
                    fontSize: '.95rem', outline: 'none'
                  }}
                />
              ))}
              <button
                style={{
                  padding: '13px', background: '#e63946', border: 'none', borderRadius: '6px',
                  color: '#ffffff', fontWeight: '700', cursor: 'pointer', fontSize: '1rem',
                  marginTop: '4px'
                }}
                onClick={() => document.getElementById('liftmak-enquiry') && document.getElementById('liftmak-enquiry').scrollIntoView({ behavior: 'smooth' })}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiftmakParent;
