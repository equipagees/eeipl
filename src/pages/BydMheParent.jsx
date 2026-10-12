import { useState } from 'react';
import { Link } from 'react-router-dom';
import { bydBrandInfo, bydCategories } from '../data/bydData';
import SEO from '../components/SEO';

function BydMheParent() {
  // FAQs Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
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
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <div className="byd-parent-page animate-fade-up">
      <SEO
        title="BYD Lithium LiFePO4 Electric Forklifts India | Zero Maintenance MHE"
        description="Equipage Equipment Solutions is the authorized distributor of BYD lithium iron phosphate electric forklifts, reach trucks & stackers in India. 2-hour fast charging, 0 battery maintenance, zero emissions."
        keywords="BYD lithium forklift India, BYD electric forklift, LiFePO4 material handling equipment, lithium reach truck Delhi NCR, zero emission warehouse forklift"
        canonicalUrl="https://eeipl.co.in/products/byd-mhe"
      />
      
      {/* 1. HERO SECTION */}
      <section className="page-header byd-hero-section" style={{ background: 'linear-gradient(135deg, #0e1730 0%, #16224a 100%)', color: '#ffffff', padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle grid background pattern */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(rgba(58, 159, 216, 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.8, pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div className="hero-text-col">
            <span className="section-label" style={{ color: 'var(--cyan)' }}>Official Distributor in India</span>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: '1.1', fontWeight: '900', margin: '16px 0 20px' }}>
              BYD Lithium Electric <br />
              <span style={{ color: 'var(--cyan)' }}>Material Handling</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '32px', maxWidth: '600px' }}>
              Discover the next generation of logistics operations. Zero emissions, zero battery maintenance, and 2-hour rapid opportunity charging systems built to maximize shift productivity.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a href="#byd-enquiry-form" className="btn btn-primary" style={{ padding: '14px 28px', borderRadius: '6px', fontWeight: '700' }}>
                Request a Quote
              </a>
              <a href="#product-categories-grid" className="btn btn-outline" style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '14px 28px', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                Explore Equipment &darr;
              </a>
            </div>
          </div>
          <div className="hero-visual-col" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/byd_hero.png" alt="BYD Electric Forklift" style={{ maxWidth: '100%', maxHeight: '360px', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* 2. ABOUT BYD MHE */}
      <section className="section-padding" style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Innovation & Sustainability</div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2.4rem', margin: '12px 0 20px', lineHeight: '1.2' }}>Global Leader in Lithium-Powered Operations</h2>
            <p style={{ color: '#4A5A72', fontSize: '1.12rem', lineHeight: '1.75', marginBottom: '20px' }}>
              {bydBrandInfo.overview}
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.12rem', lineHeight: '1.75', margin: 0 }}>
              {bydBrandInfo.aboutText}
            </p>
          </div>
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', position: 'relative' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '20px' }}>BYD Technology Indicators</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: 'var(--cyan)', fontWeight: '800' }}>4,000+ Cycles</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Rated battery lifespan retaining &gt;80% cell storage capacity</span>
              </div>
              <div style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
                <strong style={{ display: 'block', fontSize: '2.2rem', color: 'var(--cyan)', fontWeight: '800' }}>60% Lower Cost</strong>
                <span style={{ fontSize: '.95rem', color: 'var(--gray)' }}>Average utility savings compared to internal combustion alternatives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BUY BYD FROM EES */}
      <section className="section-padding" style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Preferred Partner</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Why Buy BYD from EES?</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              We don't just sell forklifts; we engineer complete material handling solutions backed by professional local support.
            </p>
          </div>

          <div className="grid eeipl-support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {bydBrandInfo.eeiplSupport.map((item, idx) => (
              <div key={idx} className="card support-item-card" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '28px', transition: 'all 0.3s ease', boxShadow: '0 8px 30px rgba(0,0,0,0.01)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ background: 'rgba(58, 159, 216, 0.1)', color: 'var(--cyan)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyPosition: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '.9rem' }}>0{idx + 1}</span>
                  <h4 style={{ fontSize: '1.12rem', color: 'var(--navy)', margin: 0, fontWeight: '700' }}>{item.title}</h4>
                </div>
                <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.5', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY BYD LITHIUM-IRON-PHOSPHATE TECHNOLOGY */}
      <section className="section-padding" style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Technology</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Proprietary LiFePO4 Battery Advantage</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Say goodbye to battery watering, equalization charges, and dedicated battery change rooms.
            </p>
          </div>

          <div className="grid benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {bydBrandInfo.batteryBenefits.map((benefit, idx) => (
              <div key={idx} className="card benefit-item-card" style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', padding: '24px', transition: 'all 0.3s ease' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '14px', lineHeight: '1' }}>{benefit.icon}</span>
                <h4 style={{ fontSize: '1.18rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{benefit.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.5', margin: 0 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES */}
      <section id="product-categories-grid" className="section-padding" style={{ background: 'var(--navy2)', color: '#ffffff', padding: '95px 0' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Catalog</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: '#ffffff' }}>Explore BYD Equipment Families</h2>
            <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', margin: 0 }}>
              Select a category to view models, capacity ranges, drawbar pulls, and detailed technical configurations.
            </p>
          </div>

          <div className="grid categories-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {bydCategories.map((category) => (
              <div key={category.id} className="card category-item-card" style={{ background: 'var(--dark-panel)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', height: '140px' }}>
                  <img src={category.image} alt={category.name} style={{ maxPosition: 'relative', width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }} />
                </div>
                
                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', margin: '0 0 12px' }}>{category.name}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {category.description}
                </p>

                <div style={{ margin: '10px 0 24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <strong style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--cyan)', display: 'block', marginBottom: '8px' }}>Typical Applications:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {category.applications.slice(0, 3).map((app, idx) => (
                      <li key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.8)', padding: '3px 8px', borderRadius: '4px', fontSize: '.8rem' }}>{app}</li>
                    ))}
                  </ul>
                </div>

                <Link to={`/products/byd-mhe/${category.id}`} className="btn btn-primary w-100" style={{ marginTop: 'auto', textAlign: 'center', display: 'block', padding: '12px' }}>
                  View Products &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="section-padding" style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Applications</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Industries We Serve</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Tailored emission-free configurations compatible with strict hygiene, temperature, and duty cycles.
            </p>
          </div>

          <div className="grid industries-badges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {bydBrandInfo.industries.map((ind, idx) => (
              <div key={idx} className="card industry-badge-card" style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.25s ease' }}>
                <span style={{ fontSize: '2rem' }}>{ind.icon}</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--navy)', fontWeight: '700' }}>{ind.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY BYD FORKLIFTS */}
      <section className="section-padding" style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Standards</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>The BYD Performance Indicators</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Verified manufacturer engineering benchmarks built into every unit.
            </p>
          </div>

          <div className="grid byd-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {bydBrandInfo.bydFeatures.map((feat, idx) => (
              <div key={idx} className="card feature-indicator-card" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '24px', transition: 'all 0.25s ease' }}>
                <h4 style={{ fontSize: '1.12rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: '700' }}>{feat.title}</h4>
                <p style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.5', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER CALL TO ACTION */}
      <section id="byd-enquiry-form" className="section-padding quote-form-section" style={{ background: '#ffffff', padding: '90px 0' }}>
        <div className="container quote-grid card" style={{ background: 'var(--navy2)', color: '#ffffff', borderRadius: '12px', padding: '48px', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '48px', alignItems: 'start' }}>
          <div className="quote-info-col">
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Consultation</div>
            <h2 style={{ color: '#ffffff', fontSize: '2.2rem', margin: '12px 0 16px' }}>Request a Technical Quote</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.08rem', lineHeight: '1.65', marginBottom: '24px' }}>
              Connect with our material handling solution engineers for fleet pricing, diagnostic curve layouts, or to design custom chassis attachments.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ display: 'block', color: 'var(--cyan2)' }}>Call Sales Coordination:</strong>
                <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>+91 98682 38367</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ display: 'block', color: 'var(--cyan2)' }}>Official Email:</strong>
                <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>info@eeipl.co.in</span>
              </div>
            </div>
          </div>

          <div className="quote-form-col">
            {submitted ? (
              <div className="form-success-alert" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--cyan)', margin: '0 0 12px' }}>Thank you!</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>Your request for BYD Material Handling Equipment consultation has been registered. An engineering manager will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="E.g., Rajesh Kumar" style={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', color: '#ffffff' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="company" style={{ fontSize: '.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Company Name</label>
                  <input type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange} placeholder="E.g., Automotive Assembly Ltd" style={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', color: '#ffffff' }} />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="email" style={{ fontSize: '.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Email Address</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="rajesh@company.com" style={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', color: '#ffffff' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="phone" style={{ fontSize: '.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 99999 99999" style={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', color: '#ffffff' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '.9rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)' }}>Describe your loading capacity, shifts or application environment</label>
                  <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Describe your average lift weights, temperature guidelines, etc..." style={{ background: '#0b0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', color: '#ffffff', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '14px', fontWeight: '700', borderRadius: '6px', background: 'var(--cyan)', border: 'none', color: '#ffffff', cursor: 'pointer' }}>
                  Submit Technical Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-padding" style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>FAQ</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0', color: 'var(--navy)' }}>Frequently Asked Questions</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem' }}>Common technical queries related to Lithium-Iron-Phosphate forklifts and logistics operations.</p>
          </div>

          <div className="faqs-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {bydBrandInfo.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="faq-item" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => toggleFaq(idx)} 
                    style={{ width: '100%', background: 'none', border: 'none', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer', outline: 'none' }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--navy)' }}>{faq.question}</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--cyan)', fontWeight: '400', lineHeight: '1', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s cubic-bezier(0, 1, 0, 1)', borderTop: isOpen ? '1px solid var(--light)' : 'none' }}>
                    <div style={{ padding: '20px 24px', color: '#4A5A72', fontSize: '1.02rem', lineHeight: '1.6' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BydMheParent;
