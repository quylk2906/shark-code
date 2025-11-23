'use client';

import { animate, splitText, stagger } from 'animejs';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './anime-heading.module.scss';
import { twMerge } from 'tailwind-merge';

type AnimeHeading = {
  id?: string;
  className?: string;
  isAnimation?: boolean | { delay?: number; start?: string; end?: string };
};

const AnimeHeading: React.FC<PropsWithChildren<AnimeHeading>> = ({
  className,
  isAnimation,
  id,
  children,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!ref.current) return;

    const { chars } = splitText(ref.current, {
      chars: { wrap: 'clip' },
    });

    // Use requestAnimationFrame to ensure initial state is applied
    requestAnimationFrame(() => {
      animate(chars, {
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 750,
        easing: 'easeInOutSine',
        delay: stagger(50, {
          start: typeof isAnimation === 'object' ? isAnimation.delay : 0,
        }),
      });
    });
  }, [isAnimation]);

  return (
    <p
      id={id}
      ref={ref}
      className={twMerge(styles.root, isAnimation && styles['root--animation'], className)}
    >
      {children}
    </p>
  );
};

export default AnimeHeading;
