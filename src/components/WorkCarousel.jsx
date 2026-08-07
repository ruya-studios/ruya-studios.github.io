import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import PlaceholderMedia from './PlaceholderMedia';
import useInView from '../hooks/useInView';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { projects } from '../data/projects';
import { carouselCardBySlug } from '../data/workMedia';
import './WorkCarousel.css';

function padTo(list, length) {
  if (!list.length) return [];

  const output = [...list];
  while (output.length < length) {
    output.push(list[output.length % list.length]);
  }

  return output;
}

function ShowcaseRow({ items, direction, staggerOffset = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const autoScrollPlugin = useMemo(() => {
    if (prefersReducedMotion) return [];

    return [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction,
        stopOnFocusIn: false,
      }),
    ];
  }, [direction, prefersReducedMotion]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
      skipSnaps: true,
      startIndex: Math.floor(items.length / 2),
    },
    autoScrollPlugin,
  );

  return (
    <div className="showcase-row fx-mask embla">
      <div className="showcase-row__viewport" ref={emblaRef}>
        <div className="showcase-row__track">
          {items.map((project, index) => (
            <Link
              key={`${project.slug}-${direction}-${index}`}
              to={`/portfolio/${project.slug}`}
              className="showcase-row__item"
              style={{ animationDelay: `${staggerOffset + index * 50}ms` }}
            >
              <PlaceholderMedia
                title={project.title}
                subtitle={project.summary}
                label={project.number}
                toneA={project.toneA}
                toneB={project.toneB}
                aspect="landscape"
                imageSrc={carouselCardBySlug[project.slug]}
                imageAlt={`${project.title} carousel card`}
                showContent={false}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkCarousel() {
  const [sectionRef, inView] = useInView({ threshold: 0.12 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const rows = useMemo(() => {
    const ordered = projects.slice(0, 6);
    const firstRow = padTo(ordered.slice(0, 3), 6);
    const secondRow = padTo(ordered.slice(3), 6);

    return { firstRow, secondRow };
  }, []);

  if (!inView && !prefersReducedMotion) {
    return (
      <section className="work-carousel-shell" ref={sectionRef} aria-label="Selected work carousel loading">
        <div className="work-carousel-skeleton" aria-hidden="true">
          <div className="work-carousel-skeleton__row">
            {Array.from({ length: 4 }).map((_, index) => <div key={index} className="work-carousel-skeleton__tile" />)}
          </div>
          <div className="work-carousel-skeleton__row">
            {Array.from({ length: 4 }).map((_, index) => <div key={index} className="work-carousel-skeleton__tile" />)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="work-carousel-shell" ref={sectionRef} aria-label="Selected work carousel">
      <ShowcaseRow items={rows.firstRow} direction="backward" staggerOffset={0} />
      <ShowcaseRow items={rows.secondRow} direction="forward" staggerOffset={rows.firstRow.length * 50} />
    </section>
  );
}