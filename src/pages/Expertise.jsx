import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PlaceholderMedia from '../components/PlaceholderMedia';
import { expertisePage } from '../data/expertise';
import useInView from '../hooks/useInView';
import './Expertise.css';

export default function Expertise() {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [listRef, listVisible] = useInView({ threshold: 0.15 });
  const [heroRef, heroVisible] = useInView({ threshold: 0.15 });

  return (
    <div className="site-app expertise-page">
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main expertise-page__main">
        <section className={`section-block expertise-section-reveal${heroVisible ? ' is-visible' : ''}`} ref={heroRef}>
          <div className="section-inner expertise-hero">
            <div className="section-heading expertise-hero__heading">
              <div>
                <p className="eyebrow">{expertisePage.eyebrow}</p>
                <h1 className="section-title">{expertisePage.title}</h1>
              </div>
              <p className="section-copy">{expertisePage.subtext}</p>
            </div>

            <div className="expertise-intro">
              <p>{expertisePage.introLeft}</p>
              <p>{expertisePage.introRight}</p>
              <div className="expertise-intro__glyph">◌</div>
            </div>
          </div>
        </section>

        <section className={`section-block expertise-section-reveal${listVisible ? ' is-visible' : ''}`} ref={listRef}>
          <div className="section-inner expertise-list-layout">
            <div className="expertise-list" role="list" aria-label="Services list">
              {expertisePage.services.map((service, index) => {
                const active = index === activeService;

                return (
                  <button
                    key={service.title}
                    type="button"
                    className={`expertise-row${active ? ' expertise-row--active' : ''}`}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    role="listitem"
                    style={{ '--delay': `${Math.abs(index - 2) * 100}ms` }}
                  >
                    <div className="expertise-row__summary">
                      <span className="expertise-row__number">{service.number}</span>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.skills}</p>
                      </div>
                    </div>
                    {active ? (
                      <div className="expertise-row__media">
                        <PlaceholderMedia
                          title={service.label}
                          subtitle={service.description}
                          label="Hover preview"
                          toneA={service.toneA}
                          toneB={service.toneB}
                        />
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <aside className="expertise-aside card">
              <p className="eyebrow">{expertisePage.glance.title}</p>
              <p>{expertisePage.glance.body}</p>
              <a href="/portfolio" className="badge-button badge-button--dark">
                View my work <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </section>

        <section className="section-block">
          <div className="section-inner expertise-tabs">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT ARE YOU LOOKING FOR?</p>
                <h2 className="section-title">Bottom tabs</h2>
              </div>
            </div>

            <div className="expertise-tabs__bar" role="tablist" aria-label="Placeholder service tabs">
              {expertisePage.tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  type="button"
                  className={`tab-button${index === activeTab ? ' tab-button--active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  role="tab"
                  aria-selected={index === activeTab}
                >
                  <span>{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="expertise-tabs__panel card">
              <p className="eyebrow">{expertisePage.tabs[activeTab].name}</p>
              <p>{expertisePage.tabs[activeTab].body}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </div>
);
}
