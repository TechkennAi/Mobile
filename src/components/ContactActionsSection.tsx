import type { FC } from 'react';
import './ContactActionsSection.css';

type ContactActionsSectionProps = {
  title: string;
  description: string;
  className?: string;
};

const phoneHref = 'tel:5551234567';
const phoneLabel = '(555) 123-4567';
const emailHref = 'mailto:info@example.com';
const emailLabel = 'info@example.com';

const ContactActionsSection: FC<ContactActionsSectionProps> = ({
  title,
  description,
  className = ''
}) => {
  return (
    <section className={`contact-actions-section${className ? ` ${className}` : ''}`}>
      <div className="contact-actions-card">
        <h2 className="contact-actions-title">{title}</h2>
        <p className="contact-actions-description">{description}</p>

        <div className="contact-actions-button-row">
          <a href={phoneHref} className="contact-actions-button">
            Call Us
          </a>
          <a href={emailHref} className="contact-actions-button">
            Email Us
          </a>
        </div>

        <div className="contact-actions-details">
          <p>
            Phone: <a href={phoneHref}>{phoneLabel}</a>
          </p>
          <p>
            Email: <a href={emailHref}>{emailLabel}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactActionsSection;
