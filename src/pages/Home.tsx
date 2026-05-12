import { useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import ServicesPackagesSection from "../components/ServicesPackagesSection";
import {
  facebookIconPath,
  googleIconPath,
  instagramIconPath,
  nextdoorIconPath,
} from "../components/BrandingIcons";
import "./home.css";

// Import images
import gal1 from "../assets/images/gal-1.jpg";
import gal2 from "../assets/images/gal2.jpg";
import gal3 from "../assets/images/gal3.jpg";
import gal4 from "../assets/images/gal4.jpg";
import gal5 from "../assets/images/gal5.jpg";
import services3 from "../assets/images/services-3.jpg";
import services2 from "../assets/images/services-2.jpg";
import interior1 from "../assets/images/interior-1000x1000-v1.jpg";

type CarouselImage = {
  src: string;
  alt: string;
};

const MotionLink = motion(Link);

const Home: FC = () => {
  const navigate = useNavigate();
  const carouselImages: CarouselImage[] = [
    {
      src: gal1,
      alt: "Freshly washed white SUV",
    },
    {
      src: gal2,
      alt: "Clean white vehicle after detailing",
    },
    {
      src: gal3,
      alt: "Washed car with glossy finish",
    },
    {
      src: gal4,
      alt: "Detailed vehicle exterior",
    },
    {
      src: gal5,
      alt: "Detailed exterior of a clean car",
    },
    {
      src: services3,
      alt: "Glossy clean vehicle exterior",
    },
  ];

  const socialPlatforms = [
    { label: "facebook", iconSrc: facebookIconPath, alt: "Facebook" },
    { label: "Instagram", iconSrc: instagramIconPath, alt: "Instagram" },
    { label: "Google", iconSrc: googleIconPath, alt: "Google" },
    { label: "nextdoor", iconSrc: nextdoorIconPath, alt: "Nextdoor" },
  ];

  const detailShowcase = [
    {
      title: "Auto Detailing",
      src: services2,
      alt: "Exterior of a clean vehicle",
      objectPosition: "center center",
      href: "/auto-detailing",
    },
    {
      title: "Interior Reset",
      src: interior1,
      alt: "Cleaned vehicle interior",
      objectPosition: "center center",
      href: "/auto-detailing",
    },
    {
      title: "Paint Correction",
      src: services3,
      alt: "Detailed car paint correction",
      objectPosition: "center center",
      href: "/paint-correction",
    },
  ];

  const testimonials = [
    {
      reviewerName: "nancy wrath",
      reviewerMeta: "1 year ago",
      initial: "n",
      avatarSrc: "",
      avatarColor: "#7986cb",
      quote:
        "I highly recommend Dylan's Mobile Detailing services. My vehicle was quite disastrous due to a large shedding dog. They were...",
    },
    {
      reviewerName: "Jamie Stalnaker",
      reviewerMeta: "1 year ago",
      initial: "J",
      avatarSrc: "",
      avatarColor: "#388e3c",
      quote:
        "Myles and his crew did an outstanding job. They got the scratches as well as the water spots out. Interior and exterior is...",
    },
    {
      reviewerName: "MrCbassett",
      reviewerMeta: "1 year ago",
      initial: "M",
      avatarSrc: gal1,
      avatarColor: "#f44336",
      quote:
        "What an outstanding job they did with my truck . It is 10 years old and it look absolutely beautiful. Thank you for all you hard work an...",
    },
  ];

  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentImageSlide(
        (previous) => (previous + 1) % carouselImages.length,
      );
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [carouselImages.length]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentReviewSlide((previous) => (previous + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <main>
      <HeroSection
        primaryHref="/auto-detailing"
        primaryLabel="View Our Services"
        secondaryHref="tel:8566526126"
        secondaryLabel="CALL NOW"
        scrollTargetId="post-hero-sections"
        subtitle="Moorestown, NJ & Surrounding Areas"
      />

      <div id="post-hero-sections" className="post-hero-sections">
        <section id="detailing-showcase" className="detail-showcase-section">
          {detailShowcase.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="showcase-card"
              onClick={() => navigate(item.href)}
            >
              <div className="showcase-card-inner">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="showcase-image"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="showcase-overlay" />
                <div className="showcase-content">
                  <span className="showcase-title">{item.title}</span>
                  <MotionLink 
                    to={item.href} 
                    className="showcase-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </MotionLink>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <ServicesPackagesSection />
      </div>

      <section style={{ padding: "0" }}>
        <div className="full-bleed-carousel">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}
            >
              {carouselImages.map((image) => (
                <article
                  key={image.src}
                  className="carousel-slide car-wash-carousel-card"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="car-wash-carousel-image"
                  />
                </article>
              ))}
            </div>
          </div>
          <div
            className="carousel-dot-row image-carousel-dot-row"
            aria-label="Clean vehicle carousel pagination"
          >
            {carouselImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`carousel-dot${index === currentImageSlide ? " active" : ""}`}
                aria-label={`Go to clean vehicle slide ${index + 1}`}
                onClick={() => setCurrentImageSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Social */}
      <section className="reviews-social-section">
        <div className="reviews-social-inner">
          <div className="reviews-layout-grid">
            <div className="reviews-summary-col">
              <span className="reviews-summary-heading">EXCELLENT</span>
              <div
                className="reviews-summary-stars"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={`summary-star-${index}`} />
                ))}
              </div>
              <span className="reviews-summary-subtext">
                Based on 25 reviews
              </span>
              <div
                className="reviews-summary-google"
                aria-label="Google reviews"
              >
                <span className="google-wordmark google-wordmark-blue">G</span>
                <span className="google-wordmark google-wordmark-red">o</span>
                <span className="google-wordmark google-wordmark-yellow">
                  o
                </span>
                <span className="google-wordmark google-wordmark-blue">g</span>
                <span className="google-wordmark google-wordmark-green">l</span>
                <span className="google-wordmark google-wordmark-red">e</span>
              </div>
            </div>

            <div className="reviews-cards-col">
              <div className="reviews-carousel-shell">
                <div className="carousel-viewport reviews-carousel-viewport">
                  <div
                    className="carousel-track"
                    style={{
                      transform: `translateX(-${currentReviewSlide * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial) => (
                      <article
                        key={`${testimonial.reviewerName}-${testimonial.reviewerMeta}`}
                        className="carousel-slide review-carousel-slide"
                      >
                        <div className="review-slide-card">
                          <div className="review-card-header">
                            <div className="review-reviewer-block">
                              <div
                                className="review-avatar"
                                style={
                                  testimonial.avatarSrc
                                    ? undefined
                                    : {
                                        backgroundColor:
                                          testimonial.avatarColor,
                                      }
                                }
                              >
                                {testimonial.avatarSrc ? (
                                  <img
                                    src={testimonial.avatarSrc}
                                    alt={testimonial.reviewerName}
                                    className="review-avatar-image"
                                  />
                                ) : (
                                  testimonial.initial
                                )}
                              </div>
                              <div>
                                <p className="reviewer-name">
                                  {testimonial.reviewerName}
                                </p>
                                <div className="reviewer-meta-stack">
                                  <p className="reviewer-meta">
                                    {testimonial.reviewerMeta}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="review-platform-badge"
                              aria-label="Google review"
                            >
                              <FcGoogle className="review-platform-icon" />
                            </div>
                          </div>
                          <div className="review-rating-row">
                            <div
                              className="review-stars"
                              aria-label="5 out of 5 stars"
                            >
                              {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} />
                              ))}
                            </div>
                            <BsPatchCheckFill
                              className="review-checkmark"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="review-quote">{testimonial.quote}</p>
                          <p className="review-read-more">Read more</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div
                  className="carousel-dot-row review-dot-row"
                  aria-label="Review carousel pagination"
                >
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={`${testimonial.reviewerName}-${testimonial.reviewerMeta}`}
                      type="button"
                      className={`carousel-dot${index === currentReviewSlide ? " active" : ""}`}
                      aria-label={`Go to review slide ${index + 1}`}
                      onClick={() => setCurrentReviewSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Image Section */}
      <section style={{ padding: "0", backgroundColor: "#fff" }}>
        <div className="social-links-grid-full">
          {socialPlatforms.map((social, i) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className={`social-link-item social-link-item-${social.label.toLowerCase()}`}
            >
              {social.label !== "facebook" && social.label !== "Google" ? (
                <img
                  src={social.iconSrc}
                  alt={social.alt}
                  className="social-link-logo"
                />
              ) : null}
              <span
                className={`social-link-text${social.label === "Google" ? " social-link-text-google" : ""}`}
              >
                {social.label}
              </span>
            </motion.div>
          ))}
        </div>
        <img
          src={interior1}
          alt="Detailed car interior"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
      </section>
    </main>
  );
};

export default Home;
