import type { FC } from 'react';
import './gallery.css';

// Import images
import totalTransformation1 from '../assets/images/total-transformation-v1.jpg';
import gal2 from '../assets/images/gal2.jpg';
import gal3 from '../assets/images/gal3.jpg';
import interior1 from '../assets/images/interior-1000x1000-v1.jpg';
import gal4 from '../assets/images/gal4.jpg';
import exteriorGlow1 from '../assets/images/exterior-glow-v1.jpg';
import services3 from '../assets/images/services-3.jpg';
import exteriorGlow2 from '../assets/images/exterior-glow-2.jpg';
import gal5 from '../assets/images/gal5.jpg';
import corvette1 from '../assets/images/tmd-corvette-1.png';
import services1 from '../assets/images/services-1.jpg';
import gal1 from '../assets/images/gal-1.jpg';

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: totalTransformation1,
    alt: 'Black sports car with glossy finish',
    className: 'gallery-item-tall'
  },
  {
    src: gal2,
    alt: 'White truck after detailing'
  },
  {
    src: gal3,
    alt: 'Black pickup truck exterior detail'
  },
  {
    src: interior1,
    alt: 'Detailed truck interior',
    className: 'gallery-item-tall'
  },
  {
    src: gal4,
    alt: 'Detailed RV exterior',
    className: 'gallery-item-tall'
  },
  {
    src: exteriorGlow1,
    alt: 'Light blue SUV after wash'
  },
  {
    src: services3,
    alt: 'Red boat detailing'
  },
  {
    src: exteriorGlow2,
    alt: 'Blue SUV closeup'
  },
  {
    src: gal5,
    alt: 'White SUV exterior shine'
  },
  {
    src: corvette1,
    alt: 'Red corvette after detail',
    className: 'gallery-item-wide'
  },
  {
    src: services1,
    alt: 'Blue truck detailing'
  },
  {
    src: gal1,
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
