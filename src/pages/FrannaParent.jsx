import { useState } from 'react';
import { Link } from 'react-router-dom';
import { frannaBrandInfo, frannaCategories } from '../data/frannaData';
import SEO from '../components/SEO';

// Teal-green accent palette for Franna (matching Terex brand identity)
const ACCENT = '#00897b';
const ACCENT_LIGHT = 'rgba(0,137,123,0.12)';
const ACCENT_BORDER = 'rgba(0,137,123,0.28)';
const DARK = '#050f0d';
const DARK2 = '#091a17';

function FrannaParent() {
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
    <div className="franna-parent-page animate-fade-up">
      <SEO
        title="Terex Franna Pick and Carry Cranes India | 17T to 25T Articulated Cranes"
        description="Equipage Equipment Solutions is the authorized distributor for Terex Franna articulated pick & carry cranes across North India. No outriggers required, rough terrain mobility, maximum safety."
        keywords="Terex Franna India, pick and carry crane, Franna MAC 25, Franna AT 17, articulated crane Delhi, heavy lifting mobile crane"
        canonicalUrl="https://eeipl.co.in/products/terex-franna"
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 55%, ${DARK} 100%)`,
          color: '#fff', padding: '100px 0 80px', position: 'relative', overflow: 'hidden'
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(${ACCENT_LIGHT} 1px, transparent 1px)`,
            backgroundSize: '28px 28px', pointerEvents: 'none'
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '520px', height: '520px',
            background: `radial-gradient(circle, rgba(0,137,123,0.14) 0%, transparent 68%)`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span
              style={{
                display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                color: ACCENT, padding: '5px 14px', borderRadius: '4px',
                fontSize: '.75rem', fontWeight: '800', letterSpacing: '.1em',
                textTransform: 'uppercase', marginBottom: '20px'
              }}
            >
              🏗️ Authorised Distributor — North India
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900',
                lineHeight: '1.1', margin: '0 0 20px', color: '#fff'
              }}
            >
              TEREX / FRANNA<br />
              <span style={{ color: ACCENT }}>Pick & Carry Cranes</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.65', maxWidth: '560px', marginBottom: '12px' }}>
              {frannaBrandInfo.tagline}
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', maxWidth: '540px', marginBottom: '14px' }}>
              FR17 XSi · FR20 · FR25 XS
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', maxWidth: '540px', marginBottom: '32px' }}>
              {frannaBrandInfo.overview}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#franna-enquiry"
                style={{
                  display: 'inline-block', padding: '14px 28px',
                  background: ACCENT, color: '#fff', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Request a Quote
              </a>
              <a
                href="#franna-categories"
                style={{
                  display: 'inline-block', padding: '14px 28px', background: 'transparent',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '1rem'
                }}
              >
                Explore Models ↓
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
                src="/terex_franna_hero.png"
                alt="Franna Pick & Carry Crane"
                style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', filter: `drop-shadow(0 12px 28px rgba(0,137,123,0.22))` }}
              />
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}>
                {frannaBrandInfo.keyStats.map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '1.35rem', color: ACCENT, fontWeight: '900', lineHeight: '1' }}>
                      {stat.value}
                    </strong>
                    <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT FRANNA ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              40+ Years of Innovation
            </div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2.3rem', margin: '0 0 20px', lineHeight: '1.2' }}>
              The World's Leading Pick & Carry Crane
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '20px' }}>
              {frannaBrandInfo.overview}
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
              {frannaBrandInfo.aboutText}
            </p>
          </div>
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: '700' }}>
              The Franna Performance Standard
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: ACCENT, fontWeight: '900' }}>17T – 25T</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Lifting capacity range across the FR model family</span>
              </div>
              <div style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: ACCENT, fontWeight: '900' }}>0 Outriggers</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Zero setup time — lift immediately on site arrival</span>
              </div>
              <div style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: ACCENT, fontWeight: '900' }}>360°</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Continuous boom rotation on all FR models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TECHNOLOGY BENEFITS ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Technology
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Engineering Built for Productivity
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Every Franna crane integrates articulated steering, dynamic load monitoring, and hydrostatic drive to deliver the most productive crane per shift on any site.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {frannaBrandInfo.techBenefits.map((b, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '28px', transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '14px', lineHeight: '1' }}>{b.icon}</span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '700' }}>{b.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: 0 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MODEL CATEGORIES GRID ────────────────────────────────────────── */}
      <section
        id="franna-categories"
        style={{ background: DARK, padding: '95px 0', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(${ACCENT_LIGHT} 1px, transparent 1px)`,
            backgroundSize: '32px 32px', pointerEvents: 'none'
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Model Range
            </div>
            <h2 style={{ color: '#fff', margin: '0 0 14px', fontSize: '2.2rem' }}>
              Explore the Franna FR Range
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', margin: 0 }}>
              Three capacity classes covering 17, 20, and 25 tonnes. Select a model to view detailed specifications, load charts, and features.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {frannaCategories.map((cat, idx) => (
              <div
                key={cat.id}
                style={{
                  background: '#0f1f1c', border: '1px solid rgba(255,255,255,0.06)',
                  borderTop: `3px solid ${ACCENT}`, borderRadius: '12px',
                  padding: '32px', display: 'flex', flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                    color: ACCENT, padding: '4px 10px', borderRadius: '4px',
                    fontSize: '.72rem', fontWeight: '800', letterSpacing: '.1em',
                    textTransform: 'uppercase', marginBottom: '20px'
                  }}
                >
                  {cat.accentTag}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#fff', margin: '0 0 12px' }}>
                  {cat.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.97rem', lineHeight: '1.65', marginBottom: '24px', flex: 1 }}>
                  {cat.description}
                </p>
                <div style={{ marginBottom: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px' }}>
                  <strong style={{ fontSize: '.73rem', textTransform: 'uppercase', letterSpacing: '.07em', color: ACCENT, display: 'block', marginBottom: '10px' }}>
                    Applications:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {cat.applications.slice(0, 4).map((app, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)',
                          padding: '3px 9px', borderRadius: '4px', fontSize: '.78rem'
                        }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick spec preview */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                  {[
                    { lbl: 'Capacity', val: cat.specs.find(s => s.label === 'Rated Capacity')?.value },
                    { lbl: 'Max Reach', val: cat.specs.find(s => s.label === 'Max. Working Radius')?.value },
                    { lbl: 'Boom', val: cat.specs.find(s => s.label === 'Max. Boom Length')?.value },
                    { lbl: 'Outriggers', val: 'None Required' },
                  ].map((stat, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ display: 'block', fontSize: '.65rem', color: ACCENT, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '2px' }}>{stat.lbl}</span>
                      <span style={{ fontSize: '.85rem', color: '#fff', fontWeight: '600' }}>{stat.val}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/products/terex-franna/${cat.id}`}
                  style={{
                    display: 'block', textAlign: 'center', padding: '13px 16px',
                    background: ACCENT, color: '#fff', borderRadius: '6px',
                    fontWeight: '700', textDecoration: 'none', fontSize: '.95rem',
                    transition: 'all 0.2s ease', marginTop: 'auto'
                  }}
                >
                  View Full Specifications →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY BUY FROM EES ───────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Preferred Partner
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 14px', color: 'var(--navy)' }}>
              Why Buy Franna from EES?
            </h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              We provide complete lifecycle support — from first enquiry to long-term maintenance — ensuring your Franna crane delivers maximum productivity.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
            {frannaBrandInfo.eeiplSupport.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '28px', transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span
                    style={{
                      background: ACCENT_LIGHT, color: ACCENT, width: '28px', height: '28px',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '900', fontSize: '.82rem', flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', margin: 0, fontWeight: '700' }}>{item.title}</h4>
                </div>
                <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.55', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES SERVED ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Applications
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 14px', color: 'var(--navy)' }}>Industries We Serve</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Franna pick and carry cranes are trusted by the most demanding site operators across construction, industrial, and infrastructure sectors.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {frannaBrandInfo.industries.map((ind, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
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

      {/* ── 7. PERFORMANCE FEATURES ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Performance
            </div>
            <h2 style={{ textAlign: 'center', margin: '0 0 14px', color: 'var(--navy)' }}>
              The Franna Performance Indicators
            </h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Proven engineering capabilities built into every FR model as standard.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {frannaBrandInfo.frannaFeatures.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '24px', transition: 'all 0.25s ease'
                }}
              >
                <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{feat.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.55', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              FAQ
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Common questions about Franna pick and carry cranes and EES's support services.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {frannaBrandInfo.faqs.map((faq, idx) => {
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
                      maxHeight: isOpen ? '500px' : '0', overflow: 'hidden',
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

      {/* ── 9. ENQUIRY + CTA ────────────────────────────────────────────────── */}
      <section
        id="franna-enquiry"
        style={{
          background: `linear-gradient(135deg, #030c0a 0%, #091a17 50%, #030c0a 100%)`,
          padding: '90px 0', borderTop: `1px solid ${ACCENT_BORDER}`
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              From Construction Sites to Heavy Industry
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.2rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              We've Got You Covered
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '28px' }}>
              Whether you're lifting precast panels on a high-rise construction site or positioning heavy equipment in a petrochemical plant, EES has the right Franna model and the technical expertise to back it up. Our North India team handles everything from model selection to full lifecycle support.
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
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${ACCENT_BORDER}`,
              borderRadius: '12px', padding: '36px'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 8px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.87rem', marginBottom: '24px' }}>
              Tell us your model preference, site conditions, and lift requirements — our team will respond with a full technical proposal.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: `1px solid ${ACCENT_BORDER}` }}>
                <h4 style={{ color: ACCENT, margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your Franna enquiry has been received. Our technical team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { id: 'name', label: 'Enter Your Full Name', type: 'text', required: true, placeholder: 'Full Name' },
                  { id: 'email', label: 'Enter Email ID', type: 'email', required: true, placeholder: 'Email Address' },
                  { id: 'phone', label: 'Enter Your Phone Number', type: 'tel', required: true, placeholder: '+91 99999 99999' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`franna-parent-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`franna-parent-${field.id}`}
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
                  <label htmlFor="franna-parent-message" style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}>
                    Model preference & application details
                  </label>
                  <textarea
                    id="franna-parent-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., FR25 XS for petrochemical plant, looking for 25T capacity..."
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

export default FrannaParent;
