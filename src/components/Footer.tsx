import type { FC } from 'react';
import { motion } from 'framer-motion';
import { tmdLogoPath } from './BrandingIcons';
import './Footer.css';

// Import image
import exteriorGlow1 from '../assets/images/exterior-glow-v1.jpg';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const serviceAreas = [
    'Moorestown',
    'Mount Laurel',
    'Cherry Hill',
    'Maple Shade',
    'Cinnaminson',
    'Haddonfield',
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
                <a href="tel:8566526126" className="footer-contact-link">
                  (856) 652-6126
                </a>
              </p>
              <p>Email:</p>
              <p>
                <a
                  href="mailto:wethebestll20@gmail.com"
                  className="footer-contact-link"
                >
                  wethebestll20@gmail.com
                </a>
              </p>
              <p>Address: 28 Plamer dr</p>
              <p>Moorestown, NJ 08057</p>
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
