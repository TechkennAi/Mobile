import type { FC } from 'react';
import ContactActionsSection from '../components/ContactActionsSection';
import {
  facebookIconPath,
  googleIconPath,
  instagramIconPath,
  nextdoorIconPath
} from '../components/BrandingIcons';
import './contact.css';

const socialPlatforms = [
  { label: 'facebook', iconSrc: facebookIconPath, alt: 'Facebook' },
  { label: 'Instagram', iconSrc: instagramIconPath, alt: 'Instagram' },
  { label: 'Google', iconSrc: googleIconPath, alt: 'Google' },
  { label: 'nextdoor', iconSrc: nextdoorIconPath, alt: 'Nextdoor' }
];

const Contact: FC = () => {
  return (
    <main className="contact-page">
      <section className="contact-page-header">
        <h1 className="contact-page-title">Contact Us</h1>
        <p className="contact-page-copy">
          The best way to book detailing or ask a question is to call or email us directly.
        </p>
      </section>

      <ContactActionsSection
        title="Ready To Book?"
        description="If you would like to schedule a detail, request pricing, or ask about availability, please reach out by phone or email."
      />

      <section className="contact-social-strip" aria-label="Social platforms">
        {socialPlatforms.map((social) => (
          <div key={social.label} className="contact-social-item">
            <img src={social.iconSrc} alt={social.alt} className="contact-social-logo" />
            <span className="contact-social-label">{social.label}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Contact;
