import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import './WorkCarousel.css';

const cardImages = [
  { id: '1', src: new URL('../../Carousel Cards/1.png', import.meta.url).href, title: 'Project 1' },
  { id: '2', src: new URL('../../Carousel Cards/2.png', import.meta.url).href, title: 'Project 2' },
  { id: '3', src: new URL('../../Carousel Cards/3.png', import.meta.url).href, title: 'Project 3' },
  { id: '4', src: new URL('../../Carousel Cards/4.png', import.meta.url).href, title: 'Project 4' },
  { id: '5', src: new URL('../../Carousel Cards/5.png', import.meta.url).href, title: 'Project 5' },
  { id: '6', src: new URL('../../Carousel Cards/6.png', import.meta.url).href, title: 'Project 6' },
];

export default function WorkCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Top row: 1.png, 2.png, 3.png, 4.png, 5.png, 6.png
  const topRow = useMemo(() => {
    return [...cardImages, ...cardImages];
  }, []);

  // Bottom row: 2.png, 3.png, 4.png, 5.png, 6.png, 1.png
  const bottomRow = useMemo(() => {
    const reordered = [cardImages[1], cardImages[2], cardImages[3], cardImages[4], cardImages[5], cardImages[0]];
    return [...reordered, ...reordered];
  }, []);

  return (
    <section className="work-carousel-shell" aria-label="Selected work carousel">
      <div className={`work-carousel-row marquee-left${prefersReducedMotion ? ' is-static' : ''}`}>
        <div className="work-carousel-track">
          {topRow.map((card, idx) => (
            <Link key={`top-${card.id}-${idx}`} to="/portfolio" className="work-carousel-card">
              <img src={card.src} alt={`Work card ${card.id}`} loading="eager" />
            </Link>
          ))}
        </div>
      </div>

      <div className={`work-carousel-row marquee-right${prefersReducedMotion ? ' is-static' : ''}`}>
        <div className="work-carousel-track">
          {bottomRow.map((card, idx) => (
            <Link key={`bottom-${card.id}-${idx}`} to="/portfolio" className="work-carousel-card">
              <img src={card.src} alt={`Work card ${card.id}`} loading="eager" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}