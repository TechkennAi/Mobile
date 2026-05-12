import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import { tmdLogoPath } from './BrandingIcons';
import './Header.css';

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileDropdownOpen(null);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Services And Pricing', 
      href: '/services',
      dropdown: [
        { name: 'Auto Detailing', href: '/auto-detailing' },
        { name: 'Boat Detailing', href: '/boat-detailing' },
        { name: 'Ceramic Coating', href: '/ceramic-coating' },
        { name: 'Paint Correction', href: '/paint-correction' }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="header-container"
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.98)' : '#000',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none'
      }}
    >
      <div className="header-top-row">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          href="/"
          className="header-logo"
        >
          <img src={tmdLogoPath} alt="Dylans Mobile Detailing" />
        </motion.a>

        {/* Desktop Navigation - Centered */}
        <nav className="desktop-nav">
          {navItems.map((item, index) => (
            <div 
              key={item.name} 
              className="nav-item-wrapper"
              onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
            >
              <motion.a
                href={item.href}
                className={pathname === item.href ? 'header-nav-link is-active' : 'header-nav-link'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {item.dropdown && (
                  <span className={`dropdown-arrow ${isDropdownOpen ? 'is-open' : ''}`}>
                    ▾
                  </span>
                )}
              </motion.a>

              {item.dropdown && (
                <motion.div 
                  className="services-dropdown"
                  initial={{ opacity: 0, y: 10, display: 'none' }}
                  animate={isDropdownOpen ? { opacity: 1, y: 0, display: 'block' } : { opacity: 0, y: 10, transitionEnd: { display: 'none' } }}
                  transition={{ duration: 0.2 }}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <a 
                      key={subItem.name} 
                      href={subItem.href}
                      className={`dropdown-item ${subIndex === 0 ? 'is-first' : ''}`}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Schedule Now Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#f20000',
            color: '#fff',
            padding: '18px 40px',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            flexShrink: 0,
            display: 'none'
          }}
          className="desktop-schedule-btn"
        >
          Schedule Now
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <a href="tel:6039986080" className="mobile-call-btn">
        (603) 998-6080
      </a>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu"
        >
          {navItems.map((item) => (
            <div key={item.name} className="mobile-menu-item-group">
              <div className="mobile-menu-link-row">
                <a
                  href={item.href}
                  className={`mobile-menu-link${pathname === item.href ? ' is-active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <button 
                    className={`mobile-dropdown-toggle ${mobileDropdownOpen === item.name ? 'is-open' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name);
                    }}
                  >
                    ▾
                  </button>
                )}
              </div>
              
              {item.dropdown && mobileDropdownOpen === item.name && (
                <div className="mobile-submenu">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className={`mobile-submenu-link${pathname === subItem.href ? ' is-active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.nav>
      )}

      {/* Style tag to show schedule button on desktop */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-schedule-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
