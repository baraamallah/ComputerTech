
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type RevealDirection = 'left' | 'right' | 'up' | 'down';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number; // in ms
  threshold?: number; // IntersectionObserver threshold
  once?: boolean; // Only animate once
  as?: keyof JSX.IntrinsicElements; // Element type to render as
  duration?: number; // in ms
}

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  once = true,
  as: Component = 'div',
  duration = 700, // Default duration
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // If it's already visible (e.g. from a previous render or if not 'once'), don't re-observe
    if (isVisible && once) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && currentRef) {
              observer.unobserve(currentRef);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, once, isVisible]); // Added isVisible to dependencies to handle re-observing if !once

  const getTransformClasses = () => {
    if (isVisible) {
      return 'translate-x-0 translate-y-0 opacity-100';
    }
    switch (direction) {
      case 'left':
        return '-translate-x-10 opacity-0';
      case 'right':
        return 'translate-x-10 opacity-0';
      case 'up':
        return 'translate-y-10 opacity-0';
      case 'down':
        return '-translate-y-10 opacity-0';
      default:
        return 'translate-y-10 opacity-0';
    }
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all ease-out',
        getTransformClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
