import { Link, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PlaceholderMedia from '../components/PlaceholderMedia';
import { projectBySlug, projects } from '../data/projects';
import { carouselCardBySlug } from '../data/workMedia';
import './WorkDetail.css';

export default function WorkDetail() {
  const { projectSlug } = useParams();
  const project = projectBySlug[projectSlug];

  if (!project) {
    return (
      <div className="site-app work-detail-page">
        <div className="site-shell">
          <SiteHeader variant="detail" />
          <main className="site-main">
            <section className="section-block">
              <div className="section-inner">
                <h1 className="section-title">Project not found</h1>
                <Link to="/portfolio" className="badge-button badge-button--dark">
                  Back to portfolio
                </Link>
              </div>
            </section>
          </main>
          <SiteFooter />
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <div className="site-app work-detail-page">
      <div className="site-shell">
        <SiteHeader variant="detail" />
        <main className="site-main work-detail-page__main">
        <section className="section-block">
          <PlaceholderMedia
            title={project.title}
            subtitle={project.summary}
            label="Full-bleed project hero"
            toneA={project.toneA}
            toneB={project.toneB}
            imageSrc={carouselCardBySlug[project.slug]}
            imageAlt={`${project.title} hero`}
            showContent={false}
          />
        </section>

        <section className="section-block">
          <div className="section-inner work-detail-meta">
            <div className="work-detail-meta__chips">
              {project.tags.map((tag) => (
                <span key={tag} className="chip-button">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="section-title">{project.title}</h1>
            <div className="work-detail-meta__copy">
              <p>{project.eyebrow}</p>
              <div>
                <p>{project.longOne}</p>
                <p>{project.longTwo}</p>
              </div>
            </div>
            {project.liveUrl ? (
              <a href={project.liveUrl} className="badge-button badge-button--dark" target="_blank" rel="noreferrer">
                Visit the website <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </section>

        <section className="section-block">
          <div className="section-inner work-gallery">
            <div className="work-gallery__tile work-gallery__tile--wide">
              <PlaceholderMedia
                title={`${project.title} detail A`}
                subtitle="Placeholder gallery tile"
                label="Gallery tile"
                toneA={project.toneA}
                toneB={project.toneB}
                aspect="landscape"
                imageSrc={carouselCardBySlug[project.slug]}
                imageAlt={`${project.title} gallery tile A`}
                showContent={false}
              />
            </div>
            <div className="work-gallery__tile">
              <PlaceholderMedia
                title={`${project.title} detail B`}
                subtitle="Placeholder gallery tile"
                label="Gallery tile"
                toneA={project.toneB}
                toneB={project.toneA}
                aspect="square"
                imageSrc={carouselCardBySlug[project.slug]}
                imageAlt={`${project.title} gallery tile B`}
                showContent={false}
              />
            </div>
            <div className="work-gallery__tile">
              <PlaceholderMedia
                title={`${project.title} detail C`}
                subtitle="Placeholder gallery tile"
                label="Gallery tile"
                toneA={project.toneA}
                toneB="#2d2d2d"
                aspect="square"
                imageSrc={carouselCardBySlug[project.slug]}
                imageAlt={`${project.title} gallery tile C`}
                showContent={false}
              />
            </div>
            <div className="work-gallery__tile work-gallery__tile--wide">
              <PlaceholderMedia
                title={`${project.title} detail D`}
                subtitle="Placeholder gallery tile"
                label="Gallery tile"
                toneA="#0b0b0b"
                toneB={project.toneB}
                aspect="landscape"
                imageSrc={carouselCardBySlug[project.slug]}
                imageAlt={`${project.title} gallery tile D`}
                showContent={false}
              />
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-inner work-related">
            <div className="section-heading">
              <div>
                <p className="eyebrow">RELATED WORK</p>
                <h2 className="section-title">Related projects</h2>
              </div>
            </div>

            <div className="work-related__grid">
              {relatedProjects.map((item) => (
                <Link key={item.slug} to={`/portfolio/${item.slug}`} className="work-related__card card">
                  <PlaceholderMedia title={item.title} subtitle={item.summary} label={item.tags.join(' · ')} toneA={item.toneA} toneB={item.toneB} />
                  <div className="work-related__meta">
                    <h3>{item.title}</h3>
                    <div className="work-related__chips">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="chip-button">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  </div>
);
}
