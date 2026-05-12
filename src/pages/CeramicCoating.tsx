import type { FC } from 'react';
import HeroSection from '../components/HeroSection';
import ContactActionsSection from '../components/ContactActionsSection';
import './AutoDetailing.css'; // Reusing base styles

const CeramicCoating: FC = () => {
  const processSteps = [
    {
      title: '1. Surface Preparation',
      description: 'We start by washing and decontaminating your vehicle to remove any surface impurities. This step is essential for ensuring that the coating adheres seamlessly and effectively shields the paint.'
    },
    {
      title: '2. Paint Correction',
      description: 'Using professional-grade polishing tools, we correct imperfections like light scratches and swirl marks. This process creates a smooth, flawless base, allowing the ceramic coating to highlight the paint\'s depth and gloss.'
    },
    {
      title: '3. Application',
      description: 'The ceramic coating is applied in controlled sections, using precise tools to ensure an even and thorough coating. This careful approach locks in the vehicle\'s shine and ensures an even layer of protection across all surfaces.'
    },
    {
      title: '4. Curing',
      description: 'After application, the coating needs time to bond with the paint. This curing stage is crucial for strengthening the protective barrier, enhancing the durability and longevity of the coating.'
    },
    {
      title: '5. Final Inspection',
      description: 'We inspect every part of the vehicle to ensure the coating is applied evenly and that the finish is smooth, glossy, and ready to endure the elements.'
    }
  ];

  return (
    <div className="ceramic-coating-page">
      <HeroSection
        title="Ceramic Coating"
        subtitle="Our top-quality ceramic coatings are designed to enhance and protect your vehicle's finish, providing a durable shield against UV rays, bird droppings, tree sap, and more. Enjoy a deep, lasting gloss and a finish that's easy to maintain, with a single wash restoring that showroom shine."
        videoId="rzrXc_d1GrM"
        primaryHref="/contact"
        primaryLabel="BOOK ONLINE"
        secondaryHref="tel:8566526126"
        secondaryLabel="CALL NOW"
        scrollTargetId="why-choose"
      />

      {/* Why Choose Section */}
      <section id="why-choose" className="boat-addons-section">
        <div className="addons-container">
          <div style={{ border: '2px solid #ff0000', padding: '40px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
            <h2 className="addons-title" style={{ marginBottom: '30px', color: '#fff' }}>Why Choose Our Ceramic Coatings?</h2>
            <ul className="package-features-grid">
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Unmatched Protection:</strong> Our ceramic coatings offer a resilient barrier, preserving your paint from environmental damage.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Superior Gloss:</strong> Achieve a high-gloss finish that keeps your vehicle looking like new.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Ease of Maintenance:</strong> No more frequent waxing—ceramic coatings make it easy to keep your car clean.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Professional Application:</strong> Our skilled team ensures a flawless application for maximum protection and durability.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="boat-addons-section" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="addons-container">
          <h2 className="addons-title">Our Ceramic Coating Process</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
            Our five-step process ensures that each vehicle receives a comprehensive and durable ceramic coating, enhancing both protection and aesthetic appeal.
          </p>
          
          <div className="addons-content">
            {processSteps.map((step) => (
              <div key={step.title} className="disclaimer-item">
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '10px' }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <a href="tel:8566526126" className="package-cta-btn">
              Call Now For a Free Quote
            </a>
          </div>
        </div>
      </section>

      <ContactActionsSection 
        title="Ready for the ultimate protection?"
        description="Contact us today to schedule your ceramic coating appointment and give your vehicle the shine it deserves."
      />
    </div>
  );
};

export default CeramicCoating;
