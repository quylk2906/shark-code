'use client';

import { animate, stagger } from 'animejs';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './anime-heading.module.scss';
import useAppStore from '@/stores/useAppStore';
import { twMerge } from 'tailwind-merge';
import gsap from 'gsap';

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
  const [isRunAnimation, setIsRunAnimation] = useState(-1);
  const { isLoading } = useAppStore();

  useEffect(() => {
    if (isRunAnimation !== 0 || isLoading || !ref.current) return;
    const targets = ref.current.querySelectorAll('span');
    if (!targets.length) return;

    animate(targets, {
      opacity: [0, 1],
      translateX: [30, 0],
      easing: 'easeInOutSine',
      duration: 330,
      delay: stagger(50, {
        start: typeof isAnimation === 'object' ? isAnimation.delay : 0,
      }),
    });
    setIsRunAnimation(1);
  }, [isRunAnimation, isAnimation, isLoading]);

  useEffect(() => {
    if (!ref || !ref.current || typeof children !== 'string' || isRunAnimation > -1) return;

    if (isAnimation) {
      ref.current.innerHTML =
        (typeof children === 'string' && children.replace(/\S+/g, '<div>$&</div>')) || '';
      ref.current?.querySelectorAll('div').forEach((value) => {
        value.innerHTML =
          (value.textContent && value.textContent.replace(/\S/g, '<span>$&</span>')) || '';
      });
    } else {
      ref.current.innerHTML = children;
    }
  }, [children, isAnimation, isRunAnimation]);

  useEffect(() => {
    const ele = ref.current;

    if (!isAnimation || isRunAnimation > -1) return gsap.killTweensOf(ele);

    const start = typeof isAnimation === 'object' ? isAnimation.start : 'bottom 90%';
    const end = start;

    gsap.from(ele, {
      scrollTrigger: {
        trigger: ele,
        start,
        end,
        scrub: 0.5,
        // markers: !!isAnimation,
        once: true,
        onEnter: () => {
          // setTimeout(() => {
          setIsRunAnimation(0);
          // }, 2000);
        },
      },
    });
    return () => gsap.killTweensOf(ele);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
