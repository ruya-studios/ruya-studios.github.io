import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PlaceholderMedia from '../components/PlaceholderMedia';
import { portfolioTags, projects } from '../data/projects';
import { carouselCardBySlug } from '../data/workMedia';
import './Portfolio.css';

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState('All');
  const [activeProjectSlug, setActiveProjectSlug] = useState('mercury');

  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') return projects;
    return projects.filter((project) => project.filters.includes(activeTag));
  }, [activeTag]);

  const activeProject =
    filteredProjects.find((p) => p.slug === activeProjectSlug) ?? filteredProjects[0];

  return (
    <div className="site-app portfolio-page">
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main portfolio-page__main">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="section-block">
          <div className="section-inner portfolio-hero">
            <p className="eyebrow">PROJECT ✳ SHOWCASE</p>
            <h1 className="section-title">OUR WORK</h1>
            <p className="section-copy">
              A selection of systems, tools, and learning experiences built to be useful in the real world.
            </p>
          </div>
        </section>

        {/* ── FILTER + LIST + PREVIEW ──────────────────────────────── */}
        <section className="section-block">
          {/* filter bar */}
          <div className="section-inner portfolio-filterbar">
            <button
              type="button"
              className={`tab-button${activeTag === 'All' ? ' tab-button--active' : ''}`}
              onClick={() => setActiveTag('All')}
            >
              All
            </button>
            {portfolioTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tab-button${activeTag === tag ? ' tab-button--active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* split layout */}
          <div className="portfolio-layout">
            {/* left: project list */}
            <div className="portfolio-list" aria-label="Project list">
              {filteredProjects.map((project) => {
                const active = project.slug === activeProject.slug;
                return (
                  <button
                    key={project.slug}
                    type="button"
                    className={`portfolio-list__item${active ? ' portfolio-list__item--active' : ''}`}
                    onMouseEnter={() => setActiveProjectSlug(project.slug)}
                    onFocus={() => setActiveProjectSlug(project.slug)}
                    onClick={() => setActiveProjectSlug(project.slug)}
                  >
                    {project.title}
                  </button>
                );
              })}
            </div>

            {/* right: preview */}
            <div className="portfolio-preview">
              <div className="portfolio-preview__image">
                <PlaceholderMedia
                  title={activeProject.title}
                  subtitle={activeProject.summary}
                  label={activeProject.tags.join(' · ')}
                  toneA={activeProject.toneA}
                  toneB={activeProject.toneB}
                  imageSrc={carouselCardBySlug[activeProject.slug]}
                  imageAlt={`${activeProject.title} preview`}
                  showContent={false}
                />
              </div>
              <div className="portfolio-preview__meta">
                <p className="portfolio-preview__number">{activeProject.number}</p>
                <h2>{activeProject.title}</h2>
                <div className="portfolio-preview__chips">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="chip-button">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/portfolio/${activeProject.slug}`} className="badge-button badge-button--dark">
                  View our work <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  </div>
);
}
