import type { FC } from 'react';
import { motion } from 'framer-motion';
import './AutoDetailing.css';

const AutoDetailing: FC = () => {
  const packages = [
    {
      title: 'Interior Refresh',
      price: '199',
      image: '/themobiledetailingco.com/wp-content/uploads/2024/11/interior-1000x1000-v1.jpg',
      features: [
        'Detailed Vacuum & Wipe Down',
        'Trash Removal',
        'Carpet & Upholstery Shampoo',
        'Steam Cleaning',
        'Leather Conditioning',
        'Door Jamb Cleaning',
        'Stain Removal',
        'and More'
      ],
      isReversed: false
    },
    {
      title: 'Exterior Glow',
      price: '199',
      image: '/themobiledetailingco.com/wp-content/uploads/2024/11/exterior-glow-v1.jpg',
      features: [
        'Hand Wash & Foam Bath',
        'Bug & Tar Removal',
        'Wheels & Tires Cleaned',
        'Protective Wax or Sealant',
        'Iron/Rust Particle Removal',
        'Clay Bar',
        'Streak Free Glass',
        'and More'
      ],
      isReversed: true
    },
    {
      title: 'Total Transformation',
      price: '299',
      image: '/themobiledetailingco.com/wp-content/uploads/2024/11/total-transformation-v1.jpg',
      features: [
        'Luxury Detailing Services',
        'Inside & Out Deep Cleaning',
        'Interior Shampoo',
        'Wash & Wax',
        'Iron/Rust Particle Removal',
        'Clay Bar',
        'and More'
      ],
      isReversed: false
    }
  ];

  return (
    <div className="auto-detailing-page">
      {/* Hero Section */}
      <section className="auto-hero">
        <div className="auto-hero-overlay" />
        <div className="auto-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mobile Detailing Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform your ride with Dylan's Mobile Detailing — Where Luxury Meets Convenience
          </motion.p>
          <motion.div 
            className="auto-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/contact" className="btn-book">BOOK ONLINE</a>
            <a href="tel:6039986080" className="btn-call">
              <span className="icon-phone">📞</span> CALL NOW
            </a>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="auto-packages">
        {packages.map((pkg) => (
          <div key={pkg.title} className={`package-showcase-row ${pkg.isReversed ? 'is-reversed' : ''}`}>
            <div className="package-image-col">
              <img src={pkg.image} alt={pkg.title} className="package-bg-image" />
              <div className="package-title-overlay">
                <h2>{pkg.title}</h2>
              </div>
            </div>
            <div className="package-content-col">
              <div className="package-price-tag">
                <span className="from">From</span>
                <span className="price">${pkg.price}</span>
              </div>
              <h3 className="services-offered-title">Services Offered:</h3>
              <ul className="package-features-grid">
                {pkg.features.map((feature) => (
                  <li key={feature} className="feature-item">
                    <span className="check-icon">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="tel:6039986080" className="package-cta-btn">
                Call Now For a Free Quote
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AutoDetailing;
