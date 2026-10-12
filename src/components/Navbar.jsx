import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { brands } from '../data/productsData';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu drawer toggle
  const [productsExpanded, setProductsExpanded] = useState(false); // Mobile accordion toggle
  const location = useLocation();
  const navigate = useNavigate();

  // Close menus on Escape key press or clicking outside for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setProductsExpanded(false);
      }
    };
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item-mega')) {
        setProductsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e, hash) => {
    if (hash) {
      if (location.pathname === '/' || location.pathname === '/sample-home') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + hash);
      }
    }
    setIsOpen(false);
    setProductsExpanded(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link className="nav-logo" to="/" onClick={(e) => handleLinkClick(e, '#hero')}>
          <img src="/logo.png" alt="Equipage" className="logo-img" />
        </Link>

        {/* Hamburger Mobile Toggle Button */}
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links Container */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/about" onClick={() => { setIsOpen(false); setProductsExpanded(false); }}>
              About
            </Link>
          </li>

          {/* DYNAMIC PRODUCTS MEGA MENU / MOBILE ACCORDION */}
          <li className={`nav-item-mega ${productsExpanded ? 'expanded' : ''}`}>
            <a 
              href="#products" 
              onClick={(e) => {
                e.preventDefault();
                setProductsExpanded(!productsExpanded);
              }}
              aria-expanded={productsExpanded}
              aria-haspopup="true"
            >
              Products
              <span className="accordion-arrow"></span>
            </a>
            <div className="mega-menu">
              <div className="mega-menu-inner">
                <div className="mega-label">Our Brand Partners &amp; Product Lines</div>
                <div className="mega-grid">
                  {brands.map((b) => (
                    <Link 
                      key={b.id} 
                      to={`/products/${b.id}`} 
                      className="mega-item"
                      onClick={() => {
                        setIsOpen(false);
                        setProductsExpanded(false);
                      }}
                    >
                      <div className="mega-thumbnail">
                        <img src={b.image} alt={b.name} />
                      </div>
                      <div className="mega-item-info">
                        <span className="mega-brand">{b.name}</span>
                        <span className="mega-type">{b.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mega-footer">
                  <span className="mega-footer-text">PAN India &amp; North India distribution</span>
                  <a href="#quote" onClick={(e) => handleLinkClick(e, '#quote')}>
                    Request a Quote
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')}>
              Industries
            </a>
          </li>
          <li>
            <Link to="/contact" onClick={() => { setIsOpen(false); setProductsExpanded(false); }}>
              Contact
            </Link>
          </li>
          
          {/* Mobile CTA (only visible in mobile drawer list) */}
          <li className="mobile-cta-li">
            <a href="#quote" className="nav-cta mobile-cta" onClick={(e) => handleLinkClick(e, '#quote')}>
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <a href="#quote" className="nav-cta desktop-cta" onClick={(e) => handleLinkClick(e, '#quote')}>
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
