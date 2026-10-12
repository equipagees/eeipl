import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyDetails, regionalLocations } from '../data/contactData';
import SEO from '../components/SEO';
import { sanitizeInput, validateEmail, validatePhone, isBotSubmission, checkRateLimit } from '../utils/security';

const ACCENT = '#0088cc';
const ACCENT_GOLD = '#ffc107';
const ACCENT_LIGHT = 'rgba(0,136,204,0.12)';
const ACCENT_BORDER = 'rgba(0,136,204,0.28)';
const DARK = '#081220';
const DARK2 = '#0d1d33';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'doosan-bobcat',
    location: '',
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Security check 1: Honeypot bot protection
    if (isBotSubmission(honeypot)) {
      setSubmitted(true);
      return;
    }

    // Security check 2: Rate limiting cooldown
    if (!checkRateLimit('contact_page_form', 5000)) {
      setFormError('Please wait a few moments before submitting another inquiry.');
      return;
    }

    // Security check 3: Validations
    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid corporate email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid phone number (10 to 15 digits).');
      return;
    }

    // Security check 4: Sanitize all inputs
    const cleanPayload = {
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      interest: sanitizeInput(formData.interest),
      location: sanitizeInput(formData.location),
      message: sanitizeInput(formData.message)
    };

    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: 'doosan-bobcat',
        location: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="contact-page animate-fade-up">
      <SEO
        title="Contact Equipage Equipment Solutions | Quotations & Engineering Support"
        description="Connect with Equipage Equipment Solutions (EES / EEIPL) in Delhi NCR, Mumbai, Kolkata, Bengaluru. Request equipment demonstrations, quotations, CAD chassis integration, and AMC consultations."
        keywords="Equipage contact, industrial equipment inquiry, forklift quotation India, Terex crane sales, Beltas ladder support"
        canonicalUrl="https://eeipl.co.in/contact"
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 60%, ${DARK} 100%)`,
          color: '#fff',
          padding: '90px 0 70px',
          position: 'relative',
          overflow: 'hidden'
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
            position: 'absolute', top: '-100px', right: '-100px',
            width: '500px', height: '500px',
            background: `radial-gradient(circle, rgba(0,136,204,0.18) 0%, transparent 68%)`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                color: ACCENT, padding: '5px 14px', borderRadius: '4px',
                fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em',
                textTransform: 'uppercase', marginBottom: '16px'
              }}
            >
              Get In Touch With EES
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '900',
                color: '#fff', margin: '0 0 16px', lineHeight: '1.15'
              }}
            >
              Let's Engineer Your <span style={{ color: ACCENT }}>Fleet Solution</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', margin: '0 0 32px' }}>
              Whether you need technical specifications for Doosan Bobcat forklifts, pricing for Jinwoo SMC high-reach AWPs, or custom PTO mounting on Skymech cranes — our engineering experts are ready to assist.
            </p>

            {/* Quick Stat Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginTop: '20px' }}>
              {[
                { label: 'Authorised Brands', val: '8 World-Class' },
                { label: 'Service Network', val: 'PAN India' },
                { label: 'Emergency Support', val: '24/7 Breakdown' },
                { label: 'Response Time', val: '< 2 Hours' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px', padding: '14px', textAlign: 'center'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: ACCENT_GOLD, fontWeight: '800' }}>{stat.val}</strong>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK CONTACT CARDS ──────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '60px 0', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            
            <a
              href={`tel:${companyDetails.primaryPhoneTel}`}
              style={{
                textDecoration: 'none', background: 'var(--offwhite)', border: '1px solid var(--light)',
                borderRadius: '10px', padding: '24px', transition: 'all 0.25s ease', display: 'flex', gap: '16px', alignItems: 'center'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: ACCENT_LIGHT, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                📞
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '.75rem', color: ACCENT, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px' }}>
                  Call Us Directly
                </span>
                <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: '800' }}>
                  {companyDetails.primaryPhone}
                </strong>
                <span style={{ fontSize: '.8rem', color: '#8898aa' }}>{companyDetails.brandName}</span>
              </div>
            </a>

            <a
              href={`mailto:${companyDetails.email}`}
              style={{
                textDecoration: 'none', background: 'var(--offwhite)', border: '1px solid var(--light)',
                borderRadius: '10px', padding: '24px', transition: 'all 0.25s ease', display: 'flex', gap: '16px', alignItems: 'center'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: ACCENT_LIGHT, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                ✉️
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '.75rem', color: ACCENT, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px' }}>
                  Email Enquiries
                </span>
                <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: '800' }}>
                  {companyDetails.email}
                </strong>
                <span style={{ fontSize: '.8rem', color: '#8898aa' }}>Central Sales Desk</span>
              </div>
            </a>

            <div
              style={{
                background: 'var(--offwhite)', border: '1px solid var(--light)',
                borderRadius: '10px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: ACCENT_LIGHT, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                📍
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '.75rem', color: ACCENT, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px' }}>
                  Registered Office
                </span>
                <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.95rem', fontWeight: '800' }}>
                  Sector 142, Greater Noida
                </strong>
                <span style={{ fontSize: '.8rem', color: '#8898aa' }}>Gautambuddha Nagar, UP – 201304</span>
              </div>
            </div>

            <div
              style={{
                background: 'var(--offwhite)', border: '1px solid var(--light)',
                borderRadius: '10px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: ACCENT_LIGHT, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                ⏰
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '.75rem', color: ACCENT, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px' }}>
                  Business Hours
                </span>
                <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.95rem', fontWeight: '800' }}>
                  Mon – Sat: 9:00 AM – 6:30 PM
                </strong>
                <span style={{ fontSize: '.8rem', color: ACCENT_GOLD, fontWeight: '700' }}>24/7 Breakdown Hotline</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. MAIN FORM & REGIONAL HUBS GRID ──────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'start' }}>
            
            {/* Left: Contact Form */}
            <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Technical & Sales Enquiry
              </div>
              <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', margin: '0 0 10px', fontWeight: '800' }}>
                Send an Equipment Enquiry
              </h2>
              <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', marginBottom: '28px' }}>
                Fill out the form below with your project requirements. An EES application engineer will respond with technical spec sheets and formal quotation within 2 business hours.
              </p>

              {submitted ? (
                <div style={{ background: 'rgba(0,136,204,0.06)', border: `1px solid ${ACCENT_BORDER}`, borderRadius: '8px', padding: '36px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                  <h3 style={{ color: 'var(--navy)', margin: '0 0 8px', fontWeight: '800' }}>Enquiry Successfully Submitted</h3>
                  <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: '0 0 20px' }}>
                    Thank you for contacting Equipage Engineering & Industrial Pvt Ltd. Our sales coordination team has received your request and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ padding: '10px 20px', background: ACCENT, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {formError && (
                    <div style={{ background: '#fee2e2', border: '1px solid #ef4444', color: '#b91c1c', padding: '12px', borderRadius: '6px', fontSize: '.9rem' }}>
                      ⚠️ {formError}
                    </div>
                  )}

                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="_website_security_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g., Rajesh Sharma"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="E.g., Apex Logistics Pvt Ltd"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Email ID *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99999 99999"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="contact-interest" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Equipment / Brand Partner *
                      </label>
                      <select
                        id="contact-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                      >
                        <option value="doosan-bobcat">Doosan Bobcat Forklifts</option>
                        <option value="byd-mhe">BYD Lithium Electric MHE</option>
                        <option value="terex-franna">Terex Franna Pick & Carry Cranes</option>
                        <option value="jinwoo-smc">Jinwoo SMC High-Reach AWPs & Lifts</option>
                        <option value="hydramak">Hydramak HM24A Truck Mounted Boom Lift</option>
                        <option value="skymech">Skymech Knuckle & Straight Boom Cranes</option>
                        <option value="liftmak">LIFTMAK Fire Fighting Platforms</option>
                        <option value="beltas">BELTAS Turntable Ladders</option>
                        <option value="amc-spares">AMC & Genuine Spare Parts</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-location" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                        Project Location / State
                      </label>
                      <input
                        type="text"
                        id="contact-location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="E.g., Sanand, Gujarat / Noida, UP"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '.84rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Detailed Requirements & Specifications
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify required capacity (e.g., 3-Ton Electric Forklift / 45m Aerial Platform / 15Tm Crane), chassis preference, site conditions..."
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--light)', borderRadius: '6px', fontSize: '.93rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '14px', background: ACCENT, border: 'none', borderRadius: '6px',
                      color: '#fff', fontWeight: '800', fontSize: '1rem', cursor: 'pointer',
                      transition: 'all 0.2s ease', boxShadow: '0 4px 16px rgba(0,136,204,0.25)'
                    }}
                  >
                    Submit Equipment Inquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Right: Office Locations & Regional Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Registered Address */}
              <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '32px' }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.25rem', margin: '0 0 16px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ background: ACCENT_LIGHT, color: ACCENT, width: '28px', height: '28px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🏢</span>
                  {companyDetails.brandName}
                </h3>
                <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: '0 0 14px' }}>
                  <strong>{companyDetails.legalName}</strong><br />
                  {companyDetails.address.line1},<br />
                  {companyDetails.address.line2},<br />
                  {companyDetails.address.stateZip}
                </p>
                <div style={{ fontSize: '.88rem', color: '#4A5A72', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span>📞 <strong>Primary Line:</strong> <a href={`tel:${companyDetails.primaryPhoneTel}`} style={{ color: ACCENT, fontWeight: '700', textDecoration: 'none' }}>{companyDetails.primaryPhone}</a></span>
                  <span>✉️ <strong>Email:</strong> <a href={`mailto:${companyDetails.email}`} style={{ color: ACCENT, fontWeight: '700', textDecoration: 'none' }}>{companyDetails.email}</a></span>
                </div>
              </div>

              {/* Regional Locations & Area Representatives */}
              <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '28px' }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.2rem', margin: '0 0 16px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ background: ACCENT_LIGHT, color: ACCENT, width: '28px', height: '28px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>📍</span>
                  Regional Locations &amp; Contacts
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                  {regionalLocations.map((loc, idx) => (
                    <div key={idx} style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', padding: '14px' }}>
                      <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.92rem', marginBottom: '4px' }}>
                        {loc.icon} {loc.label}
                      </strong>
                      <div style={{ color: '#4A5A72', fontSize: '.86rem', marginBottom: '6px' }}>
                        {loc.contactPerson}
                      </div>
                      <a
                        href={`tel:${loc.phoneTel}`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                          color: ACCENT, fontWeight: '700', fontSize: '.86rem', textDecoration: 'none'
                        }}
                      >
                        📞 {loc.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Assistance */}
              <div style={{ background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 100%)`, color: '#fff', borderRadius: '12px', padding: '28px', border: `1px solid ${ACCENT_BORDER}` }}>
                <div style={{ color: ACCENT_GOLD, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Emergency Assistance
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', margin: '0 0 10px', fontWeight: '800' }}>
                  24/7 Breakdown &amp; Service Helpline
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '.9rem', lineHeight: '1.6', margin: '0 0 16px' }}>
                  Mobile engineering vans and factory-trained technicians on standby for urgent service and parts across India.
                </p>
                <a
                  href={`tel:${companyDetails.primaryPhoneTel}`}
                  style={{
                    display: 'inline-block', padding: '10px 18px', background: ACCENT,
                    color: '#fff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.9rem'
                  }}
                >
                  📞 Call {companyDetails.primaryPhone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. AUTHORISED BRAND PARTNERS ────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '70px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              OEM Partnerships
            </div>
            <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '2rem', fontWeight: '800' }}>
              Represented Brands & Distribution Scope
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Doosan Bobcat', tag: 'Forklifts & Reach Trucks', link: '/products/doosan-bobcat' },
              { name: 'BYD MHE', tag: 'LiFePO4 Lithium MHE', link: '/products/byd-mhe' },
              { name: 'Terex Franna', tag: 'Pick & Carry Cranes', link: '/products/terex-franna' },
              { name: 'Jinwoo SMC', tag: 'High-Reach AWPs & Lifts', link: '/products/jinwoo-smc' },
              { name: 'Hydramak AWP', tag: 'HM24A Boom Lifts', link: '/products/hydramak' },
              { name: 'Skymech Equipments', tag: 'Knuckle & Straight Cranes', link: '/products/skymech' },
              { name: 'LIFTMAK', tag: 'Fire Fighting Platforms', link: '/products/liftmak' },
              { name: 'BELTAS', tag: 'Turntable Ladders', link: '/products/beltas' }
            ].map((brand, i) => (
              <Link
                key={i}
                to={brand.link}
                style={{
                  textDecoration: 'none', background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '8px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '4px',
                  transition: 'all 0.2s ease'
                }}
              >
                <strong style={{ color: 'var(--navy)', fontSize: '1.02rem', fontWeight: '800' }}>{brand.name}</strong>
                <span style={{ fontSize: '.8rem', color: '#8898aa' }}>{brand.tag}</span>
                <span style={{ fontSize: '.78rem', color: ACCENT, fontWeight: '700', marginTop: '6px' }}>Explore Range →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FREQUENTLY ASKED QUESTIONS ────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              FAQ
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 10px', fontSize: '2rem', fontWeight: '800' }}>
              Common Inquiries & Service Questions
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1rem', margin: 0 }}>
              Quick answers about sales consultation, delivery timelines, AMC, and parts.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                question: 'How fast can EES deliver equipment and formal technical proposals?',
                answer:
                  'Our engineering team prepares detailed technical proposals with load charts, chassis subframe drawings, and pricing within 2 to 4 business hours. Standard fleet delivery timelines depend on chassis availability and custom fitment requirements.'
              },
              {
                question: 'Do you provide on-site installation, chassis PTO mounting, and PDI?',
                answer:
                  'Yes. EES handles complete turnkey commissioning including subframe fabrication, PTO hydraulic pump mounting, pre-delivery load testing, dielectric insulation certification (for Jinwoo AWPs), and safety LMI setup.'
              },
              {
                question: 'Does EES supply original OEM spare parts across India?',
                answer:
                  'Yes. We maintain a dedicated inventory of genuine OEM parts including hydraulic cylinders, proportional valves, seal kits, LMI sensors, wire ropes, and lithium battery management controllers across our regional depots.'
              },
              {
                question: 'What is included in an EES Annual Maintenance Contract (AMC)?',
                answer:
                  'Our AMC packages cover scheduled preventive health checks, oil & filter replacements, hydraulic pressure tests, boom extension lubrication, structural alignment inspections, and priority emergency breakdown dispatch.'
              },
              {
                question: 'Can EES conduct certified operator training for our team?',
                answer:
                  'Yes. EES certified trainers provide hands-on operator instruction on site, covering safe load chart reading, stability limits, daily maintenance routines, and emergency lowering protocols.'
              }
            ].map((faq, idx) => {
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
                    <span style={{ fontSize: '1.02rem', fontWeight: '700', color: 'var(--navy)', paddingRight: '16px' }}>
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
                    <div style={{ padding: '20px 24px', color: '#4A5A72', fontSize: '.96rem', lineHeight: '1.65' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. MAP / DIRECTIONS FOOTER CARD ────────────────────────────────── */}
      <section style={{ background: DARK, color: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span style={{ color: ACCENT_GOLD, fontSize: '.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.1em', display: 'block', marginBottom: '6px' }}>
              {companyDetails.brandName}
            </span>
            <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '800', margin: 0 }}>
              Ready to Discuss Your Heavy Equipment Needs?
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <a
              href={`tel:${companyDetails.primaryPhoneTel}`}
              style={{
                display: 'inline-block', padding: '12px 24px', background: ACCENT,
                color: '#fff', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.95rem'
              }}
            >
              📞 Call {companyDetails.primaryPhone}
            </a>
            <a
              href={`mailto:${companyDetails.email}`}
              style={{
                display: 'inline-block', padding: '12px 24px', background: 'transparent',
                color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px',
                fontWeight: '700', textDecoration: 'none', fontSize: '.95rem'
              }}
            >
              ✉️ Email {companyDetails.email}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
