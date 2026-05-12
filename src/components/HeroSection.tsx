import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type HeroSectionProps = {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref: string;
  secondaryLabel: string;
  scrollTargetId: string;
  videoId?: string;
  title?: string;
  subtitle?: string;
};

const HeroSection: FC<HeroSectionProps> = ({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  scrollTargetId,
  videoId = 'ERje9uIwzGE',
  title = 'Revitalize Your Ride',
  subtitle = 'Lake Winnipesaukee & Lakes Region, NH'
}) => {
  const isInternalPrimary = primaryHref && primaryHref.startsWith('/');
  const isInternalSecondary = secondaryHref && secondaryHref.startsWith('/');

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Dylans Mobile Detailing"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minWidth: '177.78vh',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 20px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: 'clamp(32px, 8vw, 72px)',
              color: '#fff',
              marginBottom: '15px',
              fontWeight: 900,
              textTransform: 'none',
              letterSpacing: '-1px'
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 24px)',
              color: '#fff',
              marginBottom: '40px',
              fontWeight: 700,
              maxWidth: '800px',
              marginInline: 'auto'
            }}
          >
            {subtitle}
          </p>
        </motion.div>
        <div className="hero-cta-group">
            {primaryHref && primaryLabel ? (
              isInternalPrimary ? (
                <Link to={primaryHref} className="hero-cta hero-cta-primary">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {primaryLabel}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={primaryHref}
                  className="hero-cta hero-cta-primary"
                >
                  {primaryLabel}
                </motion.a>
              )
            ) : null}

            {isInternalSecondary ? (
              <Link to={secondaryHref} className="hero-cta hero-cta-secondary">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {secondaryLabel}
                </motion.div>
              </Link>
            ) : (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={secondaryHref}
                className="hero-cta hero-cta-secondary"
              >
                {secondaryLabel}
              </motion.a>
            )}
          </div>
      </div>

      <motion.a
        href={`#${scrollTargetId}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '72px',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: '#5f666d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          fontSize: '28px',
          boxShadow: '0 18px 40px rgba(0,0,0,0.18)'
        }}
        aria-label="Scroll to next section"
      >
        <span style={{ lineHeight: 1 }}>+</span>
      </motion.a>

      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: '-1px',
          width: '100%',
          height: '110px',
          zIndex: 1,
          display: 'block'
        }}
      >
        <path
          className="hero-tear-desktop"
          fill="#ffffff"
          d="M0,96 L52,88 L104,93 L156,79 L208,86 L260,75 L312,88 L364,70 L416,82 L468,67 L520,80 L572,62 L624,74 L676,59 L728,71 L780,55 L832,67 L884,53 L936,64 L988,50 L1040,62 L1092,48 L1144,58 L1196,46 L1248,55 L1300,44 L1352,52 L1404,41 L1440,45 L1440,140 L0,140 Z"
        />
        <path
          className="hero-tear-mobile"
          fill="#ffffff"
          d="M0,92 L72,88 L144,94 L216,87 L288,95 L360,88 L432,94 L504,87 L576,95 L648,88 L720,94 L792,87 L864,95 L936,88 L1008,94 L1080,87 L1152,95 L1224,88 L1296,94 L1368,89 L1440,92 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
