import type { FC } from 'react';
import ContactActionsSection from '../components/ContactActionsSection';
import HeroSection from '../components/HeroSection';
import ServicesPackagesSection from '../components/ServicesPackagesSection';

const Services: FC = () => {
  return (
    <main>
      <HeroSection
        title="Professional Detailing Services"
        subtitle="Comprehensive care for your vehicles and boats in the Lakes Region"
        secondaryHref="tel:6039986080"
        secondaryLabel="Call Now"
        scrollTargetId="services-packages"
      />
      <ServicesPackagesSection />
      <ContactActionsSection
        title="Book By Phone Or Email"
        description="To order a detailing service, contact us directly and we will help you choose the right package and schedule your appointment."
      />
    </main>
  );
};

export default Services;
