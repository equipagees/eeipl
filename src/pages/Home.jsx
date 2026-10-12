import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clientsData from '../data/clientsData';
import { companyDetails, regionalLocations } from '../data/contactData';
import SEO from '../components/SEO';
import { sanitizeInput, validateEmail, validatePhone, isBotSubmission, checkRateLimit } from '../utils/security';
import './Home.css';

function Home() {
  // ── 1. Interactive Equipment Showcase State ──
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      id: 'byd',
      name: 'BYD Lithium Counterbalance Forklift',
      brand: 'BYD MHE',
      category: '100% Electric Lithium LiFePO4',
      image: '/byd_hero.png',
      desc: 'Zero-emission electric forklift with 2-hour rapid opportunity charging and 0 battery watering. Low operating expense with 5-year battery warranty.',
      chips: ['1.6T – 5.0T Capacity', 'Zero Maintenance Battery', 'Opportunity Charging', 'PAN-India AMC'],
      link: '/products/byd-mhe'
    },
    {
      id: 'franna',
      name: 'Terex Franna Articulated Pick & Carry Crane',
      brand: 'Terex Franna',
      category: 'Articulated Mobile Cranes',
      image: '/terex_franna_hero.png',
      desc: 'Legendary pick and carry mobility without requiring stabilizer outriggers. Engineered for heavy infrastructure, rough terrain, and rapid plant handling.',
      chips: ['17T – 25T Capacity', 'Zero Outriggers Required', 'Articulated Steering', 'North India Support'],
      link: '/products/terex-franna'
    },
    {
      id: 'bobcat',
      name: 'Doosan Bobcat 7-Series Industrial Forklift',
      brand: 'Doosan Bobcat',
      category: 'Heavy Diesel & Electric',
      image: '/bob_hero.png',
      desc: 'Rugged industrial workhorse featuring oil-cooled disc brakes and high-torque diesel and electric powertrains built for 24/7 demanding duty cycles.',
      chips: ['2.0T – 25.0T Range', 'Oil-Cooled Disc Brakes', 'Heavy Foundry Ready', 'Pan-India Spares'],
      link: '/products/doosan-bobcat'
    },
    {
      id: 'beltas',
      name: 'Beltas Hydraulic Turntable Rescue Ladder',
      brand: 'Beltas Turkey',
      category: 'Municipal Fire Rescue',
      image: '/beltas_ladder.png',
      desc: 'High-elevation hydraulic turntable ladder engineered since 1974. Mounted on Tata, Ashok Leyland & MAN chassis for rapid municipal deployment.',
      chips: ['18m to 64m Working Height', '400 Kg Rescue Cage', 'EN14043 Certified', 'Turnkey Mounting'],
      link: '/products/beltas'
    },
    {
      id: 'liftmak',
      name: 'Liftmak Fire Fighting Hydraulic Platform',
      brand: 'Liftmak Europe',
      category: 'Aerial Fire Fighting & Rescue',
      image: '/liftmak-hero.png',
      desc: 'State-of-the-art CANBus computer-controlled hydraulic platform for multi-story emergency firefighting, structural cooling, and urban rescue.',
      chips: ['15m to 70m Working Reach', 'Integrated Water Monitor', 'CANBus Safety System', 'PAN-India Delivery'],
      link: '/products/liftmak'
    }
  ];

  // Auto-cycle showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  // ── 2. Machinery Fleet Filter ──
  const [fleetFilter, setFleetFilter] = useState('all');

  const fleetProducts = [
    {
      id: 'byd-mhe',
      name: 'BYD Lithium MHE Fleet',
      brand: 'BYD',
      badge: 'Zero Emission',
      category: 'material-handling',
      image: '/byd_hero.png',
      desc: 'Counterbalance forklifts, reach trucks, pallet stackers powered by Lithium Iron Phosphate chemistry.',
      specs: ['Capacities: 1.6T to 5.0T', 'Battery: 80V LiFePO4 Ultra-Safe', 'Full Charge: Under 2 Hours'],
      link: '/products/byd-mhe'
    },
    {
      id: 'terex-franna',
      name: 'Terex Franna Cranes',
      brand: 'Terex Franna',
      badge: 'Heavy Lifting',
      category: 'cranes',
      image: '/terex_franna_hero.png',
      desc: 'Articulated pick & carry cranes engineered to lift and travel without outriggers in rough terrains.',
      specs: ['Capacities: 17 Ton to 25 Ton', 'High Torque Powertrain', 'Boom Length up to 18.5m'],
      link: '/products/terex-franna'
    },
    {
      id: 'doosan-bobcat',
      name: 'Doosan Bobcat Forklifts',
      brand: 'Doosan Bobcat',
      badge: 'Industrial Duty',
      category: 'material-handling',
      image: '/bob_hero.png',
      desc: 'Full range of electric and diesel forklifts engineered for tough factory and yard logistics.',
      specs: ['Electric: 2.0T – 5.0T', 'Diesel: 2.5T – 25.0T', 'Oil-Cooled Disc Brakes'],
      link: '/products/doosan-bobcat'
    },
    {
      id: 'beltas',
      name: 'Beltas Turntable Ladders',
      brand: 'Beltas',
      badge: 'Fire & Rescue',
      category: 'fire-rescue',
      image: '/beltas_ladder.png',
      desc: 'Advanced electro-hydraulic aerial turntable ladders for high-altitude municipal emergency rescue.',
      specs: ['Working Height: 18m to 64m', 'Cage Capacity: 200kg – 400kg', 'Indian Chassis Mounted'],
      link: '/products/beltas'
    },
    {
      id: 'liftmak',
      name: 'Liftmak Aerial Platforms',
      brand: 'Liftmak',
      badge: 'Fire Fighting',
      category: 'fire-rescue',
      image: '/liftmak-hero.png',
      desc: 'High-reach aerial ladder platforms with integrated water and foam monitors for industrial firefighting.',
      specs: ['Height: 15m to 70m', 'Integrated Water Line', 'Full CANBus Electronics'],
      link: '/products/liftmak'
    },
    {
      id: 'jinwoo-smc',
      name: 'Jinwoo SMC Aerial Platforms',
      brand: 'Jinwoo SMC',
      badge: 'High Reach AWP',
      category: 'aerial-work',
      image: '/jinwoo_awp.png',
      desc: 'South Korean truck-mounted telescopic elevating work platforms for power transmission & bridge works.',
      specs: ['Height: 30m to 75m', 'Telescopic Octagonal Boom', 'Truck-Mounted Mobility'],
      link: '/products/jinwoo-smc'
    },
    {
      id: 'hydramak',
      name: 'Hydramak HM24A Boom Lift',
      brand: 'Hydramak',
      badge: 'Utility AWP',
      category: 'aerial-work',
      image: '/hydramak_lift.png',
      desc: 'Truck mounted articulated mobile elevating platform ideal for streetlighting and telecom maintenance.',
      specs: ['Working Height: 23.2m', 'Outreach: 10.0m', 'Cage Capacity: 250 Kg'],
      link: '/products/hydramak'
    },
    {
      id: 'skymech',
      name: 'Skymech Loader Cranes',
      brand: 'Skymech',
      badge: 'Truck Cranes',
      category: 'cranes',
      image: '/skymech_crane.png',
      desc: 'Self-loading knuckle boom and stiff boom truck loader cranes for cargo handling and construction.',
      specs: ['Capacity: 8 Tm to 23 Tm', 'Dual Control Stations', 'High-Tensile Hex Boom'],
      link: '/products/skymech'
    }
  ];

  const filteredFleet = fleetFilter === 'all' 
    ? fleetProducts 
    : fleetProducts.filter((p) => p.category === fleetFilter);

  // ── 3. Testimonial State ──
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "EES's BYD lithium-powered reach trucks transformed our warehousing efficiency. Fast opportunity charging allows 24/7 continuous operations with zero battery maintenance overheads.",
      author: "Alok Srivastava",
      role: "VP - Logistics & Warehousing",
      company: "Delhivery",
      rating: 5
    },
    {
      quote: "The Terex Franna articulated crane supplied by Equipage has been the backbone of our heavy industrial erection sites. Their technical handover and parts support are unmatched.",
      author: "Satish Deshmukh",
      role: "Project Director",
      company: "L&T Infrastructure",
      rating: 5
    },
    {
      quote: "We replaced our diesel forklifts with BYD Lithium LiFePO4 units from EES. We have recorded over 42% cost reduction in fuel and maintenance within the first 12 months.",
      author: "Manoj Kulkarni",
      role: "Plant Operations Head",
      company: "Vaaman Engineers",
      rating: 5
    },
    {
      quote: "Equipage provided complete turnkey chassis mounting for our municipal aerial rescue platform. Their engineering precision, documentation, and operator training were world-class.",
      author: "Sanjay Tripathi",
      role: "Operations Head",
      company: "GMR Group",
      rating: 5
    }
  ];

  // ── 4. Security-Hardened Form State ──
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    equipment: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Security Check 1: Honeypot Anti-Bot Filter
    if (isBotSubmission(honeypot)) {
      setSubmitted(true);
      return;
    }

    // Security Check 2: Submission Rate Limiting
    if (!checkRateLimit('home_quote_terminal', 5000)) {
      setFormError('Please wait a few seconds before submitting another quote request.');
      return;
    }

    // Security Check 3: Strict Validation
    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid corporate email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid phone number with country/area code.');
      return;
    }

    // Security Check 4: Input Sanitization
    const sanitizedPayload = {
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      phone: sanitizeInput(formData.phone),
      email: sanitizeInput(formData.email),
      equipment: sanitizeInput(formData.equipment),
      message: sanitizeInput(formData.message)
    };

    // Generate random enquiry tracking code
    const generatedRef = 'EES-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      equipment: '',
      message: ''
    });
  };

  return (
    <div className="home-fresh">
      {/* ── SEO INJECTION ── */}
      <SEO
        title="Equipage Equipment Solutions (EES) | Lithium Forklifts, Franna Cranes & Turntable Ladders India"
        description="India's premier authorized partner for BYD Lithium LiFePO4 electric forklifts, Terex Franna articulated pick & carry cranes, Beltas turntable ladders, and Doosan Bobcat. PAN-India sales, AMC and turnkey chassis mounting."
        keywords="Equipage Equipment Solutions, EEIPL, BYD lithium forklift India, Terex Franna crane, Beltas turntable ladder, Doosan Bobcat India, aerial platforms, heavy material handling"
        canonicalUrl="https://eeipl.co.in/"
      />

      {/* ═══════ 1. HERO SECTION ═══════ */}
      <section className="hero-fresh" id="hero">
        <div className="industrial-grid-bg"></div>
        <div className="container hero-grid">
          
          {/* Left Column: Heading, Subtext, CTAs, Stats */}
          <div className="hero-content">
            <div className="hero-badge-live">
              <span className="hero-pulse-dot"></span>
              Official PAN-India OEM Machinery Partner
            </div>

            <h1 className="hero-heading">
              Engineered Power. <br />
              <span className="amber-gradient">Zero-Compromise</span> <br />
              Fleet Solutions.
            </h1>

            <p className="hero-subtext">
              Equipage Equipment Solutions (EES) delivers high-productivity material handling, heavy lifting cranes, high-altitude aerial platforms, and municipal fire rescue systems. Move, lift, and protect with industry-leading machinery.
            </p>

            <div className="hero-actions">
              <a href="#fleet" className="btn-fresh-primary">
                Explore Equipment Fleet
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              </a>
              <a href="#quote" className="btn-fresh-outline">
                Request Quick Quote
              </a>
              <a href={companyDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-fresh-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                WhatsApp Direct
              </a>
            </div>

            <div className="hero-stats-strip">
              <div className="stat-item">
                <div className="stat-number">20<span>+</span></div>
                <div className="stat-title">Years Legacy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500<span>+</span></div>
                <div className="stat-title">Units Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8<span></span></div>
                <div className="stat-title">Global OEMs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24<span>/7</span></div>
                <div className="stat-title">Field Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Equipment Showcase */}
          <div className="hero-showcase">
            <div className="showcase-tabs">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  className={`showcase-tab ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {item.brand}
                </button>
              ))}
            </div>

            <div className="showcase-stage">
              <img
                src={showcaseItems[activeTab].image}
                alt={showcaseItems[activeTab].name}
                className="showcase-img"
              />
            </div>

            <div className="showcase-meta">
              <div className="showcase-info">
                <h4>{showcaseItems[activeTab].name}</h4>
                <p>{showcaseItems[activeTab].desc}</p>
              </div>

              <div className="showcase-chips">
                {showcaseItems[activeTab].chips.map((chip, i) => (
                  <span key={i} className="spec-chip">{chip}</span>
                ))}
              </div>

              <div style={{ width: '100%', marginTop: '12px' }}>
                <Link to={showcaseItems[activeTab].link} className="btn-fresh-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Explore {showcaseItems[activeTab].brand} Solutions &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════ 2. VALUE PROPOSITIONS / PILLARS ═══════ */}
      <section className="pillars-section" id="pillars">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Engineering Distinction</span>
            <h2 className="section-title">Built On Trust. <span className="highlight-amber">Engineered for Extremes.</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Why India's top infrastructure leaders and municipal departments choose Equipage Equipment Solutions.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">🛡️</div>
              <h3>Tier-1 Global OEM Pedigree</h3>
              <p>Direct authorized partnerships with Terex Franna, BYD Lithium, Doosan Bobcat, Beltas, and Jinwoo SMC ensure authentic machinery, full warranties, and genuine factory spares.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">⚡</div>
              <h3>LiFePO4 Zero-Emission Leadership</h3>
              <p>Pioneering lithium iron phosphate technology that eliminates hazardous battery watering, reduces operational power expenses by 40%, and enables rapid opportunity recharging.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">⚙️</div>
              <h3>Turnkey Chassis Integration</h3>
              <p>Dedicated fabrication engineering for mounting high-reach superstructures onto Indian commercial vehicle chassis (Tata, Ashok Leyland, MAN, BharatBenz) with full compliance.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">🔧</div>
              <h3>PAN-India AMC & Field Spares</h3>
              <p>Comprehensive Annual Maintenance Contracts and fast-turnaround field engineering teams operating out of Delhi NCR, Mumbai, Kolkata, and Bengaluru hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. CLIENTS LOGO WALL ═══════ */}
      <section className="clients-section-fresh">
        <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '.75rem', fontWeight: 800, color: 'var(--fresh-cyan)', textTransform: 'uppercase', letterSpacing: '.12em' }}>
            Trusted by Enterprise Leaders Across India
          </span>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-inner">
            {clientsData.concat(clientsData).map((client, idx) => (
              <div key={idx} className="client-pill-card" title={`${client.name} — ${client.industry}`}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. MACHINERY FLEET MATRIX ═══════ */}
      <section className="fleet-section" id="fleet">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <span className="section-tag">Authorized Lineup</span>
              <h2 className="section-title">Heavy Machinery <span className="highlight-amber">Catalogue</span></h2>
              <p className="section-desc">Explore our flagship heavy equipment categories tailored for industrial, logistic, and emergency applications.</p>
            </div>

            {/* Filter Tabs */}
            <div className="fleet-filter-bar">
              <button className={`fleet-filter-btn ${fleetFilter === 'all' ? 'active' : ''}`} onClick={() => setFleetFilter('all')}>All Fleet</button>
              <button className={`fleet-filter-btn ${fleetFilter === 'material-handling' ? 'active' : ''}`} onClick={() => setFleetFilter('material-handling')}>Material Handling</button>
              <button className={`fleet-filter-btn ${fleetFilter === 'cranes' ? 'active' : ''}`} onClick={() => setFleetFilter('cranes')}>Cranes</button>
              <button className={`fleet-filter-btn ${fleetFilter === 'aerial-work' ? 'active' : ''}`} onClick={() => setFleetFilter('aerial-work')}>Aerial AWPs</button>
              <button className={`fleet-filter-btn ${fleetFilter === 'fire-rescue' ? 'active' : ''}`} onClick={() => setFleetFilter('fire-rescue')}>Fire &amp; Rescue</button>
            </div>
          </div>

          <div className="fleet-grid">
            {filteredFleet.map((item) => (
              <div key={item.id} className="fleet-card">
                <div className="fleet-card-media">
                  <span className="fleet-badge">{item.badge}</span>
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="fleet-card-content">
                  <div className="fleet-brand-origin">
                    <span className="fleet-brand-name">{item.name}</span>
                    <span className="fleet-territory">PAN India</span>
                  </div>

                  <p className="fleet-desc">{item.desc}</p>

                  <ul className="fleet-specs-list">
                    {item.specs.map((sp, i) => (
                      <li key={i}>{sp}</li>
                    ))}
                  </ul>

                  <div className="fleet-card-actions">
                    <Link to={item.link} className="fleet-btn-main">View Specifications &rarr;</Link>
                    <a href="#quote" className="fleet-btn-quote" onClick={() => setFormData({ ...formData, equipment: item.name })}>Inquire</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. LITHIUM REVOLUTION SPOTLIGHT ═══════ */}
      <section className="lithium-section">
        <div className="container">
          <div className="lithium-box">
            <div>
              <span className="section-tag" style={{ background: 'rgba(14, 165, 233, 0.15)', borderColor: 'var(--fresh-cyan)', color: 'var(--fresh-cyan)' }}>
                Green Technology Breakthrough
              </span>
              <h2 className="section-title">The BYD Lithium <span className="highlight-cyan">LiFePO4 Advantage</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                Traditional lead-acid batteries demand daily acid maintenance, lengthy charging cycles, and dedicated ventilation rooms. BYD Lithium Iron Phosphate technology delivers zero maintenance, rapid opportunity charges during shift breaks, and zero harmful emissions.
              </p>

              <div className="lithium-metrics">
                <div className="lithium-metric-item">
                  <div className="lithium-metric-val">40%+</div>
                  <div className="lithium-metric-label">Reduction in Operating Expenditure vs Diesel</div>
                </div>
                <div className="lithium-metric-item">
                  <div className="lithium-metric-val">&lt; 2 Hrs</div>
                  <div className="lithium-metric-label">Full Recharging Time with Opportunity Charging</div>
                </div>
                <div className="lithium-metric-item">
                  <div className="lithium-metric-val">Zero</div>
                  <div className="lithium-metric-label">Battery Watering or Acid Maintenance Ever</div>
                </div>
                <div className="lithium-metric-item">
                  <div className="lithium-metric-val">5 Yrs</div>
                  <div className="lithium-metric-label">Or 10,000 Hours Comprehensive Battery Warranty</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/byd_advantages.png" alt="BYD Lithium Advantage" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 6. TESTIMONIALS ═══════ */}
      <section className="testimonials-fresh">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Client Feedback</span>
            <h2 className="section-title">Verified <span className="highlight-amber">Enterprise Experiences</span></h2>
          </div>

          <div className="testimonial-card-single">
            <div className="testimonial-stars">
              {'★★★★★'}
            </div>
            <p className="testimonial-quote">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="testimonial-author-box">
              <div className="author-avatar-fresh">
                {testimonials[currentTestimonial].author.charAt(0)}
              </div>
              <div>
                <div className="author-name-fresh">{testimonials[currentTestimonial].author}</div>
                <div className="author-role-fresh">{testimonials[currentTestimonial].role} · <strong>{testimonials[currentTestimonial].company}</strong></div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '20px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentTestimonial === i ? 'var(--fresh-amber)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label={`Testimonial slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 7. SECURITY QUOTE TERMINAL ═══════ */}
      <section className="quote-section-fresh" id="quote">
        <div className="container quote-layout">
          <div>
            <span className="section-tag">Instant Commercial Inquiries</span>
            <h2 className="section-title">Request a Custom <span className="highlight-amber">Machinery Proposal</span></h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Connect directly with our senior application engineers. We evaluate your load capacities, aisle dimensions, chassis mount specifications, and deliver customized pricing within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
                <span style={{ color: 'var(--fresh-amber)', fontSize: '1.2rem' }}>📞</span>
                <div>
                  <strong>Direct Engineering Hotline:</strong><br />
                  <a href={`tel:${companyDetails.primaryPhoneTel}`} style={{ color: 'var(--fresh-cyan)', textDecoration: 'none', fontWeight: 700 }}>
                    {companyDetails.primaryPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
                <span style={{ color: 'var(--fresh-amber)', fontSize: '1.2rem' }}>✉️</span>
                <div>
                  <strong>Official Procurement Email:</strong><br />
                  <a href={`mailto:${companyDetails.email}`} style={{ color: 'var(--fresh-cyan)', textDecoration: 'none', fontWeight: 700 }}>
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '.88rem', marginTop: '16px' }}>
                <span>🛡️</span>
                <span>Protected by 256-Bit SSL encryption &amp; automated honeypot spam verification.</span>
              </div>
            </div>
          </div>

          {/* Form Box */}
          <div className="quote-terminal-box">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '10px' }}>Quotation Request Logged</h3>
                <p style={{ color: 'var(--fresh-text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  Thank you! Your equipment inquiry has been forwarded to our technical sales division.
                </p>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--fresh-amber)', padding: '12px', borderRadius: '8px', color: 'var(--fresh-amber)', fontWeight: 800 }}>
                  Reference Docket: {refId}
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-fresh-outline"
                  style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {formError && (
                  <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '12px', borderRadius: '8px', fontSize: '.9rem', marginBottom: '16px' }}>
                    ⚠️ {formError}
                  </div>
                )}

                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="_website_security_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="form-field-fresh">
                  <label htmlFor="quote-name">Full Name *</label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Sharma"
                  />
                </div>

                <div className="form-field-fresh">
                  <label htmlFor="quote-company">Company / Organization *</label>
                  <input
                    type="text"
                    id="quote-company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Industrial Solutions"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-field-fresh">
                    <label htmlFor="quote-phone">Contact Phone *</label>
                    <input
                      type="tel"
                      id="quote-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-field-fresh">
                    <label htmlFor="quote-email">Corporate Email *</label>
                    <input
                      type="email"
                      id="quote-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="form-field-fresh">
                  <label htmlFor="quote-equipment">Equipment Line of Interest</label>
                  <select
                    id="quote-equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Equipment...</option>
                    <option value="BYD Lithium Forklift">BYD Lithium LiFePO4 Forklift</option>
                    <option value="Terex Franna Pick & Carry Crane">Terex Franna Pick & Carry Crane</option>
                    <option value="Doosan Bobcat Forklift">Doosan Bobcat 7-Series Forklift</option>
                    <option value="Beltas Turntable Rescue Ladder">Beltas Hydraulic Turntable Ladder</option>
                    <option value="Liftmak Aerial Fire Platform">Liftmak Fire Fighting Platform</option>
                    <option value="Jinwoo SMC Telescopic AWP">Jinwoo SMC Telescopic AWP</option>
                    <option value="Hydramak HM24A Boom Lift">Hydramak HM24A Boom Lift</option>
                    <option value="Skymech Truck Loader Crane">Skymech Truck Loader Crane</option>
                    <option value="AMC & Spare Parts Support">Annual Maintenance Contract (AMC) & Parts</option>
                  </select>
                </div>

                <div className="form-field-fresh">
                  <label htmlFor="quote-message">Operational Requirements &amp; Scope</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide required tonnage, outreach, mast height, chassis choice or deployment location..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-fresh-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                >
                  Generate Official Proposal &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ 8. REGIONAL HUBS ═══════ */}
      <section style={{ padding: '60px 0', background: 'var(--fresh-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="section-tag">Pan-India Support</span>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', fontFamily: "'Barlow Condensed', sans-serif" }}>
              Regional Operations &amp; Engineering Hubs
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {regionalLocations.map((loc, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--fresh-card)',
                  border: '1px solid var(--fresh-border)',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{loc.icon}</span> {loc.label}
                </div>
                <div style={{ color: 'var(--fresh-text-muted)', fontSize: '.88rem' }}>
                  {loc.contactPerson}
                </div>
                <a
                  href={`tel:${loc.phoneTel}`}
                  style={{ color: 'var(--fresh-cyan)', fontWeight: 700, fontSize: '.9rem', textDecoration: 'none', marginTop: '6px' }}
                >
                  📞 {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
