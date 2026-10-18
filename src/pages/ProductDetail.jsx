import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';
import SEO from '../components/SEO';
import { sanitizeInput, validateEmail, validatePhone, isBotSubmission, checkRateLimit, isHumanSubmissionTiming } from '../utils/security';

function ProductDetail({ forceId }) {
  const { productId: routeId } = useParams();
  const id = forceId || routeId;
  const product = products.find((p) => p.id === id);

  // Form State
  const formRenderTimeRef = useRef(0);
  useEffect(() => {
    formRenderTimeRef.current = Date.now();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset form status when product ID changes without cascading effects
  const [prevId, setPrevId] = useState(id);
  if (prevId !== id) {
    setPrevId(id);
    setSubmitted(false);
    setErrorMsg('');
  }

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been moved.</p>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Catalog
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
    setErrorMsg('');

    // Security check 1: Honeypot bot protection
    if (isBotSubmission(honeypot)) {
      setSubmitted(true);
      return;
    }

    // Security check 2: Submission Timing Guard
    if (!isHumanSubmissionTiming(formRenderTimeRef.current, 1200)) {
      setSubmitted(true);
      return;
    }

    // Security check 3: Rate limit
    if (!checkRateLimit(`quote_${product.id}`, 4000)) {
      setErrorMsg('Please wait a few seconds before submitting another request.');
      return;
    }

    // Security check 4: Validations
    if (!validateEmail(formData.email)) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMsg('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    // Security check 5: Input Sanitization
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      message: sanitizeInput(formData.message)
    };

    // Simulated secure dispatch of sanitizedData
    void sanitizedData;

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }, 600);
  };

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.overview,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Equipage Equipment Solutions'
      }
    }
  };

  return (
    <div className="product-detail-page animate-fade-up">
      <SEO
        title={`${product.name} | ${product.brand} India`}
        description={product.overview.substring(0, 160)}
        keywords={`${product.name}, ${product.brand}, industrial equipment India, ${product.category}`}
        canonicalUrl={`https://eeipl.co.in/products/${product.id}`}
        schemaJson={productSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.id}` }
        ]}
      />

      {/* Product Hero Header */}
      <section className="page-header product-detail-header" style={{ padding: '60px 0 40px', background: 'linear-gradient(180deg, #070B14 0%, #0D1424 100%)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container product-header-grid">
          <div className="header-meta-col">
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
              <span className="p-brand-badge" style={{ background: '#F59E0B', color: '#000', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', fontSize: '.75rem', letterSpacing: '.06em' }}>
                {product.brand}
              </span>
              <span className="p-region-badge" style={{ color: '#38BDF8', fontSize: '.85rem', fontWeight: 600 }}>
                📍 {product.region}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 10px', color: '#fff' }}>{product.name}</h1>
            <p className="product-slogan-p" style={{ color: '#F59E0B', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 16px' }}>{product.slogan}</p>
            <p className="product-lead-text" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '750px' }}>{product.overview}</p>
          </div>
        </div>
      </section>

      {/* Product Features & Tech Specs */}
      <section className="section-padding product-specs-section" style={{ padding: '60px 0', background: '#090D1A' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            
            {/* Features Column */}
            <div className="product-features-col">
              <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px' }}>Engineered Features &amp; Architecture</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {product.features.map((feat, idx) => (
                  <div 
                    key={idx} 
                    className="feature-item-card"
                    style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '20px' }}
                  >
                    <h3 style={{ color: '#F59E0B', fontSize: '1.15rem', marginBottom: '8px' }}>{feat.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.95rem', margin: 0, lineHeight: '1.6' }}>{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Column */}
            <div className="product-specs-col">
              <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '24px' }}>Technical Parameters</h2>
              <div 
                className="specs-table-wrapper"
                style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', overflow: 'hidden' }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.92rem' }}>
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr 
                        key={idx}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
                      >
                        <td style={{ padding: '14px 18px', fontWeight: 600, color: '#fff', width: '42%' }}>{spec.label}</td>
                        <td style={{ padding: '14px 18px', color: 'rgba(255,255,255,0.8)' }}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote / Inquiry Section */}
      <section className="product-quote-section section-padding" style={{ padding: '60px 0', background: 'linear-gradient(180deg, #090D1A 0%, #070B14 100%)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container quote-container-grid" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <div className="quote-info-col">
            <span style={{ color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, fontSize: '.8rem' }}>
              Procurement &amp; Turnkey Delivery
            </span>
            <h2 style={{ color: '#fff', fontSize: '2rem', margin: '10px 0 16px' }}>Request Specification Sheet &amp; Commercial Proposal</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Connect directly with our equipment specialists for custom CAD layouts, chassis pairing (Tata / Ashok Leyland / MAN), load charts, and official OEM pricing for the <strong>{product.name}</strong>.
            </p>
            <div className="direct-quote-contacts" style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.95rem', color: 'rgba(255,255,255,0.8)' }}>
              <p style={{ margin: 0 }}>📞 <strong>Direct Hotline:</strong> +91 9910408544</p>
              <p style={{ margin: 0 }}>✉️ <strong>Inquiries:</strong> contact@eeipl.co.in</p>
              <p style={{ margin: 0 }}>🛡️ <strong>Security:</strong> 256-Bit SSL Encrypted Inquiry Verification</p>
            </div>
          </div>

          <div className="quote-form-col" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px' }}>
            {submitted ? (
              <div className="form-success-alert" style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '8px' }}>Inquiry Registered</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.95rem' }}>
                  Your proposal request for the <strong>{product.name}</strong> has been logged. An engineering advisor will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {errorMsg && (
                  <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '10px', borderRadius: '6px', fontSize: '.85rem' }}>
                    {errorMsg}
                  </div>
                )}

                {/* Honeypot field */}
                <input
                  type="text"
                  name="_website_security_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="form-group">
                  <label htmlFor="name" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '.85rem', marginBottom: '6px' }}>Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="E.g., John Doe" style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '.9rem' }} />
                </div>
                <div className="form-group">
                  <label htmlFor="company" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '.85rem', marginBottom: '6px' }}>Company / Entity</label>
                  <input type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange} placeholder="E.g., Logistics / Infrastructure Corp" style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '.9rem' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label htmlFor="email" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '.85rem', marginBottom: '6px' }}>Official Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="corporate@domain.com" style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '.9rem' }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '.85rem', marginBottom: '6px' }}>Contact Phone</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 99999 99999" style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '.9rem' }} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontSize: '.85rem', marginBottom: '6px' }}>Technical Scope &amp; Site Details</label>
                  <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Specify lifting capacity, outreach, boom type or timeline..." style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '.9rem', resize: 'vertical' }}></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  style={{
                    padding: '12px',
                    background: '#F59E0B',
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '1rem',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginTop: '8px'
                  }}
                >
                  Submit Commercial Inquiry &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
