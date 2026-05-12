import type { FC } from 'react';
import { motion } from 'framer-motion';
import { tmdLogoPath } from './BrandingIcons';
import './Footer.css';

// Import image
import exteriorGlow1 from '../assets/images/exterior-glow-v1.jpg';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const serviceAreas = [
    'All of the Lakes Region',
    'Wolfeboro',
    'Meredith',
    'Alton',
    'Moultonborough',
    'Tuftonboro',
    'And More!'
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer-container"
    >
      <div className="footer-inner">
        {/* Left Image Column - Visible on Wide Screens */}
        <div className="footer-image-col">
          <img 
            src={exteriorGlow1} 
            alt="Red Corvette Detail" 
            className="footer-image"
          />
        </div>

        {/* Right Content Column */}
        <div className="footer-content-col">
          <div className="footer-logo-wrap">
            <img
              src={tmdLogoPath}
              alt="Dylans Mobile Detailing"
              className="footer-logo-img"
            />
          </div>

          <div className="footer-divider" />

          <div className="footer-sections-grid">
            <section className="footer-contact-info">
              <h2 className="footer-section-title">Contact Us</h2>
              <div className="footer-section-underline" />
              <p>
                Phone:{' '}
                <a href="tel:6039986080" className="footer-contact-link">
                  (603) 998-6080
                </a>
              </p>
              <p>Email:</p>
              <p>
                <a
                  href="mailto:themobiledetailingcollc@gmail.com"
                  className="footer-contact-link"
                >
                  themobiledetailingcollc@gmail.com
                </a>
              </p>
              <p>Address: 1070 Whittier</p>
              <p>Highway, Moultonboro NH 03254</p>
            </section>

            <section className="footer-areas-list">
              <h2 className="footer-section-title">Areas We Service</h2>
              <div className="footer-section-underline" />
              <div className="footer-areas-grid">
                {serviceAreas.map((area) => (
                  <p key={area}>{area}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {currentYear} Dylan&apos;s Mobile Detailing. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
