import type { FC } from 'react';
import './gallery.css';

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/11/total-transformation-v1.jpg',
    alt: 'Black sports car with glossy finish',
    className: 'gallery-item-tall'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/gal2.jpg',
    alt: 'White truck after detailing'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/gal3.jpg',
    alt: 'Black pickup truck exterior detail'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/11/interior-1000x1000-v1.jpg',
    alt: 'Detailed truck interior',
    className: 'gallery-item-tall'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/gal4.jpg',
    alt: 'Detailed RV exterior',
    className: 'gallery-item-tall'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/11/exterior-glow-v1.jpg',
    alt: 'Light blue SUV after wash'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/services-3.jpg',
    alt: 'Red boat detailing'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/11/exterior-glow-2.jpg',
    alt: 'Blue SUV closeup'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/gal5.jpg',
    alt: 'White SUV exterior shine'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/tmd-corvette-1.png',
    alt: 'Red corvette after detail',
    className: 'gallery-item-wide'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/services-1.jpg',
    alt: 'Blue truck detailing'
  },
  {
    src: '/themobiledetailingco.com/wp-content/uploads/2024/10/gal-1.jpg',
    alt: 'Detailed black sports car',
    className: 'gallery-item-wide'
  }
];

const Gallery: FC = () => {
  return (
    <main className="gallery-page">
      <section className="gallery-hero-card">
        <h1 className="gallery-title">Showcase Gallery</h1>
        <p className="gallery-copy">
          Welcome to the showcase gallery for Dylan&apos;s Mobile Detailing. Here, you can explore a
          curated collection of our finest detailing projects, showcasing the transformation and
          care we bring to every vehicle. From spotless sedans to shimmering SUVs, this gallery
          highlights our commitment to excellence and precision in mobile car detailing.
        </p>
        <p className="gallery-copy">
          Browse through these images to witness the quality, passion, and attention to detail that
          define our service. Whether you&apos;re considering a quick clean or a comprehensive
          cosmetic restoration, see what Dylan&apos;s Mobile Detailing can do for your vehicle.
        </p>
        <a href="/services" className="gallery-cta">
          View Our Services
        </a>
      </section>

      <section className="gallery-grid-shell">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure
              key={`${image.src}-${image.alt}`}
              className={`gallery-grid-item${image.className ? ` ${image.className}` : ''}`}
            >
              <img src={image.src} alt={image.alt} className="gallery-grid-image" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
