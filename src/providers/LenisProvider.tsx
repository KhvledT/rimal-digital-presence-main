import { useEffect, useRef } from 'react';
import { ReactNode } from 'react';
import Lenis from 'lenis';
import { setGlobalLenis } from '@/hooks/useLenis';

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal' | 'both';
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    autoResize?: boolean;
    content?: HTMLElement;
    wrapper?: HTMLElement;
    wheelEventsTarget?: HTMLElement | Window;
    touchEventsTarget?: HTMLElement | Window;
    normalizeWheel?: boolean;
    syncTouch?: boolean;
  };
}

const LenisProvider = ({ children, options = {} }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Default Lenis options
    const defaultOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical' as const,
      gestureDirection: 'vertical' as const,
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      ...options,
    };

    // Create Lenis instance
    lenisRef.current = new Lenis(defaultOptions);
    
    // Set the global instance for useLenis hook
    setGlobalLenis(lenisRef.current);

    // Connect to requestAnimationFrame
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
      setGlobalLenis(null);
    };
  }, [options]);

  return <>{children}</>;
};

export default LenisProvider;
