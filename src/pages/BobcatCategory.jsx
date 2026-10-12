import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bobcatCategories } from '../data/bobcatData';

const ACCENT = '#ff5500';
const ACCENT_LIGHT = 'rgba(255,85,0,0.1)';
const ACCENT_BORDER = 'rgba(255,85,0,0.25)';
const DARK = '#0a0e17';

function BobcatCategory() {
  const { categoryId } = useParams();
  const category = bobcatCategories.find((cat) => cat.id === categoryId);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!category) {
    return (
      <div
        className="container"
        style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 20px' }}
      >
        <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Category Not Found</h2>
        <p style={{ color: '#4A5A72', marginBottom: '24px' }}>
          The Doosan Bobcat category you are looking for does not exist or has been moved.
        </p>
        <Link to="/products/doosan-bobcat" className="btn btn-primary" style={{ display: 'inline-flex' }}>
          ← Back to Doosan Bobcat Range
        </Link>
      </div>
    );
  }

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
    <div className="bobcat-category-page animate-fade-up">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #121927 60%, ${DARK} 100%)`,
          color: '#fff', padding: '80px 0 60px', position: 'relative', overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(${ACCENT_LIGHT} 1px, transparent 1px)`,
            backgroundSize: '28px 28px', pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '440px', height: '440px',
            background: 'radial-gradient(circle, rgba(255,85,0,0.13) 0%, transparent 68%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <Link
            to="/products/doosan-bobcat"
            style={{
              color: ACCENT, textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              gap: '6px', fontSize: '.86rem', fontWeight: '700', textTransform: 'uppercase',
              letterSpacing: '.07em', marginBottom: '24px'
            }}
          >
            ← Doosan Bobcat Range
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                  color: ACCENT, padding: '4px 12px', borderRadius: '4px',
                  fontSize: '.72rem', fontWeight: '800', letterSpacing: '.1em',
                  textTransform: 'uppercase', marginBottom: '16px'
                }}
              >
                {category.accentTag}
              </span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.4rem)', margin: '0 0 16px', fontWeight: '900', lineHeight: '1.1' }}>
                {category.heroTitle}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '24px', maxWidth: '600px' }}>
                {category.heroSubtitle}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.applications.map((app, i) => (
                  <span
                    key={i}
                    style={{
                      background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                      color: 'rgba(255,255,255,0.8)', padding: '4px 11px',
                      borderRadius: '4px', fontSize: '.78rem', fontWeight: '600'
                    }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Model visual card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)', border: `1px solid ${ACCENT_BORDER}`,
                  borderRadius: '12px', padding: '28px', textAlign: 'center', width: '100%', maxWidth: '300px'
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{ width: '100%', maxHeight: '190px', objectFit: 'contain', filter: `drop-shadow(0 10px 24px rgba(255,85,0,0.2))` }}
                />
                <div style={{ marginTop: '14px', fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.08em', color: ACCENT, fontWeight: '700' }}>
                  Doosan Bobcat · {category.accentTag}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW SECTION ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Overview
            </div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2rem', margin: '0 0 20px', lineHeight: '1.2' }}>
              {category.name} — At a Glance
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.72', marginBottom: '24px' }}>
              {category.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {category.overviewPoints.map((pt, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: ACCENT, fontWeight: '800', fontSize: '.9rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#4A5A72', fontSize: '.97rem', lineHeight: '1.5' }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {category.keyHighlights.map((h, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '22px', display: 'flex', gap: '16px', alignItems: 'flex-start'
                }}
              >
                <span style={{ fontSize: '2rem', flexShrink: 0, lineHeight: '1', marginTop: '2px' }}>{h.icon}</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', fontWeight: '700' }}>{h.title}</h4>
                  <p style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5', margin: 0 }}>{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS TABLE ───────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Technical Data
            </div>
            <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>
              Technical Specifications — {category.name}
            </h2>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', minWidth: '560px' }}>
              <thead>
                <tr style={{ background: DARK }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}`, width: '42%' }}>
                    Parameter
                  </th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: '#fff', fontSize: '.85rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                    {category.name} Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.specs.map((spec, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--light)', background: idx % 2 === 0 ? '#fff' : 'var(--offwhite)' }}>
                    <td style={{ padding: '12px 20px', fontSize: '.82rem', fontWeight: '700', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: '12px 20px', fontSize: '.93rem', color: '#4A5A72', fontWeight: '500' }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', color: '#8898aa', fontSize: '.83rem', marginTop: '14px', fontStyle: 'italic' }}>
            * Specifications are indicative and subject to final mast and attachment selection. Contact EES for engineering data sheets.
          </p>
        </div>
      </section>

      {/* ── MAST SPECIFICATIONS / RATED CAPACITIES TABLE ───────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Capacity Data
              </div>
              <h2 style={{ color: 'var(--navy)', fontSize: '2rem', margin: '0 0 16px', lineHeight: '1.2' }}>
                Mast Specifications & Capacities
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '16px' }}>
                The table below provides rated capacities and lift heights across standard (STD), Full Free (FF), and Triplex (FFT) mast configurations for the {category.name} series.
              </p>
              <div style={{ background: 'var(--offwhite)', border: `1px solid ${ACCENT_BORDER}`, borderRadius: '8px', padding: '16px 20px' }}>
                <strong style={{ display: 'block', color: ACCENT, fontSize: '.82rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  Safety System Note:
                </strong>
                <p style={{ color: '#4A5A72', fontSize: '.9rem', lineHeight: '1.55', margin: 0 }}>
                  All Bobcat units feature Guardian Stability System (GSS) and Operator Sensing System (OSS) interlocks to automatically control tilt speed and travel speed at high lift heights.
                </p>
              </div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ background: DARK }}>
                    <th style={{ padding: '13px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.07em', borderBottom: `2px solid ${ACCENT}` }}>
                      Mast / Model Class
                    </th>
                    <th style={{ padding: '13px 16px', textAlign: 'left', color: '#fff', fontSize: '.8rem', fontWeight: '800', borderBottom: `2px solid ${ACCENT}` }}>
                      Rated Load Capacity
                    </th>
                    <th style={{ padding: '13px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '.75rem', fontWeight: '600', borderBottom: `2px solid ${ACCENT}` }}>
                      Note / Configuration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.loadChartData.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--light)',
                        background: idx === 0 ? `${ACCENT_LIGHT}` : idx % 2 === 0 ? '#fff' : 'var(--offwhite)'
                      }}
                    >
                      <td style={{ padding: '12px 16px', fontSize: '.9rem', fontWeight: '700', color: 'var(--navy)' }}>
                        {row.radius}
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '.9rem', color: idx === 0 ? ACCENT : '#4A5A72', fontWeight: idx === 0 ? '700' : '500' }}>
                        {row.capacity}
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '.82rem', color: '#8898aa', fontStyle: row.note ? 'italic' : 'normal' }}>
                        {row.note || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES (4-card grid) ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Key Features
            </div>
            <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>
              {category.name} — Engineering Features
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {category.features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '26px',
                  borderTop: `3px solid ${ACCENT}`, transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '6px',
                    background: ACCENT_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.9rem', fontWeight: '900', color: ACCENT, marginBottom: '16px'
                  }}
                >
                  0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.08rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '700' }}>{f.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.94rem', lineHeight: '1.6', margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD & OPTIONAL EQUIPMENT ────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Equipment
            </div>
            <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>
              Standard & Optional Features
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', padding: '32px' }}>
              <h4 style={{ color: 'var(--navy)', fontSize: '1.12rem', marginBottom: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: ACCENT, color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', fontWeight: '900' }}>✓</span>
                Standard Equipment
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {category.standardEquipment.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: ACCENT, fontSize: '.85rem', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                    <span style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', padding: '32px' }}>
              <h4 style={{ color: 'var(--navy)', fontSize: '1.12rem', marginBottom: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: '#4A5A72', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', fontWeight: '900' }}>+</span>
                Optional Equipment & Attachments
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {category.optionalEquipment.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#4A5A72', fontSize: '.85rem', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                    <span style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5' }}>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Attachment cards */}
              <div style={{ marginTop: '24px', borderTop: '1px solid var(--light)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <strong style={{ fontSize: '.78rem', color: ACCENT, textTransform: 'uppercase', letterSpacing: '.07em' }}>
                  Available Attachments
                </strong>
                {category.attachments.map((att, i) => (
                  <div key={i} style={{ background: '#fff', padding: '12px 14px', borderRadius: '6px', border: '1px solid var(--light)' }}>
                    <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.9rem', marginBottom: '2px' }}>{att.name}</strong>
                    <span style={{ color: '#4A5A72', fontSize: '.82rem' }}>{att.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER CATEGORIES IN RANGE ─────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '70px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Lineup
            </div>
            <h2 style={{ color: '#fff', margin: 0, fontSize: '1.9rem' }}>Explore Other Doosan Bobcat Equipment</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {bobcatCategories.filter(cat => cat.id !== category.id).map((cat) => (
              <div
                key={cat.id}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: `2px solid ${ACCENT}`, borderRadius: '10px', padding: '28px'
                }}
              >
                <div style={{ color: ACCENT, fontSize: '.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '10px' }}>
                  {cat.accentTag}
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', margin: '0 0 10px' }}>{cat.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '.9rem', lineHeight: '1.55', marginBottom: '20px' }}>
                  {cat.description.substring(0, 100)}...
                </p>
                <Link
                  to={`/products/doosan-bobcat/${cat.id}`}
                  style={{
                    display: 'inline-block', padding: '10px 18px', background: ACCENT,
                    color: '#fff', borderRadius: '6px', fontWeight: '700',
                    textDecoration: 'none', fontSize: '.88rem'
                  }}
                >
                  View {cat.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM + CTA ────────────────────────────────────────────────── */}
      <section
        id={`bobcat-${category.id}-enquiry`}
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #121927 50%, ${DARK} 100%)`,
          padding: '80px 0', borderTop: `1px solid ${ACCENT_BORDER}`
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              From Warehouses to Heavy Industrial Yards
            </div>
            <h2 style={{ color: '#fff', fontSize: '2.1rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              We've Got You Covered
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '28px' }}>
              EES is the authorised Doosan Bobcat distributor for North India. Our technical team will assist with load capacity calculations, mast selection, attachment engineering, operator training, and AMC support.
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
                to="/products/doosan-bobcat"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: ACCENT,
                  color: '#fff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                ← All Doosan Bobcat Equipment
              </Link>
              <a
                href={category.brochurePdf || '#'}
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
            <h3 style={{ color: '#fff', fontSize: '1.45rem', margin: '0 0 8px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.87rem', marginBottom: '24px' }}>
              Enquire about the {category.name} — share your load capacity and working height requirements.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: `1px solid ${ACCENT_BORDER}` }}>
                <h4 style={{ color: ACCENT, margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Your {category.name} enquiry has been received. Our team will contact you shortly.
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
                      htmlFor={`bobcat-${category.id}-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`bobcat-${category.id}-${field.id}`}
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
                  <label htmlFor={`bobcat-${category.id}-message`} style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}>
                    Application & duty cycle details (optional)
                  </label>
                  <textarea
                    id={`bobcat-${category.id}-message`}
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`E.g., ${category.name} for manufacturing plant, load weight 3.0T...`}
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

export default BobcatCategory;
