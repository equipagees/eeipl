import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bydCategories } from '../data/bydData';

function BydMheCategory() {
  const { categoryId } = useParams();
  const category = bydCategories.find((cat) => cat.id === categoryId);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!category) {
    return (
      <div className="container section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Category Not Found</h2>
        <p>The equipment category you are looking for does not exist or has been moved.</p>
        <Link to="/products/byd-mhe" className="btn btn-primary mt-3" style={{ display: 'inline-flex', marginTop: '16px' }}>
          Back to BYD MHE Parent Page
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
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <div className="byd-category-page animate-fade-up">
      {/* Category Hero Header */}
      <section className="page-header category-header-section" style={{ background: 'var(--navy2)', color: '#ffffff', padding: '80px 0 60px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
          <div className="category-header-text">
            <Link to="/products/byd-mhe" style={{ color: 'var(--cyan)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '.92rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '16px' }}>
              &larr; BYD MHE Range
            </Link>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 12px' }}>{category.heroTitle || category.name}</h1>
            <p className="category-desc" style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.7', margin: 0 }}>
              {category.heroSubtitle || category.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
              {category.applications.map((app, i) => (
                <span key={i} style={{ background: 'rgba(58, 159, 216, 0.12)', border: '1px solid rgba(58, 159, 216, 0.25)', color: 'var(--cyan2)', padding: '5px 12px', borderRadius: '4px', fontSize: '.8rem', fontWeight: '600' }}>
                  {app}
                </span>
              ))}
            </div>
          </div>
          <div className="category-header-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="category-visual-card" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(8px)', width: '100%', maxWidth: '340px' }}>
              <img src={category.image} alt={category.name} style={{ width: '100%', maxHeight: '180px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
              <div style={{ marginTop: '16px', fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--cyan)' }}>
                Lithium Powered Range
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Cards Grid */}
      <section className="section-padding" style={{ background: 'var(--offwhite)', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Lineup</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Available {category.name} Models</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Engineered with thermal-stable LiFePO4 cells to support multi-shift manufacturing, logistics, and warehousing operations.
            </p>
          </div>

          <div className="grid models-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {category.models.map((model, idx) => (
              <div key={idx} className="card model-card" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
                {/* Product Image */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', background: 'var(--offwhite)', borderRadius: '8px', padding: '16px', height: '160px', alignItems: 'center' }}>
                  <img 
                    src={category.image} 
                    alt={model.name} 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.06))' }} 
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy)', margin: 0 }}>{model.name}</h3>
                  <span style={{ background: 'rgba(58, 159, 216, 0.1)', color: 'var(--cyan)', padding: '4px 10px', borderRadius: '4px', fontSize: '.8rem', fontWeight: '600' }}>
                    {model.capacity}
                  </span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 0 20px', borderTop: '1px solid var(--light)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem' }}>
                    <span style={{ color: 'var(--gray)' }}>Power Source:</span>
                    <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>
                      {model.batteryStandard ? model.batteryStandard : model.battery}
                    </strong>
                  </div>
                  {model.serviceWeight && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem' }}>
                      <span style={{ color: 'var(--gray)' }}>Service Weight:</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{model.serviceWeight}</strong>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem' }}>
                    <span style={{ color: 'var(--gray)' }}>Turning Radius (Wa):</span>
                    <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{model.turningRadius}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--gray)' }}>Mast Options:</span>
                    <strong style={{ color: 'var(--navy)', fontSize: '.8rem', maxWidth: '60%', textAlign: 'right', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={model.mastType}>
                      {model.mastType}
                    </strong>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: 'auto' }}>
                  <a href="#category-enquiry-section" className="btn btn-primary" style={{ textAlign: 'center', padding: '10px 0', fontSize: '.85rem', fontWeight: '700' }}>
                    Enquire Spec
                  </a>
                  <a href="/byd_advantages.png" download className="btn btn-secondary" style={{ textAlign: 'center', padding: '10px 0', fontSize: '.85rem', fontWeight: '700', border: '1px solid var(--light)' }}>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Model Comparison Table */}
          {(() => {
            const specColumns = [
              { key: 'capacity', label: 'Load Capacity' },
              { key: 'loadCenter', label: 'Load Center' },
              { key: 'batteryStandard', label: 'Standard Battery' },
              { key: 'batteryOptions', label: 'Optional Battery' },
              { key: 'battery', label: 'Battery Chemistry' },
              { key: 'serviceWeight', label: 'Service Weight' },
              { key: 'liftHeight', label: 'Lifting Heights' },
              { key: 'turningRadius', label: 'Turning Radius (Wa)' },
              { key: 'mastType', label: 'Mast Configurations' },
              { key: 'travelSpeed', label: 'Travel Speed (Loaded/Unloaded)' },
              { key: 'liftSpeed', label: 'Lifting Speed (Loaded/Unloaded)' }
            ].filter(col => category.models.some(model => model[col.key] !== undefined));

            return (
              <div className="comparison-table-section" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '8px' }}>Technical Comparison Matrix</h3>
                <p style={{ color: 'var(--gray)', fontSize: '.95rem', marginBottom: '24px' }}>Verify specifications across the lineup to select the optimal model configuration.</p>
                <div className="table-responsive" style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--light)', background: 'var(--offwhite)' }}>
                        <th style={{ padding: '12px 16px', color: 'var(--navy)', fontWeight: '700', minWidth: '120px' }}>Model Name</th>
                        {specColumns.map((col) => (
                          <th key={col.key} style={{ padding: '12px 16px', color: 'var(--navy)', fontWeight: '700', minWidth: '150px' }}>{col.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {category.models.map((model, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--light)' }}>
                          <td style={{ padding: '14px 16px', color: 'var(--navy)', fontWeight: '700' }}>{model.name}</td>
                          {specColumns.map((col) => (
                            <td key={col.key} style={{ padding: '14px 16px', color: '#4A5A72', fontSize: '.92rem' }}>
                              {model[col.key] || 'N/A'}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}

          {/* ECB Load Diagram Section */}
          {category.id === 'electric-counterbalance-forklifts' && (
            <div className="load-diagram-section" style={{ marginTop: '50px', background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '12px' }}>Rated Load Capacity Curves</h3>
                <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.65', margin: 0 }}>
                  Verify how rated load capacities decay as the center-of-gravity moves outwards. Standard ratings are measured at a 500 mm or 600 mm load center. As lift heights exceed 4.5 meters, vertical leverage impacts the safe working load capacity.
                </p>
              </div>

              {/* Full Width Image Container */}
              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '8px', border: '1px solid var(--light)', display: 'flex', justifyContent: 'center', overflow: 'hidden', marginBottom: '30px' }}>
                <img 
                  src="/byd_load_diagram.png" 
                  alt="BYD Counterbalance Forklift Load Curves Diagram" 
                  style={{ width: '100%', height: 'auto', borderRadius: '4px', transition: 'transform 0.3s ease', cursor: 'zoom-in' }} 
                  onClick={(e) => {
                    e.target.style.transform = e.target.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
                    e.target.style.zIndex = e.target.style.transform === 'scale(1.2)' ? '50' : '1';
                  }}
                />
              </div>

              {/* Three Technical Highlight Points in horizontal columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--offwhite)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--cyan)' }}>
                  <strong style={{ color: 'var(--navy)', fontSize: '1rem', display: 'block', marginBottom: '6px' }}>Rated Load Center decay (mm)</strong>
                  <span style={{ display: 'block', fontSize: '.9rem', color: '#4A5A72', lineHeight: '1.5' }}>
                    Shows capacities decay proportionally as the center-of-gravity moves from 500 mm to 1000 mm.
                  </span>
                </div>
                <div style={{ background: 'var(--offwhite)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--cyan)' }}>
                  <strong style={{ color: 'var(--navy)', fontSize: '1rem', display: 'block', marginBottom: '6px' }}>Lift Height Curves (3000 mm to 6800 mm)</strong>
                  <span style={{ display: 'block', fontSize: '.9rem', color: '#4A5A72', lineHeight: '1.5' }}>
                    Multiple height indicators on each chart map residual capacity caps at typical standard mast elevations.
                  </span>
                </div>
                <div style={{ background: 'var(--offwhite)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--cyan)' }}>
                  <strong style={{ color: 'var(--navy)', fontSize: '1rem', display: 'block', marginBottom: '6px' }}>Model Alignment Coverage</strong>
                  <span style={{ display: 'block', fontSize: '.9rem', color: '#4A5A72', lineHeight: '1.5' }}>
                    Covers models ECB16/18, ECB20/25/30/35, and heavy chassis ECB40/45/50 counterbalance curves.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Engineering Features Details */}
      <section className="section-padding" style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Engineering</div>
            <h2 style={{ color: 'var(--navy)', margin: '12px 0 20px' }}>Built For Demanding Industrial Shifts</h2>
            <p style={{ color: '#4A5A72', fontSize: '1.08rem', lineHeight: '1.75', marginBottom: '24px' }}>
              BYD electric machines leverage high-efficiency AC motors and regenerative braking systems. This recovers kinetic energy directly back into the battery during deceleration, improving uptime on busy terminal floors.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {category.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1.02rem', color: '#4A5A72' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: '700', fontSize: '1.2rem', lineHeight: '1' }}>✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          {category.id === 'reach-trucks' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px' }}>
              <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <img src="/byd_reach_truck_side.png" alt="BYD Reach Truck Mast Engineering" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.06))' }} />
                <span style={{ display: 'block', fontSize: '.85rem', color: 'var(--navy)', marginTop: '12px', fontWeight: '700' }}>Triplex Mast Configuration</span>
                <span style={{ display: 'block', fontSize: '.75rem', color: 'var(--gray)', marginTop: '2px' }}>Double-cylinder high-visibility structural layout</span>
              </div>
              <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/byd_reach_wheel.png" alt="BYD Polyurethane Load Wheel" style={{ maxWidth: '100%', maxHeight: '120px', objectFit: 'contain', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.05))' }} />
                <span style={{ display: 'block', fontSize: '.85rem', color: 'var(--navy)', marginTop: '12px', fontWeight: '700' }}>Polyurethane Wheels</span>
                <span style={{ display: 'block', fontSize: '.75rem', color: 'var(--gray)', marginTop: '2px' }}>Heavy-duty wear-resistant compound</span>
              </div>
            </div>
          ) : (
            <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '16px' }}>Performance Guaranteed</h3>
              <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Each unit undergoes factory tests covering structural alignment, hydraulic pressure thresholds, electrical insulation safety, and gradient starting load performance before handover.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '6px', borderLeft: '3px solid var(--cyan)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)' }}>Vibration Tests</strong>
                  <span style={{ fontSize: '.85rem', color: 'var(--gray)' }}>Ensures structural stability on rough outdoor surfaces.</span>
                </div>
                <div style={{ background: '#ffffff', padding: '16px', borderRadius: '6px', borderLeft: '3px solid var(--cyan)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)' }}>Waterproofing IPX4 Certification</strong>
                  <span style={{ fontSize: '.85rem', color: 'var(--gray)' }}>Fully isolated battery casing verified under high rain simulators.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Coded Advantages Section */}
      <section className="section-padding advantages-section" style={{ background: '#ffffff', padding: '90px 0', borderTop: '1px solid var(--light)' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Technology & Value</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)', fontSize: '2.4rem' }}>BYD Forklift Advantages</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Advanced engineering integration combining proprietary LFP chemistry, intelligent electric controls, and robust drive systems.
            </p>
          </div>

          {/* 1. TOP PILLARS GRID */}
          <div className="advantages-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '70px' }}>
            
            {/* Pillar 1: High Performance */}
            <div style={{ background: '#1c2b5e', color: '#ffffff', padding: '30px', borderRadius: '10px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--cyan2)', fontWeight: '700', marginBottom: '8px' }}>Pillar 01</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 16px' }}>HIGH PERFORMANCE</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>⚡</span> High traveling speed</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>⚡</span> High lifting speed</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>⚡</span> High gradeability</li>
              </ul>
            </div>

            {/* Pillar 2: High Quality */}
            <div style={{ background: '#16224a', color: '#ffffff', padding: '30px', borderRadius: '10px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--cyan2)', fontWeight: '700', marginBottom: '8px' }}>Pillar 02</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 16px' }}>HIGH QUALITY</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '.95rem', lineHeight: '1.6', margin: 0 }}>
                Relying on advanced technologies in battery, motor, electric control and hydraulic systems, BYD creates exceptionally reliable and integrated logistics products.
              </p>
            </div>

            {/* Pillar 3: High Safety */}
            <div style={{ background: 'var(--navy2)', color: '#ffffff', padding: '30px', borderRadius: '10px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--cyan2)', fontWeight: '700', marginBottom: '8px' }}>Pillar 03</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 16px' }}>HIGH SAFETY</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🛡️</span> Cornering speed control</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🛡️</span> Hill hold control</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🛡️</span> Overload protection active</li>
              </ul>
            </div>

            {/* Pillar 4: High Efficiency */}
            <div style={{ background: '#0e1730', color: '#ffffff', padding: '30px', borderRadius: '10px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--cyan2)', fontWeight: '700', marginBottom: '8px' }}>Pillar 04</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 16px' }}>HIGH EFFICIENCY</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🔋</span> 1-hour quick charge ready</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🔋</span> Integrated energy saving</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--cyan)' }}>🔋</span> Multi-shift operation adaptable</li>
              </ul>
            </div>

          </div>

          {/* 2. CORE FEATURES DETAIL LIST */}
          <div className="advantages-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            
            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> High Efficiency
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                BYD forklift equipped with high capacity lithium iron-phosphate battery and high efficiency charger, which ensures the strongest endurance and adapt to the most complex working conditions. It saves 90% charging time compared with lead-acid forklift.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> High Safety
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                Compared to lead-acid battery forklift, BYD lithium iron-phosphate battery forklift produce zero emission or pollution during charging that need no special charging room. In order to ensure the safety and stability of the battery, there are a series of extreme tests including overcharge, over discharge, short circuit, oven, crush and burning to name a few. Strong scientific capability and rigorous testing processes comprehensively guarantee the safety and excellent performance of BYD lithium iron-phosphate battery.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> Long Life Cycle
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                Battery life is above 4,000 cycles or over 10 years. No need for battery replacement under normal use.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> Strong Temperature Adaptability
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                Applies to the working condition from minus 40 degree Celsius to 60 degree Celsius with good performance.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> Zero Pollution, Zero Emission
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                The battery is composed of recyclable green materials. No heavy metal pollution. No toxic fumes or gas emissions during operation.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> Maintenance Free
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                No need for daily battery check or periodic maintenance. No need for add electrolyte or distilled water.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--cyan)' }}>➔</span> Opportunity Charging
              </h4>
              <p style={{ color: '#4A5A72', fontSize: '.98rem', lineHeight: '1.65', margin: 0 }}>
                Opportunity charging during working break and lunch allow BYD forklift run all day. No memory effect.
              </p>
            </div>

          </div>

          {/* 3. BATTERY STANDARDS COMPLIANCE ROW */}
          <div style={{ background: 'var(--offwhite)', border: '1px solid var(--light)', borderRadius: '12px', padding: '36px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 20px' }}>
              BYD Lithium Iron Phosphate Battery Compliance Standards
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {[
                { code: "CE", title: "European Conformity" },
                { code: "UL 1642", title: "Standard for Lithium Batteries" },
                { code: "UL 2580", title: "Batteries for Electric Vehicles" },
                { code: "UN 38.3", title: "Transport of Lithium Metal Batteries" },
                { code: "QC / T 743", title: "Chinese Automotive Battery Standard" }
              ].map((std, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px', padding: '12px 24px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '160px' }}>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--cyan)', fontWeight: '800' }}>{std.code}</strong>
                  <span style={{ fontSize: '.75rem', color: 'var(--gray)', fontWeight: '600' }}>{std.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE BYD MHE CATEGORY SECTION */}
      {category.whyChoose && (
        <section className="section-padding why-choose-category-section" style={{ background: 'var(--offwhite)', padding: '80px 0', borderTop: '1px solid var(--light)' }}>
          <div className="container">
            <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
              <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Value Proposition</div>
              <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Why Choose BYD {category.name}</h2>
              <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.05rem', margin: 0 }}>
                High-end lithium performance and design details engineered to maximize warehouse operational safety and efficiency.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
              {category.whyChoose.map((item, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '28px', boxShadow: '0 8px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <strong style={{ color: 'var(--navy)', fontSize: '1.2rem', fontWeight: '800' }}>{item.title}</strong>
                  <p style={{ color: '#4A5A72', fontSize: '.95rem', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. STANDARD & OPTIONAL EQUIPMENT LISTING */}
      {category.standardEquipment && (
        <section className="section-padding equipment-configs-section" style={{ background: '#ffffff', padding: '85px 0', borderTop: '1px solid var(--light)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Standard Equipment Card */}
            <div style={{ background: '#f8fafc', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 6px 20px rgba(0,0,0,0.01)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--cyan)', fontSize: '1.3rem' }}>✓</span> Standard Equipment
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {category.standardEquipment.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '.96rem', color: '#4A5A72', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--cyan)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Equipment Card */}
            {category.optionalEquipment && (
              <div style={{ background: '#f8fafc', border: '1px solid var(--light)', borderRadius: '12px', padding: '40px', boxShadow: '0 6px 20px rgba(0,0,0,0.01)' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--cyan)', fontSize: '1.3rem' }}>✚</span> Optional Equipment
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {category.optionalEquipment.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '.96rem', color: '#4A5A72', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--cyan)', fontWeight: 'bold', fontSize: '1.1rem' }}>+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 6. TECHNICAL DOWNLOADS SECTION */}
      {category.downloads && (
        <section className="section-padding downloads-section" style={{ background: 'var(--offwhite)', padding: '70px 0', borderTop: '1px solid var(--light)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Resources</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Technical Documentation</h2>
            <p style={{ color: '#4A5A72', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
              Download official brochures and detailed engineering data sheets for the BYD {category.name} range.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {category.downloads.map((dl, idx) => (
                <a key={idx} href={dl.path} download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', textDecoration: 'none', fontWeight: '700', borderRadius: '6px' }}>
                  <span>📥</span> {dl.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Form Section */}
      <section id="category-enquiry-section" className="section-padding quote-form-section" style={{ background: 'var(--offwhite)', padding: '80px 0' }}>
        <div className="container quote-grid card" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '48px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '48px' }}>
          <div className="quote-info-col">
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Quote Request</div>
            <h2 style={{ color: 'var(--navy)', margin: '12px 0' }}>
              Configure Your {category.id === 'reach-trucks' ? 'BYD Reach Truck' : category.id === 'electric-counterbalance-forklifts' ? 'BYD Counterbalance Forklift' : category.name}
            </h2>
            <p style={{ color: '#4A5A72', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '24px' }}>
              Submit your specific warehouse aisle widths, pallet dimensions, and weight requirements to configure the optimal battery capacity, mast type, and custom attachments.
            </p>
            <div className="direct-quote-contacts" style={{ borderTop: '1px solid var(--light)', paddingTop: '20px' }}>
              <p style={{ fontSize: '1rem', color: 'var(--navy)' }}>📞 <strong>Support Helpline:</strong> +91 98682 38367</p>
              <p style={{ fontSize: '1rem', color: 'var(--navy)', marginTop: '8px' }}>✉️ <strong>Technical Queries:</strong> info@eeipl.co.in</p>
            </div>
          </div>

          <div className="quote-form-col">
            {submitted ? (
              <div className="form-success-alert" style={{ background: 'rgba(58,159,216,.05)', border: '1px solid rgba(58,159,216,.15)', borderRadius: '8px', padding: '30px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--cyan)', margin: '0 0 10px' }}>Inquiry Submitted</h3>
                <p style={{ color: '#4A5A72', margin: 0 }}>We have received your specifications inquiry. A material handling consultant will call you within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form-fields" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '.9rem', fontWeight: '600', color: 'var(--navy)' }}>Contact Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="E.g., John Doe" style={{ border: '1px solid var(--light)', borderRadius: '6px', padding: '12px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="company" style={{ fontSize: '.9rem', fontWeight: '600', color: 'var(--navy)' }}>Company</label>
                  <input type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange} placeholder="E.g., Logistics Hub" style={{ border: '1px solid var(--light)', borderRadius: '6px', padding: '12px' }} />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="email" style={{ fontSize: '.9rem', fontWeight: '600', color: 'var(--navy)' }}>Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@company.com" style={{ border: '1px solid var(--light)', borderRadius: '6px', padding: '12px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="phone" style={{ fontSize: '.9rem', fontWeight: '600', color: 'var(--navy)' }}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91..." style={{ border: '1px solid var(--light)', borderRadius: '6px', padding: '12px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '.9rem', fontWeight: '600', color: 'var(--navy)' }}>Aisle Width / Lift Height / Custom Attachments</label>
                  <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="E.g. Aisle width is 2.9m, lifting standard Euro pallets..." style={{ border: '1px solid var(--light)', borderRadius: '6px', padding: '12px', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px', fontWeight: '700', borderRadius: '6px' }}>
                  Enquire Specifications
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BydMheCategory;
