import { useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import useInView from '../hooks/useInView';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import './TestimonialSlider.css';

export default function TestimonialSlider({ testimonials }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const autoplay = useRef(
    Autoplay({
      delay: 7500,
      playOnInit: false,
      stopOnInteraction: false,
    }),
  );
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const [selected, setSelected] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      skipSnaps: true,
      align: 'start',
    },
    prefersReducedMotion ? [] : [autoplay.current],
  );

  const slides = useMemo(() => testimonials ?? [], [testimonials]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    if (prefersReducedMotion) return undefined;

    if (inView) {
      autoplay.current.play();
    } else {
      autoplay.current.stop();
    }

    return () => autoplay.current.stop();
  }, [emblaApi, inView, prefersReducedMotion]);

  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section className="testimonial-slider-shell" ref={sectionRef}>
      <div className={`testimonial-slider embla${prefersReducedMotion ? ' is-static' : ''}`}>
        <div className="testimonial-header-bar">
          <button
            className="testimonial-nav-arrow testimonial-nav-arrow--prev"
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!emblaApi?.canScrollPrev()}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="testimonial-header-center">
            <span className="eyebrow">TESTIMONIALS</span>
            <div className="embla-dots" aria-label="Testimonial pagination">
              {slides.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={`embla-dots__dot${selected === index ? ' is-active' : ''}`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-pressed={selected === index}
                />
              ))}
            </div>
          </div>

          <button
            className="testimonial-nav-arrow testimonial-nav-arrow--next"
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!emblaApi?.canScrollNext()}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="testimonial-slider__viewport" ref={emblaRef}>
          <div className="testimonial-slider__container">
            {slides.map((testimonial, index) => (
              <blockquote key={testimonial.name} className={`testimonial-slider__slide${selected === index ? ' is-active' : ' is-faded'}`}>
                {testimonial.company ? <p className="testimonial-slider__company eyebrow">{testimonial.company}</p> : null}
                <p className="testimonial-slider__quote">“{testimonial.quote}”</p>
                <footer className="testimonial-slider__footer">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}