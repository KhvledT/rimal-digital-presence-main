import { useRef, useEffect } from 'react';
import Lenis from 'lenis';

let globalLenisInstance: Lenis | null = null;

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Store the global instance if it exists
    lenisRef.current = globalLenisInstance;
    
    return () => {
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; easing?: (t: number) => number }) => {
    if (globalLenisInstance) {
      globalLenisInstance.scrollTo(target, options);
    }
  };

  const scrollToTop = (options?: { duration?: number; easing?: (t: number) => number }) => {
    scrollTo(0, options);
  };

  const scrollToBottom = (options?: { duration?: number; easing?: (t: number) => number }) => {
    scrollTo('bottom', options);
  };

  const stop = () => {
    if (globalLenisInstance) {
      globalLenisInstance.stop();
    }
  };

  const start = () => {
    if (globalLenisInstance) {
      globalLenisInstance.start();
    }
  };

  const destroy = () => {
    if (globalLenisInstance) {
      globalLenisInstance.destroy();
      globalLenisInstance = null;
    }
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    scrollToBottom,
    stop,
    start,
    destroy,
  };
};

// Function to set the global Lenis instance (used by LenisProvider)
export const setGlobalLenis = (lenis: Lenis | null) => {
  globalLenisInstance = lenis;
};
