import type { FC } from 'react';
import { motion } from 'framer-motion';
import './AutoDetailing.css'; // Reusing the same styling structure

const BoatDetailing: FC = () => {
  const packages = [
    {
      title: 'Bronze Plan',
      price: '35',
      priceSuffix: '/FT',
      image: '/themobiledetailingco.com/wp-content/uploads/2026/02/pexels-roman-odintsov-8356431.jpg',
      features: [
        'Basic interior detail',
        'Exterior wash & surface protection',
        'Vacuum & wipe down',
        'Exterior wash',
        'Protective spray sealant',
        'Ideal for seasonal washes and maintenance care',
      ],
      isReversed: false
    },
    {
      title: 'Gold Plan',
      price: '60',
      priceSuffix: '/FT',
      image: '/themobiledetailingco.com/wp-content/uploads/2026/02/pexels-ron-lach-9952358-scaled.jpg',
      features: [
        'Full interior detail',
        'Full exterior detail',
        'One step machine polish',
        'Marine grade wax or sealant',
        'Perfect for moderate oxidation and noticeable gloss restoration',
      ],
      isReversed: true
    },
    {
      title: 'Platinum Plan',
      price: '100',
      priceSuffix: '/FT',
      image: '/themobiledetailingco.com/wp-content/uploads/2026/02/pexels-pixabay-163236.jpg',
      features: [
        'Includes everything in the Gold Plan, plus:',
        'Professional gelcoat correction',
        'Oxidation and 2-year ceramic coating',
        'Protection applied to all exterior surfaces',
        'Long-term UV and oxidation defense',
        'The best for boat owners who want maximum shine and long term protection',
      ],
      isReversed: false
    },
    {
      title: 'Jet Ski Detailing',
      price: '225',
      image: '/themobiledetailingco.com/wp-content/uploads/2026/02/pexels-anton-kudryashov-118639843-10931934.jpg',
      features: [
        'Full exterior wash',
        'Protective sealant',
        'Surface wipe down',
        'Ceramic coating for jet skis available upon request',
      ],
      isReversed: true
    }
  ];

  return (
    <div className="auto-detailing-page">
      {/* Hero Section */}
      <section className="auto-hero boat-hero" style={{ backgroundImage: 'url("/themobiledetailingco.com/wp-content/uploads/2026/02/pexels-huy-phan-316220-28602933.jpg")' }}>
        <div className="auto-hero-overlay" />
        <div className="auto-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Boat Detailing
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Lake Winnipesaukee & Lakes Region, NH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dylan's Mobile Detailing provides high-end boat detailing services throughout Lake Winnipesaukee and the greater Lakes Region of New Hampshire. We specialize in oxidation removal, gelcoat restoration, gelcoat correction, and long-term ceramic protection care for harsh New England conditions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether your boat is docked in Wolfeboro, at a slip in Meredith, or filed in Moultonborough, our team delivers professional marine detailing designed to restore and protect your investment.
          </motion.p>
          <motion.div 
            className="auto-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                {pkg.priceSuffix && <span className="price-suffix">{pkg.priceSuffix}</span>}
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

      {/* Add-Ons Section */}
      <section className="boat-addons-section">
        <div className="addons-container">
          <h2 className="addons-title">Add-Ons & Disclaimers</h2>
          
          <div className="addons-content">
            <div className="disclaimer-item">
              <p className="highlight-red">Bottom washing not included!</p>
              <p>Bottom washing is available for an additional $15 per foot.</p>
            </div>

            <div className="disclaimer-item">
              <p className="highlight-red">Additional Correction Steps:</p>
              <p>Gold and Platinum packages include one-step correction.</p>
              <p>Each additional step of machine correction beyond the first is $10 per foot, depending on oxidation severity.</p>
            </div>

            <div className="disclaimer-item">
              <p>Heavily oxidized vessels may require multi-step correction to achieve optimal results. All boats are assessed prior to service to determine final pricing.</p>
            </div>

            <div className="addons-service-areas">
              <p>We provide boat detailing in:</p>
              <div className="areas-grid">
                <div className="area-item">✔ Moultonborough</div>
                <div className="area-item">✔ Laconia</div>
                <div className="area-item">✔ Lakes Region</div>
                <div className="area-item">✔ Gilford</div>
                <div className="area-item">✔ Center Harbor</div>
                <div className="area-item">✔ Alton</div>
                <div className="area-item">✔ Wolfeboro</div>
                <div className="area-item">✔ Lake Winnipesaukee region</div>
                <div className="area-item">✔ Meredith</div>
                <div className="area-item">✔ Mobile service available where marina policies allow.*</div>
              </div>
              <p className="disclaimer-note">*Mobile service available where marina policies allow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoatDetailing;
