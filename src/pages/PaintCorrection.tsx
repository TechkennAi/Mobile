import type { FC } from 'react';
import HeroSection from '../components/HeroSection';
import ContactActionsSection from '../components/ContactActionsSection';
import './AutoDetailing.css'; // Reusing base styles

const PaintCorrection: FC = () => {
  const processSteps = [
    {
      title: '1. Vehicle Prep and Clean',
      description: 'We start by thoroughly washing and decontaminating your vehicle to remove dust, dirt, and road grime. This step is crucial to ensure the paint surface is clean and smooth before correction. We also dry the vehicle meticulously to avoid any moisture that could impact the paint correction process.'
    },
    {
      title: '2. Paint Assessment and Correction',
      description: 'Our team closely examines the paint for any scratches, swirls, or imperfections. We then use professional-grade tools for paint correction, polishing the surface to remove these flaws. This step not only enhances the vehicle\'s appearance but also prepares the paint for a flawless finish after correction.'
    },
    {
      title: '3. Selection of Correction Compounds',
      description: 'We choose the appropriate compounds and pads based on the condition of your vehicle\'s paint. This involves selecting from various abrasives to match the severity of the imperfections, ensuring we use the least aggressive method necessary to achieve a perfect finish. Custom-tailoring this step provides optimal correction with minimal paint removal.'
    },
    {
      title: '4. Detailing and Polishing',
      description: 'Our skilled technicians apply the chosen compounds with precision, using machine polishers to correct the paint surface. They work systematically, often in multiple stages, starting from heavy correction to fine polishing to ensure no swirl marks or holograms are left behind. This detailed process results in a smooth, glossy finish.'
    },
    {
      title: '5. Final Inspection and Quality Check',
      description: 'After the correction process, we perform a comprehensive inspection, checking for any residual defects or areas that might need additional attention. This final step ensures that the paint has been corrected to the highest standard, providing a pristine, high-gloss finish. Once this inspection is complete, your vehicle is ready to showcase its restored beauty on the road.'
    }
  ];

  return (
    <div className="paint-correction-page">
      <HeroSection
        title="Paint Correction"
        subtitle="Our high-quality Paint Correction service provides a meticulous restoration that keeps your vehicle looking pristine. Designed to remove rock chips, scratches, and other blemishes, this thorough process is custom-tailored for each vehicle. With a glossy, seamless finish, Paint Correction enhances your car's appearance while offering unmatched rejuvenation, allowing you to drive confidently knowing your paint is restored from everyday wear and tear."
        videoId="rzrXc_d1GrM"
        primaryHref="/contact"
        primaryLabel="BOOK ONLINE"
        secondaryHref="tel:6039986080"
        secondaryLabel="CALL NOW"
        scrollTargetId="why-choose"
      />

      {/* Why Choose Section */}
      <section id="why-choose" className="boat-addons-section">
        <div className="addons-container">
          <div style={{ border: '2px solid #ff0000', padding: '40px', borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
            <h2 className="addons-title" style={{ marginBottom: '30px', color: '#fff' }}>Why Choose Our Paint Correction Services?</h2>
            <ul className="package-features-grid">
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Exceptional Restoration:</strong> Our Paint Correction service provides long-lasting rejuvenation, addressing scratches, chips, and environmental damage, helping to restore your vehicle's original paint.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Seamless Appearance:</strong> Paint Correction is performed with precision, ensuring a clear, glossy finish that enhances your car's appearance, restoring it to its original look.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Scratch Removal:</strong> The correction process involves removing minor scratches from the paint surface, significantly improving your car's appearance without needing self-healing technology.</p>
              </li>
              <li className="feature-item" style={{ color: '#fff' }}>
                <span className="check-icon">✔</span>
                <p><strong style={{ color: '#ff0000' }}>Easy Maintenance:</strong> Paint Correction enhances your car's finish, making it easier to clean by smoothing out the surface, which repels dust and dirt more effectively.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="boat-addons-section" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="addons-container">
          <h2 className="addons-title">Our Paint Correction Process</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
            Our 5-step Paint Correction process starts with thorough vehicle cleaning, followed by a detailed paint assessment to identify imperfections. We then select and apply specific correction compounds, polish to remove defects, and conclude with a meticulous inspection to ensure a flawless, high-gloss finish.
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
            <a href="tel:6039986080" className="package-cta-btn">
              Call Now For a Free Quote
            </a>
          </div>
        </div>
      </section>

      <ContactActionsSection 
        title="Ready to restore your vehicle's shine?"
        description="Contact us today to schedule your paint correction appointment and give your vehicle the professional care it deserves."
      />
    </div>
  );
};

export default PaintCorrection;
