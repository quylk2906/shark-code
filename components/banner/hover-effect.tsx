import { useEffect, useRef, useState } from 'react';
import styles from './banner.module.scss';

type CircleHoverEffectProps = {
  isOpen: boolean;
};

const CircleHoverEffect = ({ isOpen }: CircleHoverEffectProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setKey(Date.now());
    }
  }, [isOpen]);

  return (
    <svg
      width="376"
      height="184"
      viewBox="0 0 376 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.circleHoverEffect}
    >
      <defs>
        <mask id={`pathMask-${key}`} maskUnits={isOpen ? 'userSpaceOnUse' : 'objectBoundingBox'}>
          <rect width="376" height="184" fill="black" />
          <path
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: isOpen ? 0 : 1200,
            }}
            className={styles.maskPath}
            d="M261 21.5L238.5 17.5L214.5 16L182 17.5L155.5 20L121 27.5L90 39L55 56C48 60 33.8 68.1 33 68.5C32 69 13 86.5 12 88C11.2 89.2 4 102.167 0.5 108.5C0.5 114 0.5 125.3 0.5 126.5C0.5 127.7 3.5 138 5 143L17 155.5L33 163.5L76.5 176L113 179L176.5 176C193.833 173.5 228.7 168.4 229.5 168C230.5 167.5 302 149.5 303 148.5C304 147.5 335.5 132.5 336.5 131.5C337.3 130.7 349.833 120.833 356 116L366 95C366 88.5 366 75.1 366 73.5C366 71.9 356.333 55.5 351.5 47.5L334.5 34.5L322.5 24C311.833 19.6667 289.9 10.8 287.5 10C285.1 9.2 244.5 3.33333 224.5 0.5H183.5L154 2L121 5L90 13L55 29"
            stroke="white"
            strokeWidth="50"
            fill="none"
          />
        </mask>
      </defs>

      <path
        // path 1
        className={styles.hoverPath}
        d="M2.57887 137.289C36.3755 221.84 361.125 178.215 374.867 99.7351C396.524 -23.9439 101.046 -12.7004 58.9316 27.7764C57.3718 29.2755 57.6271 32.0448 58.9316 31.4493C173.061 -20.6458 380.937 12.2604 363.327 99.7351C343.019 166.372 10.2974 214.044 8.9485 122.297C8.06036 61.8884 157.024 4.9895 264.784 23.129C268.006 22.3795 265.47 19.1018 261.936 18.4067C146.383 -0.952217 -22.9264 56.6192 2.57887 137.289Z"
        fill="#FFD60A"
        mask={`url(#pathMask-${key})`}
      />
    </svg>
  );
};

export default CircleHoverEffect;
