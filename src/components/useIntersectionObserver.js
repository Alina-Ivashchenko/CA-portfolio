import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing once visible
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]); // Add ref and options to the dependency array

  return isVisible;
};

export default useIntersectionObserver;