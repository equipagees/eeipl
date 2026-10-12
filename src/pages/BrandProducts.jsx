import { useParams, Link } from 'react-router-dom';
import { products, brands } from '../data/productsData';
import ProductDetail from './ProductDetail';

function BrandProducts() {
  const { brandId } = useParams();

  // Find current brand
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    // Fallback: Check if it's actually a productId
    const isProduct = products.some((p) => p.id === brandId);
    if (isProduct) {
      return <ProductDetail forceId={brandId} />;
    }

    return (
      <div className="container section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Brand Not Found</h2>
        <p>The equipment brand you are looking for is not registered or has been moved.</p>
        <Link to="/products" className="btn btn-primary mt-3" style={{ display: 'inline-flex', marginTop: '16px' }}>
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Filter products by this brand code
  const brandProducts = products.filter((p) => p.brand.toUpperCase() === brand.brandCode.toUpperCase());

  return (
    <div className="brand-products-page animate-fade-up">
      {/* Brand Hero Header */}
      <section className="page-header brand-header-section" style={{ background: 'var(--navy2)', color: '#ffffff', padding: '80px 0 60px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
          <div className="brand-header-text">
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Brand Partner</div>
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', margin: '12px 0' }}>{brand.name}</h1>
            <p className="brand-slogan" style={{ fontSize: '1.25rem', color: 'var(--cyan2)', fontWeight: '600', marginBottom: '16px' }}>
              {brand.slogan}
            </p>
            <p className="brand-desc" style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.7', margin: 0 }}>
              {brand.longDescription}
            </p>
          </div>
          <div className="brand-header-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="brand-visual-card" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '30px', textAlign: 'center', backdropFilter: 'blur(8px)', width: '100%', maxWidth: '340px' }}>
              <img src={brand.image} alt={brand.name} style={{ width: '100%', maxHeight: '180px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
              <div style={{ marginTop: '16px', fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--cyan)' }}>
                Official Brand Lineup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Products Grid */}
      <section className="section-padding" style={{ background: 'var(--offwhite)', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ color: 'var(--cyan)', textAlign: 'center' }}>Product Range</div>
            <h2 style={{ textAlign: 'center', margin: '12px 0 16px', color: 'var(--navy)' }}>Explore {brand.name} Equipment</h2>
            <p style={{ textAlign: 'center', color: '#4A5A72', fontSize: '1.1rem', margin: 0 }}>
              Select a model below to view full specifications, load curves, chassis details, and request a technical quote.
            </p>
          </div>

          {brandProducts.length === 0 ? (
            <div className="card text-center" style={{ padding: '60px', background: '#ffffff', border: '1px solid var(--light)', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--navy)' }}>Product Lineup Expanding</h3>
              <p style={{ color: '#4A5A72', maxWidth: '480px', margin: '12px auto 0' }}>
                We are currently updating our database for {brand.name} product sheets. Contact our technical team for immediate specifications and catalog sheets.
              </p>
              <Link to="/contact" className="btn btn-secondary mt-3" style={{ display: 'inline-flex', marginTop: '16px' }}>
                Contact Technical Sales
              </Link>
            </div>
          ) : (
            <div className="grid products-catalog-grid" style={{ display: 'grid', gridTemplateColumns: brandProducts.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {brandProducts.map((product) => (
                <div key={product.id} className="card catalog-product-card" style={{ background: '#ffffff', border: '1px solid var(--light)', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
                  <div className="catalog-p-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span className="p-brand-badge" style={{ background: 'var(--navy)', color: '#ffffff', padding: '4px 12px', borderRadius: '4px', fontSize: '.75rem', fontWeight: '700', letterSpacing: '.06em' }}>
                      {product.brand}
                    </span>
                    <span className="p-region-badge" style={{ color: '#4A5A72', fontSize: '.85rem', fontWeight: '500' }}>
                      📍 {product.region}
                    </span>
                  </div>

                  <h3 className="catalog-p-title" style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--navy)', margin: '0 0 8px' }}>
                    {product.name}
                  </h3>
                  <p className="catalog-p-slogan" style={{ fontSize: '1.02rem', fontWeight: '600', color: 'var(--cyan)', margin: '0 0 16px' }}>
                    {product.slogan}
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                    <p className="catalog-p-desc" style={{ fontSize: '1.05rem', color: '#4A5A72', lineHeight: '1.6', margin: 0 }}>
                      {product.overview.length > 180 ? `${product.overview.substring(0, 180)}...` : product.overview}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={product.image} alt={product.name} style={{ maxPosition: 'relative', width: '100%', maxHeight: '130px', objectFit: 'contain' }} />
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="catalog-p-features" style={{ background: 'var(--offwhite)', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '.9rem', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--navy)', margin: '0 0 12px', fontWeight: '700' }}>
                      Key Engineering Highlights:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} style={{ fontSize: '.92rem', color: '#4A5A72', lineHeight: '1.4' }}>
                          <strong style={{ color: 'var(--navy)' }}>{feat.title}:</strong> {feat.description.substring(0, 70)}...
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="catalog-p-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="catalog-p-cat" style={{ background: 'rgba(58, 159, 216, 0.1)', color: 'var(--cyan)', padding: '4px 10px', borderRadius: '4px', fontSize: '.8rem', fontWeight: '600' }}>
                      {product.category}
                    </span>
                    <Link to={`/products/${brand.id}/${product.id}`} className="btn btn-primary" style={{ display: 'inline-flex', padding: '10px 20px', borderRadius: '6px' }}>
                      View Specifications &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Engineering Support CTA */}
      <section className="home-cta-section section-padding" style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="cta-box card" style={{ background: 'var(--navy)', color: '#ffffff', borderRadius: '12px', padding: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div className="cta-content" style={{ maxWidth: '640px' }}>
              <h2 style={{ color: '#ffffff', margin: '0 0 12px' }}>Looking for Custom Configurations?</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.08rem', margin: 0 }}>
                We provide custom outriggers, specialty attachments, and chassis installations tailored to your municipal, logistic, or heavy industrial requirements. Talk to our technical coordinators.
              </p>
            </div>
            <div className="cta-btn-col">
              <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-flex', background: 'var(--cyan)', color: '#ffffff', padding: '12px 28px', borderRadius: '6px', fontWeight: '700' }}>
                Contact Engineering Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandProducts;
