import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PlaceholderMedia from '../components/PlaceholderMedia';
import { aboutContent } from '../data/siteContent';
import './About.css';

// Mini-card icons matching reference
const miniCardIcons = ['</>', '✏', '📖'];

export default function About() {
  return (
    <div className="site-app about-page">
      <div className="site-shell">
        <SiteHeader brandSuffix=" >_" />
        <main className="site-main about-page__main">

        {/* ── ABOUT HERO ──────────────────────────────────────────────── */}
        <section className="section-block about-hero">
          <div className="section-inner about-hero__grid">
            <p className="about-hero__prompt mono">&gt; initializing about.module...</p>
            <div className="about-hero__eyebrow">
              <span>{aboutContent.heroEyebrow.split(' ✳ ')[0]}</span>
              <span className="about-eyebrow-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="26" height="26" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="4" y="19" fontFamily="monospace" fontSize="12" fill="currentColor">&gt;_</text>
                </svg>
              </span>
              <span>{aboutContent.heroEyebrow.split(' ✳ ')[1]}</span>
            </div>
            <h1 className="about-hero__title">
              <span className="about-hero__title-solid">ABOUT </span>
              <span className="about-hero__title-accent">ME.</span>
            </h1>
            <p className="about-hero__subtext mono">
              &gt;&nbsp;{aboutContent.heroSubtext}<span className="about-cursor" aria-hidden="true">█</span>
            </p>
          </div>
        </section>

        {/* ── WHO I AM ────────────────────────────────────────────────── */}
        <section className="section-block">
          <div className="section-inner about-section">
            <div className="about-section__label mono">&gt; whoami</div>
            <div className="about-section__split">
              <div className="about-section__copy">
                <h2>{aboutContent.whoIAm.heading}</h2>
                <div className="about-section__dash" aria-hidden="true">—</div>
                <p className="mono about-section__body-mono">{aboutContent.whoIAm.body}</p>

                <div className="about-section__cards">
                  {aboutContent.whoIAm.cards.map((item, index) => (
                    <article key={item.title} className="about-mini-card">
                      <span className="about-mini-card__icon">{miniCardIcons[index] ?? '⌁'}</span>
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* portrait with terminal chrome */}
              <div className="about-section__portrait-card">
                <div className="about-terminal-bar mono">
                  <span>user@aftab:~$ portrait.jpg</span>
                  <span className="about-terminal-close">×</span>
                </div>
                <PlaceholderMedia
                  title="Portrait placeholder"
                  subtitle="Replace with Aftab's final black-and-white portrait when ready."
                  label="Terminal framed portrait"
                  toneA="#111111"
                  toneB="#5b5b5b"
                  aspect="portrait"
                />
                <div className="about-terminal-caption mono">
                  <span>capture&gt;</span>
                  <span>📷</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I VALUE ────────────────────────────────────────────── */}
        <section className="section-block">
          <div className="section-inner about-values">
            <div className="about-values__header">
              <p className="mono about-values__label">&gt; what_i_value</p>
              <span className="about-values__deco" aria-hidden="true">+</span>
            </div>
            <div className="about-values__grid">
              {aboutContent.values.map((item) => (
                <article key={item.index} className="value-card">
                  <span className="value-card__index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS & BEYOND ──────────────────────────────────────────── */}
        <section className="section-block">
          <div className="section-inner about-tools">
            <div className="about-tools__column">
              <p className="mono about-tools__label">&gt; tools_i_work_with</p>
              <div className="about-tools__chips">
                {aboutContent.tools.list.map((item) => (
                  <span key={item} className="chip-button">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-tools__divider-icon" aria-hidden="true">✳</div>

            <div className="about-tools__column">
              <p className="mono about-tools__label">&gt; beyond_the_code</p>
              <div className="about-tools__beyond">
                {aboutContent.beyond.icons.map((item, index) => (
                  <div key={item.label} className="about-beyond-card">
                    <span className="about-beyond-card__icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="section-block">
          <div className="section-inner about-cta">
            <div className="about-cta__icon-block">
              <span aria-hidden="true">&gt;_</span>
            </div>
            <div className="about-cta__copy">
              <h2>{aboutContent.cta.heading}</h2>
              <p>{aboutContent.cta.body}</p>
            </div>
            <a href="/contact" className="badge-button about-cta__button">
              {aboutContent.cta.button}
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  </div>
);
}
