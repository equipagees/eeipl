import { Link } from 'react-router-dom';
import { companyDetails, regionalLocations } from '../data/contactData';

function Footer() {
  return (
    <footer
      style={{
        background: '#070f1e',
        color: 'rgba(255, 255, 255, 0.7)',
        borderTop: '1px solid rgba(0, 136, 204, 0.25)',
        padding: '60px 0 24px',
        fontSize: '0.92rem',
        lineHeight: '1.6'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Col 1: Registered Head Office */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/logo.png" alt="Equipage Equipment Solutions" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 6px', fontWeight: '800' }}>
              {companyDetails.brandName}
            </h4>
            <div style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.82rem', marginBottom: '14px' }}>
              {companyDetails.legalName}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
              📍 <strong>Registered Address:</strong><br />
              {companyDetails.address.line1}<br />
              {companyDetails.address.line2}<br />
              {companyDetails.address.stateZip}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                📞 <strong style={{ color: '#fff' }}>Direct Line:</strong>{' '}
                <a href={`tel:${companyDetails.primaryPhoneTel}`} style={{ color: 'var(--cyan, #00b4d8)', textDecoration: 'none', fontWeight: '700' }}>
                  {companyDetails.primaryPhone}
                </a>
              </div>
              <div>
                ✉️ <strong style={{ color: '#fff' }}>Email:</strong>{' '}
                <a href={`mailto:${companyDetails.email}`} style={{ color: 'var(--cyan, #00b4d8)', textDecoration: 'none', fontWeight: '700' }}>
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Regional Presence (Delhi, Kolkata, Mumbai, Bengaluru) */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 16px', fontWeight: '800', borderBottom: '2px solid var(--cyan, #00b4d8)', paddingBottom: '8px', display: 'inline-block' }}>
              Regional Presence
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {regionalLocations.map((loc, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '0.92rem' }}>
                    {loc.icon} {loc.label}
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.85rem' }}>
                    {loc.contactPerson} ·{' '}
                    <a href={`tel:${loc.phoneTel}`} style={{ color: 'var(--cyan, #00b4d8)', textDecoration: 'none', fontWeight: '600' }}>
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 16px', fontWeight: '800', borderBottom: '2px solid var(--cyan, #00b4d8)', paddingBottom: '8px', display: 'inline-block' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Company</Link></li>
              <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Product Catalogue</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact Us &amp; Enquiries</Link></li>
            </ul>
          </div>

          {/* Col 4: Authorised OEM Brands */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 16px', fontWeight: '800', borderBottom: '2px solid var(--cyan, #00b4d8)', paddingBottom: '8px', display: 'inline-block' }}>
              OEM Partnerships
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li><Link to="/products/doosan-bobcat" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Doosan Bobcat Forklifts</Link></li>
              <li><Link to="/products/byd-mhe" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>BYD Lithium LiFePO4</Link></li>
              <li><Link to="/products/terex-franna" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terex Franna Cranes</Link></li>
              <li><Link to="/products/jinwoo-smc" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Jinwoo SMC High-Reach AWPs</Link></li>
              <li><Link to="/products/hydramak" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Hydramak Telescopic Lifts</Link></li>
              <li><Link to="/products/skymech" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Skymech Knuckle Cranes</Link></li>
              <li><Link to="/products/liftmak" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Liftmak Fire Platforms</Link></li>
              <li><Link to="/products/beltas" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Beltaş Turntable Ladders</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {companyDetails.brandName} · {companyDetails.legalName}. All rights reserved.
          </div>
          <div>
            Greater Noida · Delhi · Kolkata · Mumbai · Bengaluru · Pan-India Service
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
