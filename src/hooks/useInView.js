import { useEffect, useState } from 'react';

export default function useInView({ threshold = 0, rootMargin = '0px', once = true, initialInView = false } = {}) {
  const [node, setNode] = useState(null);
  const [inView, setInView] = useState(initialInView);

  useEffect(() => {
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [node, threshold, rootMargin, once]);

  return [setNode, inView];
}