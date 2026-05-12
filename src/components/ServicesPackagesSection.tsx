import type { FC } from 'react';
import { motion } from 'framer-motion';
import './ServicesPackagesSection.css';

type ServicesPackagesSectionProps = Record<string, never>;

type ServicePackage = {
  title: string;
  description: string;
  price: string;
  features: string[];
  theme: 'light' | 'dark-red';
  badge?: string;
};

const packages: ServicePackage[] = [
  {
    title: 'Interior Refresh',
    description: 'Focus on interior details like seat and carpet cleaning, dashboard dusting, and upholstery treatment.',
    price: '199',
    features: [
      'Vaccume & Wipe Down',
      'Carpet & Upholstry Shampoo',
      'Leather Conditioning',
      'Stain Removal'
    ],
    theme: 'light'
  },
  {
    title: 'Total Transformation',
    description: 'Full inside-and-out detail including everything from both packages with additional perks.',
    price: '299',
    features: [
      'Inside and Out Detailing',
      'Wash & Wax',
      'Interior Shampoo',
      'Wheels & Tires Cleaned'
    ],
    theme: 'dark-red',
    badge: 'Save $100'
  },
  {
    title: 'Exterior Glow',
    description: 'A high-gloss exterior detail featuring wash, wax, tire shine, and polish for a lasting shine.',
    price: '199',
    features: [
      'Hand Wash & Foam Bath',
      'Wheels & Tires Cleaned',
      'Protective Wax or Sealant',
      'Bug & Tar Removal'
    ],
    theme: 'light'
  }
];

const ServicesPackagesSection: FC<ServicesPackagesSectionProps> = () => {
  return (
    <section id="services-packages" className="packages-section-new">
      <div className="packages-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="packages-main-title"
        >
          Our Detailing Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="packages-main-subtitle"
        >
          Our mobile detailing packages are tailored to fit every need, from a quick refresh to a full, transformative detail. Choose from our Interior Refresh, Exterior Glow, or Total Transformation packages to enjoy a pristine, showroom-quality finish, inside and out.
        </motion.p>

        <div className="packages-list">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`package-row-card ${pkg.theme === 'dark-red' ? 'theme-red' : 'theme-light'}`}
            >
              <div className="package-info-col">
                <h3 className="package-row-title">{pkg.title}</h3>
                <p className="package-row-desc">{pkg.description}</p>
                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
              </div>

              <div className="package-price-col">
                <span className="price-from">From</span>
                <span className="price-amount">${pkg.price}</span>
              </div>

              <div className="package-features-col">
                <ul className="package-features-list">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="package-feature-item">
                      <span className="feature-arrow">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="package-cta-col">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/auto-detailing"
                  className="package-row-cta"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPackagesSection;
