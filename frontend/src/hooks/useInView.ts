import { useState, useRef, useEffect, RefObject } from "react";

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (options: InViewOptions = {}): [RefObject<HTMLElement | null>, boolean] => {
  const [isInView, setIsInView] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce && !hasViewed) {
            setHasViewed(true);
          }
        } else if (!options.triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.triggerOnce, options.rootMargin, hasViewed]);

  return [ref, isInView || (!!options.triggerOnce && hasViewed)];
};
