import { Link } from 'react-router-dom';
import { products } from '../data/productsData';
import SEO from '../components/SEO';

function Products() {
  return (
    <div className="products-page animate-fade-up">
      <SEO
        title="Industrial Machinery & Equipment Catalogue"
        description="Explore Equipage Equipment Solutions complete range of BYD lithium forklifts, Terex Franna cranes, Beltas turntable ladders, Doosan Bobcat, Liftmak, and Jinwoo AWPs across India."
        keywords="industrial equipment catalog India, electric forklifts, pick and carry cranes, aerial work platforms, turntable ladders"
        canonicalUrl="https://eeipl.co.in/products"
      />

      {/* Page Header */}
      <section className="page-header" style={{ padding: '60px 0 40px', background: 'linear-gradient(180deg, #070B14 0%, #0D1424 100%)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-label" style={{ color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, fontSize: '.8rem', marginBottom: '8px' }}>
            Authorized OEM Fleet
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 16px', color: '#fff' }}>
            Heavy Equipment &amp; Industrial Solutions
          </h1>
          <p className="page-header-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Authorized partner for world-leading manufacturers in zero-emission lithium handling, hydraulic loader cranes, high-reach aerial platforms, and municipal firefighting equipment across PAN India.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding" style={{ padding: '60px 0', background: '#090D1A' }}>
        <div className="container">
          <div className="grid grid-2 products-catalog-grid" style={{ gap: '30px' }}>
            {products.map((product) => (
              <div 
                key={product.id} 
                className="card catalog-product-card"
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                <div className="catalog-p-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="p-brand-badge" style={{ background: '#F59E0B', color: '#000', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', fontSize: '.75rem', letterSpacing: '.06em' }}>
                    {product.brand}
                  </span>
                  <span className="p-region-badge" style={{ color: '#38BDF8', fontSize: '.8rem', fontWeight: 600 }}>
                    📍 {product.region}
                  </span>
                </div>
                
                <h2 className="catalog-p-title" style={{ fontSize: '1.5rem', margin: '0 0 8px', color: '#fff' }}>
                  {product.name}
                </h2>
                <p className="catalog-p-slogan" style={{ color: '#F59E0B', fontSize: '.9rem', fontWeight: 600, marginBottom: '12px' }}>
                  {product.slogan}
                </p>
                <p className="catalog-p-desc" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '.92rem', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {product.overview.substring(0, 160)}...
                </p>
                
                {/* Highlights List */}
                <div className="catalog-p-features" style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                  <h4 style={{ color: '#fff', fontSize: '.9rem', marginBottom: '10px' }}>Key Highlights:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>
                        <strong style={{ color: '#fff' }}>{feat.title}:</strong> {feat.description.substring(0, 60)}...
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="catalog-p-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="catalog-p-cat" style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                    {product.category}
                  </span>
                  <Link 
                    to={`/products/${product.id}`} 
                    className="btn btn-primary"
                    style={{
                      background: '#F59E0B',
                      color: '#000',
                      fontWeight: 700,
                      padding: '8px 18px',
                      borderRadius: '6px',
                      fontSize: '.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    View Specifications &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Assistance Callout */}
      <section className="home-cta-section" style={{ padding: '60px 0', background: 'linear-gradient(135deg, #0B132B 0%, #1C2541 100%)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div className="cta-content" style={{ maxWidth: '650px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 10px' }}>Need a custom chassis or hydraulic configuration?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
              Our dedicated engineering and commissioning team handles custom superstructure mounting for Tata, Ashok Leyland, MAN, and BharatBenz chassis, along with complete regulatory certifications.
            </p>
          </div>
          <div className="cta-btn-col">
            <Link 
              to="/contact" 
              className="btn btn-secondary"
              style={{
                background: '#0284C7',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '.95rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Contact Engineering Team &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
