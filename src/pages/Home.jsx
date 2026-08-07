import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PlaceholderMedia from '../components/PlaceholderMedia';
import ExpertiseGrid from '../components/ExpertiseGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import WorkCarousel from '../components/WorkCarousel';
import useInView from '../hooks/useInView';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { homeHero } from '../data/siteContent';
import { expertisePage } from '../data/expertise';
import { projectBySlug } from '../data/projects';
import { workThumbnailBySlug } from '../data/workMedia';
import { testimonials } from '../data/testimonials';
import './Home.css';

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroRef, heroVisible] = useInView({ threshold: 0.2, once: false });
  const [expertiseRef, expertiseVisible] = useInView({ threshold: 0.18 });
  const [worksRef, worksVisible] = useInView({ threshold: 0.18 });
  const [contactRef, contactVisible] = useInView({ threshold: 0.18 });
  const [featuredRef, featuredVisible] = useInView({ threshold: 0.18 });
  const [testimonialsRef, testimonialsVisible] = useInView({ threshold: 0.18 });

  const [heroReady, setHeroReady] = useState(false);
  const featuredProjects = ['mercury', 'sentry', 'araknid'].map((slug) => projectBySlug[slug]);
  const heroMotionReady = prefersReducedMotion || heroReady;
  const expertiseMotionVisible = prefersReducedMotion || expertiseVisible;
  const worksMotionVisible = prefersReducedMotion || worksVisible;
  const testimonialsMotionVisible = prefersReducedMotion || testimonialsVisible;
  const featuredMotionVisible = prefersReducedMotion || featuredVisible;
  const contactMotionVisible = prefersReducedMotion || contactVisible;

  useEffect(() => {
    if (!heroVisible) return undefined;

    if (prefersReducedMotion) {
      setHeroReady(true);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setHeroReady(true), 1300);
    return () => window.clearTimeout(timeoutId);
  }, [heroVisible, prefersReducedMotion]);

  return (
    <div className="site-app home-page">
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main home-page__main">

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className={`section-block hero-section${heroMotionReady ? ' is-visible' : ''}`} ref={heroRef}>
          <div className="section-inner hero-section__grid">
            <div className="hero-section__eyebrow">
              <span>{homeHero.eyebrowLeft}</span>
              <span className="hero-eyebrow-icon" aria-hidden="true">⊕</span>
              <span>{homeHero.eyebrowRight}</span>
            </div>

            <h1 className="hero-section__title">
              <span className="hero-section__title-solid">{homeHero.titleMain}</span>
              <span className="hero-section__title-row2">
                {homeHero.titleLine2 ? <span className="hero-section__title-solid">{homeHero.titleLine2} </span> : null}
                <span className="hero-section__title-accent">{homeHero.titleAccent}</span>
              </span>
            </h1>

            <p className="hero-section__bio">{homeHero.bio}</p>

            <div className="hero-section__actions">
              <Link to="/portfolio" className="badge-button hero-section__cta">
                {homeHero.primaryCta}
                <span aria-hidden="true" className="hero-cta-icon">✦</span>
              </Link>
            </div>
          </div>

          {/* decorative corner bento cells */}
          <div className="hero-section__deco-br" aria-hidden="true">
            <div className="hero-deco-cell hero-deco-cell--grid">⊞</div>
            <div className="hero-deco-cell hero-deco-cell--asterisk">✳</div>
          </div>
        </section>

        {/* ── EXPERTISE PREVIEW ──────────────────────────────────────── */}
        <section className={`section-block home-section-reveal${expertiseMotionVisible ? ' is-visible' : ''}`} ref={expertiseRef}>
          <div className="section-inner home-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Creative ✳ Expertise</p>
                <h2 className="section-title">Expertise</h2>
              </div>
              <Link to="/expertise" className="badge-button">
                View services <span aria-hidden="true">✦</span>
              </Link>
            </div>

            <ExpertiseGrid
              services={expertisePage.services.slice(0, 4)}
              tabs={expertisePage.tabs}
              isVisible={expertiseMotionVisible}
              reducedMotion={prefersReducedMotion}
            />
          </div>
        </section>

        {/* ── WORKS PREVIEW ──────────────────────────────────────────── */}
        <section className={`section-block home-section-reveal${worksMotionVisible ? ' is-visible' : ''}`} ref={worksRef}>
          <div className="section-inner home-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">PROJECT ✳ SHOWCASE</p>
                <h2 className="section-title">Works</h2>
              </div>
              <Link to="/portfolio" className="badge-button">
                View our work <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="home-card-grid home-card-grid--works">
              {featuredProjects.map((project) => (
                <Link key={project.slug} to={`/portfolio/${project.slug}`} className="work-preview-card">
                  <PlaceholderMedia
                    title={project.title}
                    subtitle={project.summary}
                    label={project.tags.join(' · ')}
                    toneA={project.toneA}
                    toneB={project.toneB}
                    imageSrc={workThumbnailBySlug[project.slug]}
                    imageAlt={`${project.title} thumbnail`}
                    showContent={false}
                  />
                  <div className="work-preview-card__meta">
                    <div className="work-preview-card__title-row">
                      <h3>{project.title}</h3>
                    </div>
                    <div className="work-preview-card__chips">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip-button work-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
        <section className={`section-block home-section-reveal${testimonialsMotionVisible ? ' is-visible' : ''}`} ref={testimonialsRef}>
          <div className="section-inner home-section">
            <div className="section-heading testimonials-heading">
              <div className="testimonials-heading__left">
                <p className="eyebrow">FIVE STAR ✳✳✳✳✳ REVIEWS</p>
                <h2 className="section-title testimonials-title">TESTIMONIALS</h2>
                <p className="testimonials-subtitle">Hear from the people I've helped along the way</p>
              </div>
            </div>

            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        {/* ── WORK CAROUSEL ──────────────────────────────────────────── */}
        <section className={`section-block section-block--flush home-section-reveal${featuredMotionVisible ? ' is-visible' : ''}`} ref={featuredRef}>
          <div className="section-inner section-inner--flush">
            <WorkCarousel />
          </div>
        </section>

        {/* ── CONTACT TEASER ─────────────────────────────────────────── */}
        <section className={`section-block home-section-reveal${contactMotionVisible ? ' is-visible' : ''}`} ref={contactRef}>
          <div className="home-contact-teaser">
            {/* left accent panel */}
            <div className="home-contact-teaser__left" aria-hidden="true">
              <div className="home-contact-teaser__bubble">✉</div>
              <div className="home-contact-teaser__asterisk">✳</div>
            </div>

            {/* main content */}
            <div className="home-contact-teaser__body">
              <div className="home-contact-teaser__icon">✉</div>
              <h2 className="home-contact-teaser__title">
                <span className="home-contact-teaser__solid">GET IN </span>
                <span className="home-contact-teaser__outline">TOUCH</span>
                <br />
                <span className="home-contact-teaser__solid">WITH ME.</span>
              </h2>
              <p className="home-contact-teaser__copy">
                Let's create something meaningful together.<br />
                I'd love to hear about your ideas and projects.
              </p>
              <Link to="/contact" className="badge-button home-contact-teaser__cta">
                GO TO CONTACT PAGE <span aria-hidden="true">→</span>
              </Link>

              {/* decorative dot grid */}
              <div className="home-contact-teaser__dots" aria-hidden="true" />
              <div className="home-contact-teaser__cross" aria-hidden="true">+</div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  </div>
);
}
