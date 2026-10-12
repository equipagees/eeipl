import { Link } from 'react-router-dom';
import { companyDetails, regionalLocations } from '../data/contactData';
import SEO from '../components/SEO';

const ACCENT = '#0088cc';
const ACCENT_GOLD = '#ffc107';
const ACCENT_LIGHT = 'rgba(0,136,204,0.12)';
const ACCENT_BORDER = 'rgba(0,136,204,0.28)';
const DARK = '#081220';
const DARK2 = '#0d1d33';

function About() {
  const coreValues = [
    {
      icon: '🛡️',
      title: 'Be Accountable',
      desc: 'Each member of our team takes personal accountability for every machine delivered, every maintenance commitment, and every safety protocol.'
    },
    {
      icon: '🔍',
      title: 'Be Transparent',
      desc: 'We promote total honesty and open integrity—sharing clear lead times, true operating costs, load capacities, and engineering limits without hidden clauses.'
    },
    {
      icon: '💬',
      title: 'Open Communication',
      desc: 'We foster free-flowing dialogue with our clients, ensuring lift site challenges and customization requirements are identified and resolved early.'
    },
    {
      icon: '🚀',
      title: 'Challenge Yourself',
      desc: 'Continuous engineering improvement drives us. We challenge ourselves to adopt green lithium technologies, higher reach safety, and faster response times.'
    },
    {
      icon: '🤝',
      title: 'Fair Play',
      desc: 'We prioritize mutual respect, parity, and long-term partnership with our clients, employees, municipalities, and global OEM partners.'
    }
  ];

  const brandPartners = [
    {
      name: 'Doosan Bobcat',
      category: 'Forklifts & Reach Trucks',
      desc: '7-Series electric battery & heavy diesel forklifts, reach trucks engineered for tough industrial logistics.',
      link: '/products/doosan-bobcat'
    },
    {
      name: 'BYD MHE',
      category: 'Lithium LiFePO4 MHE',
      desc: 'Zero-emission, fast-opportunity-charging lithium-iron-phosphate electric counterbalance forklifts & stackers.',
      link: '/products/byd-mhe'
    },
    {
      name: 'Terex Franna',
      category: 'Pick & Carry Cranes',
      desc: 'Articulated pick and carry cranes (17T to 25T) operating without outriggers for seamless mobility.',
      link: '/products/terex-franna'
    },
    {
      name: 'Jinwoo SMC',
      category: 'High-Reach AWPs & Lifts',
      desc: 'Korean aerial elevating work platforms (15m to 75m), 500kV live-line insulated trucks & moving ladder vehicles.',
      link: '/products/jinwoo-smc'
    },
    {
      name: 'Hydramak AWP',
      category: 'Boom Lifts',
      desc: 'HM24A truck mounted telescopic boom lifts delivering 24m working height and EN280 compliance.',
      link: '/products/hydramak'
    },
    {
      name: 'Skymech Equipments',
      category: 'Knuckle & Straight Cranes',
      desc: 'SKB knuckle boom loader cranes (8.5 Tm to 22.5 Tm) & SSB 15 straight boom winch cranes.',
      link: '/products/skymech'
    },
    {
      name: 'LIFTMAK',
      category: 'Fire Fighting Platforms',
      desc: 'Heavy-duty hydraulic fire fighting aerial platforms with high-volume water monitors & rescue cages.',
      link: '/products/liftmak'
    },
    {
      name: 'BELTAS',
      category: 'Turntable Ladders',
      desc: 'Turntable ladder vehicles engineered for high-altitude municipal fire rescue & structural operations.',
      link: '/products/beltas'
    }
  ];

  return (
    <div className="about-page animate-fade-up">
      <SEO
        title="About Us | Equipage Equipment Solutions (EES)"
        description="Learn about Equipage Equipment Solutions (EES / EEIPL), India's premier authorized equipment distributor for BYD lithium forklifts, Terex Franna cranes, Beltas turntable ladders, and Bobcat."
        keywords="about Equipage, EEIPL company profile, industrial equipment distributor India, BYD forklift partner, Terex Franna distributor"
        canonicalUrl="https://eeipl.co.in/about"
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
            width: '520px', height: '520px',
            background: `radial-gradient(circle, rgba(0,136,204,0.18) 0%, transparent 68%)`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block', background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`,
                color: ACCENT, padding: '5px 14px', borderRadius: '4px',
                fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em',
                textTransform: 'uppercase', marginBottom: '20px'
              }}
            >
              Equipage Engineering & Industrial Private Limited (EES)
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900',
                color: '#fff', margin: '0 0 20px', lineHeight: '1.15'
              }}
            >
              Powering India's <span style={{ color: ACCENT }}>Heavy Industry & Logistics</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.7', margin: '0 0 36px' }}>
              Authorized partner and system integrator for 8 world-class equipment OEMs. We specialize in material handling forklifts, pick & carry cranes, high-reach aerial platforms, loader cranes, and emergency rescue vehicles across India.
            </p>

            {/* Quick Stat Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '16px' }}>
              {[
                { label: 'Industry Leadership', val: '20+ Years' },
                { label: 'Authorised OEM Brands', val: '8 World Leaders' },
                { label: 'Active Fleet Deployments', val: '1,500+ Units' },
                { label: 'Nationwide Network', val: 'PAN India' }
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px', padding: '16px', textAlign: 'center'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.3rem', color: ACCENT_GOLD, fontWeight: '900' }}>{stat.val}</strong>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMPANY PROFILE & OVERVIEW ───────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Who We Are
            </div>
            <h2 style={{ color: 'var(--navy)', fontSize: '2.3rem', margin: '0 0 20px', lineHeight: '1.2', fontWeight: '800' }}>
              Your Turnkey Partner in Material Handling & Heavy Machinery
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.08rem', lineHeight: '1.75', marginBottom: '20px' }}>
              Headquartered in Greater Noida (Delhi NCR) with operational and sales hubs across Delhi, Kolkata, Mumbai, and Bengaluru, <strong>{companyDetails.brandName}</strong> delivers turnkey heavy equipment solutions designed to maximize operational safety, productivity, and uptime.
            </p>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '20px' }}>
              We bridge the gap between world-leading equipment manufacturers and Indian industrial enterprises. Our expertise spans site application audits, commercial vehicle PTO subframe engineering, factory-grade Pre-Delivery Inspection (PDI), certified operator training, and 24/7 technical support.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
              <Link
                to="/products"
                style={{
                  padding: '13px 24px', background: ACCENT, color: '#fff', borderRadius: '6px',
                  fontWeight: '700', textDecoration: 'none', fontSize: '.95rem'
                }}
              >
                Explore All Products →
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: '13px 24px', background: 'var(--offwhite)', color: 'var(--navy)',
                  border: '1px solid var(--light)', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '.95rem'
                }}
              >
                Contact Our Engineers
              </Link>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '14px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '24px', fontWeight: '800' }}>
              The EES Edge
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'Turnkey Chassis Fitment', desc: 'Custom subframe fabrication and PTO pump integration for Tata, Eicher, Ashok Leyland & BharatBenz trucks.' },
                { title: 'Dielectric & Load Testing', desc: '100% load testing and high-voltage dielectric insulation verification up to 500kV AC for utility AWPs.' },
                { title: 'OEM Parts & Preventive AMC', desc: 'Stocked regional depots supplying genuine hydraulic cylinders, LMI sensors, controllers, and scheduled PM service.' },
                { title: 'Certified Operator Training', desc: 'On-site training covering dynamic load chart reading, stability limits, and emergency lowering protocols.' }
              ].map((edge, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ background: ACCENT_LIGHT, color: ACCENT, width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '.8rem', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '1rem', marginBottom: '3px' }}>{edge.title}</strong>
                    <span style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.5' }}>{edge.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MISSION & VISION SECTION ─────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎯</div>
              <h2 style={{ color: 'var(--navy)', fontSize: '1.8rem', margin: '0 0 16px', fontWeight: '800' }}>Our Mission</h2>
              <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                To become India's most responsive, safe, and trusted heavy equipment solution provider—delivering the highest quality, most dependable, and cost-effective material handling and high-reach access machinery in the industry.
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>👁️</div>
              <h2 style={{ color: 'var(--navy)', fontSize: '1.8rem', margin: '0 0 16px', fontWeight: '800' }}>Our Vision</h2>
              <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                In our pursuit to empower industrial ambition, we aim to deliver unmatched machinery performance, zero-compromise safety standards, and lifelong operational partnership—building a cleaner, safer, and more productive India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES SECTION ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Our Pillars
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem', fontWeight: '800' }}>
              The Core Values We Live By
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Five guiding principles that define every customer interaction, engineering solution, and service delivery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--offwhite)', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '30px', borderTop: `3px solid ${ACCENT}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2rem' }}>{val.icon}</span>
                  <span style={{ fontSize: '.8rem', color: ACCENT, fontWeight: '800' }}>0{idx + 1}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: '800' }}>{val.title}</h3>
                <p style={{ color: '#4A5A72', fontSize: '.94rem', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AUTHORISED OEM PARTNERS ──────────────────────────────────────── */}
      <section style={{ background: 'var(--offwhite)', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Global & Indian Manufacturers
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem', fontWeight: '800' }}>
              Authorised OEM Brand Partnerships
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Representing premier manufacturers to deliver factory-backed sales, genuine spare parts, and warranty support across India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {brandPartners.map((brand, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff', border: '1px solid var(--light)',
                  borderRadius: '10px', padding: '28px', display: 'flex',
                  flexDirection: 'column', justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ display: 'inline-block', background: ACCENT_LIGHT, color: ACCENT, padding: '3px 10px', borderRadius: '4px', fontSize: '.72rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {brand.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', fontWeight: '800', margin: '0 0 10px' }}>{brand.name}</h3>
                  <p style={{ color: '#4A5A72', fontSize: '.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {brand.desc}
                  </p>
                </div>
                <Link
                  to={brand.link}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: ACCENT, fontWeight: '800', textDecoration: 'none', fontSize: '.88rem'
                  }}
                >
                  View Product Range →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OFFICE LOCATIONS & PRESENCE ──────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <div style={{ color: ACCENT, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Locations & Facilities
            </div>
            <h2 style={{ color: 'var(--navy)', margin: '0 0 14px', fontSize: '2.2rem', fontWeight: '800' }}>
              Corporate Offices & Service Hubs
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
              Supporting machinery fleets across major industrial corridors nationwide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '32px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏢</div>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.25rem', margin: '0 0 10px', fontWeight: '800' }}>Registered Head Office</h3>
              <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: '0 0 14px' }}>
                <strong>{companyDetails.brandName}</strong><br />
                {companyDetails.address.line1}<br />
                {companyDetails.address.line2}<br />
                {companyDetails.address.stateZip}
              </p>
              <div style={{ fontSize: '.88rem', color: '#4A5A72', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span>📞 <strong style={{ color: 'var(--navy)' }}>Direct Line:</strong> <a href={`tel:${companyDetails.primaryPhoneTel}`} style={{ color: ACCENT, textDecoration: 'none', fontWeight: '700' }}>{companyDetails.primaryPhone}</a></span>
                <span>✉️ <strong style={{ color: 'var(--navy)' }}>Email:</strong> <a href={`mailto:${companyDetails.email}`} style={{ color: ACCENT, textDecoration: 'none', fontWeight: '700' }}>{companyDetails.email}</a></span>
              </div>
            </div>

            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '32px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📍</div>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.25rem', margin: '0 0 14px', fontWeight: '800' }}>North &amp; East Hubs</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--light)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.92rem' }}>🏛️ North India, Delhi</strong>
                  <span style={{ color: '#4A5A72', fontSize: '.86rem' }}>Lalit Sharma · </span>
                  <a href="tel:+919582932799" style={{ color: ACCENT, fontWeight: '700', fontSize: '.86rem', textDecoration: 'none' }}>+91 95829 32799</a>
                </div>
                <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--light)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.92rem' }}>🏗️ East India, Kolkata</strong>
                  <span style={{ color: '#4A5A72', fontSize: '.86rem' }}>Vivek Yadav · </span>
                  <a href="tel:+917003470517" style={{ color: ACCENT, fontWeight: '700', fontSize: '.86rem', textDecoration: 'none' }}>+91 70034 70517</a>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '32px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏭</div>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.25rem', margin: '0 0 14px', fontWeight: '800' }}>West &amp; South Hubs</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--light)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.92rem' }}>🏙️ West India, Mumbai</strong>
                  <span style={{ color: '#4A5A72', fontSize: '.86rem' }}>Asif Iqbal · </span>
                  <a href="tel:+919711996512" style={{ color: ACCENT, fontWeight: '700', fontSize: '.86rem', textDecoration: 'none' }}>+91 9711996512</a>
                </div>
                <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--light)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.92rem' }}>🏢 South India, Bengaluru</strong>
                  <span style={{ color: '#4A5A72', fontSize: '.86rem' }}>Asif Iqbal · </span>
                  <a href="tel:+919711996512" style={{ color: ACCENT, fontWeight: '700', fontSize: '.86rem', textDecoration: 'none' }}>+91 9711996512</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM CTA BANNER ───────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, ${DARK2} 50%, ${DARK} 100%)`,
          color: '#fff', padding: '80px 0', borderTop: `1px solid ${ACCENT_BORDER}`
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <div style={{ color: ACCENT_GOLD, fontSize: '.75rem', fontWeight: '800', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Get In Touch
          </div>
          <h2 style={{ color: '#fff', fontSize: '2.4rem', margin: '0 0 16px', fontWeight: '900', lineHeight: '1.2' }}>
            Ready to Upgrade Your Industrial Fleet?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.08rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Speak with our sales and engineering consultants to request product specifications, live equipment demonstrations, or formal price proposals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '14px 28px', background: ACCENT, color: '#fff', borderRadius: '6px',
                fontWeight: '800', textDecoration: 'none', fontSize: '1rem'
              }}
            >
              Contact Our Engineers →
            </Link>
            <a
              href={`tel:${companyDetails.primaryPhoneTel}`}
              style={{
                padding: '14px 28px', background: 'transparent', color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: '6px',
                fontWeight: '800', textDecoration: 'none', fontSize: '1rem'
              }}
            >
              📞 Call {companyDetails.primaryPhone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
