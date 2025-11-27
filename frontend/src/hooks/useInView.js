// hooks/useInView.js
import { useState, useRef, useEffect } from "react";

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce && !hasViewed) {
            setHasViewed(true);
          }
        } else if (!options.triggerOnce || !hasViewed) {
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

  return [ref, isInView || (options.triggerOnce && hasViewed)];
};
