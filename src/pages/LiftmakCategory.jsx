import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { liftmakCategories } from '../data/liftmakData';

function LiftmakCategory() {
  const { categoryId } = useParams();
  const category = liftmakCategories.find((cat) => cat.id === categoryId);

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
          The equipment category you are looking for does not exist or has been moved.
        </p>
        <Link to="/products/liftmak" className="btn btn-primary" style={{ display: 'inline-flex' }}>
          ← Back to Liftmak Range
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

  // Check which category we're on to render specific content
  const isFireFighting = category.id === 'fire-fighting-hydraulic-platforms';
  const isAWP = category.id === 'aerial-work-platforms';
  const isKnuckle = category.id === 'knuckle-boom-cranes';
  const isMunicipal = category.id === 'other-hydraulic-equipments';

  return (
    <div className="liftmak-category-page animate-fade-up">

      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1c0a0a 60%, #0f0000 100%)',
          color: '#ffffff',
          padding: '80px 0 60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(230,57,70,0.03) 0px, rgba(230,57,70,0.03) 1px, transparent 1px, transparent 48px)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link
            to="/products/liftmak"
            style={{
              color: '#e63946', textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              gap: '6px', fontSize: '.88rem', fontWeight: '700', textTransform: 'uppercase',
              letterSpacing: '.07em', marginBottom: '24px'
            }}
          >
            ← Liftmak Range
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  display: 'inline-block', background: 'rgba(230,57,70,0.12)', border: '1px solid rgba(230,57,70,0.3)',
                  color: '#e63946', padding: '4px 12px', borderRadius: '4px', fontSize: '.72rem',
                  fontWeight: '800', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px'
                }}
              >
                {category.accentTag}
              </span>
              <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 16px', fontWeight: '900', lineHeight: '1.1' }}>
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
                      background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.25)',
                      color: 'rgba(255,255,255,0.8)', padding: '5px 12px', borderRadius: '4px',
                      fontSize: '.78rem', fontWeight: '600'
                    }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(230,57,70,0.2)',
                  borderRadius: '12px', padding: '28px', textAlign: 'center', width: '100%', maxWidth: '300px'
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{ width: '100%', maxHeight: '180px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(230,57,70,0.2))' }}
                />
                <div style={{ marginTop: '14px', fontSize: '.78rem', textTransform: 'uppercase', letterSpacing: '.08em', color: '#e63946', fontWeight: '700' }}>
                  Liftmak · {category.accentTag}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      {category.keyHighlights && (
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {category.keyHighlights.map((h, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--offwhite)', border: '1px solid var(--light)',
                    borderRadius: '8px', padding: '28px', transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '14px', lineHeight: '1' }}>{h.icon}</span>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '700' }}>{h.title}</h4>
                  <p style={{ color: '#4A5A72', fontSize: '.96rem', lineHeight: '1.55', margin: 0 }}>{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FIRE FIGHTING: THREE-COLUMN HIGHLIGHTS ── */}
      {isFireFighting && category.threeHighlights && (
        <section style={{ background: '#0f0f0f', padding: '70px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
              {category.threeHighlights.map((h, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '36px',
                    borderRight: idx < category.threeHighlights.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '14px', fontWeight: '800', lineHeight: '1.3' }}>{h.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.97rem', lineHeight: '1.65', margin: 0 }}>{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FIRE FIGHTING: VITAL FEATURES ── */}
      {isFireFighting && category.vitalFeatures && (
        <section style={{ background: 'var(--offwhite)', padding: '70px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 48px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Life-Saving Features
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>Vital Life-Saving Features</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {category.vitalFeatures.map((f, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '28px', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '14px' }}>{f.icon}</span>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '700' }}>{f.title}</h4>
                  <p style={{ color: '#4A5A72', fontSize: '.94rem', lineHeight: '1.55', margin: 0 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FIRE FIGHTING: EMERGENCY SYSTEMS ── */}
      {isFireFighting && category.emergencySystems && (
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Safety Architecture
              </div>
              <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>Built-In Emergency Systems for Compliant Chassis</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {category.emergencySystems.map((sys, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--offwhite)', border: '1px solid var(--light)',
                    borderRadius: '8px', padding: '28px'
                  }}
                >
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--navy)', marginBottom: '16px', fontWeight: '700' }}>{sys.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {sys.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#e63946', fontWeight: '700', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
                        <span style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AWP: VARIANT CARDS ── */}
      {isAWP && category.awpVariants && (
        <section style={{ background: '#0f0f0f', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Featured Models
              </div>
              <h2 style={{ color: '#ffffff', margin: 0, fontSize: '2rem' }}>Working Height Configurations</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {category.awpVariants.map((v, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: '3px solid #e63946', borderRadius: '12px', padding: '32px'
                  }}
                >
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '6px', fontWeight: '800' }}>{v.title}</h3>
                  <div style={{ color: '#e63946', fontSize: '.82rem', fontWeight: '700', letterSpacing: '.06em', marginBottom: '20px', textTransform: 'uppercase' }}>
                    {v.subtitle}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {v.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#e63946', fontWeight: '700', fontSize: '.9rem', flexShrink: 0, marginTop: '1px' }}>→</span>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.93rem', lineHeight: '1.5' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MODELS TABLE (Fire Fighting & AWP) ── */}
      {(isFireFighting || isAWP || isKnuckle) && category.models && category.models.length > 0 && (
        <section style={{ background: isFireFighting ? 'var(--offwhite)' : '#ffffff', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {isKnuckle ? 'Product Range' : 'Full Lineup'}
              </div>
              <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>
                {isKnuckle ? 'Knuckle Boom Crane Models' : isAWP ? 'Available AWP Models' : 'Fire Platform Models'}
              </h2>
            </div>

            {/* Mobile-friendly cards view for models */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ background: '#0f0f0f' }}>
                    {Object.keys(category.models[0]).map((key) => (
                      <th
                        key={key}
                        style={{
                          padding: '14px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.85)',
                          fontSize: '.78rem', fontWeight: '700', textTransform: 'uppercase',
                          letterSpacing: '.07em', whiteSpace: 'nowrap',
                          borderBottom: '2px solid #e63946'
                        }}
                      >
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.models.map((model, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--light)',
                        background: idx % 2 === 0 ? '#ffffff' : 'var(--offwhite)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {Object.values(model).map((val, vi) => (
                        <td
                          key={vi}
                          style={{
                            padding: '13px 16px', color: vi === 0 ? 'var(--navy)' : '#4A5A72',
                            fontSize: vi === 0 ? '.97rem' : '.9rem',
                            fontWeight: vi === 0 ? '700' : '400',
                            whiteSpace: vi === 0 ? 'nowrap' : 'normal'
                          }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Knuckle crane notes */}
            {isKnuckle && category.otherModels && (
              <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'rgba(230,57,70,0.05)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: '8px', padding: '24px' }}>
                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '8px', fontSize: '1rem' }}>Other Models Available</strong>
                  <p style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.6', margin: 0 }}>{category.otherModels.note}</p>
                </div>
                <div style={{ background: 'rgba(230,57,70,0.05)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: '8px', padding: '24px' }}>
                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '8px', fontSize: '1rem' }}>Hydraulic Winch</strong>
                  <p style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.6', margin: 0 }}>{category.otherModels.hydraulicWinch}</p>
                </div>
                <div style={{ background: 'rgba(230,57,70,0.05)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: '8px', padding: '24px' }}>
                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '8px', fontSize: '1rem' }}>Controls</strong>
                  <p style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.6', margin: 0 }}>{category.otherModels.controls}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── MUNICIPAL: PRODUCT CARDS ── */}
      {isMunicipal && category.products && (
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Products
              </div>
              <h2 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: '2rem' }}>Our Lifting Excellence</h2>
              <p style={{ color: '#4A5A72', fontSize: '1rem', margin: 0 }}>
                Built to perform under pressure — our product categories include:
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {category.products.map((prod, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#0f0f0f', borderRadius: '10px', overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ height: '180px', background: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
                    />
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                      <span style={{ background: '#e63946', color: '#fff', padding: '3px 10px', borderRadius: '3px', fontSize: '.72rem', fontWeight: '700' }}>
                        {prod.capacity}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px', lineHeight: '1.3' }}>{prod.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                      {prod.description}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                      <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.4)' }}>{prod.chassis}</span>
                      <a
                        href="#liftmak-cat-enquiry"
                        style={{
                          color: '#e63946', fontWeight: '700', textDecoration: 'none',
                          fontSize: '.85rem', border: '1px solid rgba(230,57,70,0.3)',
                          padding: '5px 12px', borderRadius: '4px'
                        }}
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STANDARD & OPTIONAL EQUIPMENT ── */}
      {(category.standardEquipment || category.optionalEquipment) && (
        <section style={{ background: 'var(--offwhite)', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
              <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                {isKnuckle ? 'Power That Folds, Strength You Can Rely On' : 'Equipment'}
              </div>
              <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem' }}>
                {isKnuckle ? 'Standard & Optional Equipment' : 'Standard & Optional Equipment'}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {category.standardEquipment && (
                <div style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '32px' }}>
                  <h4 style={{ color: 'var(--navy)', fontSize: '1.15rem', marginBottom: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#e63946', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', fontWeight: '900' }}>✓</span>
                    Standard Equipment
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {category.standardEquipment.map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#e63946', fontSize: '.85rem', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {category.optionalEquipment && (
                <div style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '32px' }}>
                  <h4 style={{ color: 'var(--navy)', fontSize: '1.15rem', marginBottom: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#4A5A72', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', fontWeight: '900' }}>+</span>
                    Optional Equipment
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {category.optionalEquipment.map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#4A5A72', fontSize: '.85rem', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span style={{ color: '#4A5A72', fontSize: '.93rem', lineHeight: '1.5' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA + ENQUIRY ── */}
      <section
        id="liftmak-cat-enquiry"
        style={{
          background: 'linear-gradient(135deg, #1a0000 0%, #2d0505 50%, #1a0000 100%)',
          padding: '80px 0',
          borderTop: '1px solid rgba(230,57,70,0.2)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div style={{ color: '#e63946', fontSize: '.78rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              From Urban Fire Departments to Heavy Industry
            </div>
            <h2 style={{ color: '#ffffff', fontSize: '2.1rem', margin: '0 0 16px', lineHeight: '1.25' }}>
              We've Got You Covered
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.02rem', lineHeight: '1.72', marginBottom: '20px' }}>
              With decades of experience and a commitment to innovation, EES delivers high-performance hydraulic platforms tailored for safety, reliability, and strength — serving industries, municipalities, and emergency response teams worldwide.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '.97rem', lineHeight: '1.65', marginBottom: '32px' }}>
              At EES, we understand that every sector faces unique challenges — and we've built to meet them head-on. Our tailored solutions are trusted by urban fire departments, deployed by municipal bodies for essential infrastructure maintenance, and relied upon across rugged industrial environments. Liftmak platforms deliver unmatched performance, safety, and adaptability across the board.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/products/liftmak"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: '#e63946',
                  color: '#ffffff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.93rem'
                }}
              >
                Explore Our Products
              </Link>
              <a
                href="#"
                style={{
                  display: 'inline-block', padding: '13px 22px', background: 'transparent',
                  color: '#ffffff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)', fontSize: '.93rem'
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
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', margin: '0 0 8px', fontWeight: '700' }}>
              Get the Specs.<br />Start a Project.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.87rem', marginBottom: '24px' }}>
              Please fill in — Name, Surname. Someone from our team will contact you soon.
            </p>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '32px', textAlign: 'center', border: '1px solid rgba(230,57,70,0.2)' }}>
                <h4 style={{ color: '#e63946', margin: '0 0 10px' }}>Thank You!</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '.95rem' }}>
                  Your enquiry has been received. Our technical team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { id: 'name', label: 'Enter Your Full Name', type: 'text', required: true },
                  { id: 'email', label: 'Enter Email ID', type: 'email', required: true },
                  { id: 'phone', label: 'Enter Your Phone Number', type: 'tel', required: true }
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`cat-${field.id}`}
                      style={{ display: 'block', fontSize: '.83rem', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`cat-${field.id}`}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px', padding: '11px 14px', color: '#ffffff', fontSize: '.95rem',
                        outline: 'none', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  style={{
                    marginTop: '4px', padding: '13px', background: '#e63946', border: 'none',
                    borderRadius: '6px', color: '#ffffff', fontWeight: '700', cursor: 'pointer',
                    fontSize: '1rem', transition: 'all 0.2s ease'
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiftmakCategory;
