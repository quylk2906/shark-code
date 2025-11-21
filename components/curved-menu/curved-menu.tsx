'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import NextLink from 'next/link';
import clsx from 'clsx';
import gsap from 'gsap';
import styles from './curved-menu.module.scss';

import ZaloLogo from '@/public/zalo.svg';
import LogoWhite from '@/public/logo-white.svg';
import { Button } from '@heroui/button';

interface CurvedMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <ZaloLogo className="scale-[50%] -mr-2.5" />, href: '#' },
  { icon: 'logos:facebook', href: '#' },
  { icon: 'devicon:linkedin', href: '#' },
];

export const CurvedMenu: React.FC<CurvedMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!menuRef.current || !curveRef.current || !contentRef.current) return;

    const curveContainer = curveRef.current.parentElement;
    const svgElement = curveRef.current.closest('svg');

    if (isOpen) {
      setIsAnimating(true);
      // Animate menu in
      gsap.set(menuRef.current, { display: 'block' });
      gsap.set(curveContainer, { opacity: 1 });

      // Reset curve to starting position
      gsap.set(curveRef.current, {
        scale: 0.05,
        transformOrigin: '0% 100%',
        opacity: 1,
        x: 0,
        y: 0,
      });

      // Animate curve expanding from bottom-left
      gsap.to(curveRef.current, {
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
      });

      // Animate curve container mask to reveal
      gsap.fromTo(
        curveContainer,
        {
          clipPath: 'circle(0% at 0% 100%)',
        },
        {
          clipPath: 'circle(150% at 0% 100%)',
          duration: 1.4,
          ease: 'power3.out',
        }
      );

      // Animate content after curve starts expanding
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          onComplete: () => setIsAnimating(false),
        }
      );

      // Animate menu items with stagger
      const menuLinks = contentRef.current.querySelectorAll('[data-menu-item]');
      gsap.fromTo(
        menuLinks,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    } else {
      setIsAnimating(true);
      // Animate menu out
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: 'power2.in',
      });

      // Animate curve shrinking back to bottom-left
      gsap.to(curveRef.current, {
        scale: 0.05,
        duration: 0.9,
        ease: 'power2.in',
      });

      gsap.to(curveContainer, {
        clipPath: 'circle(0% at 0% 100%)',
        duration: 0.9,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(menuRef.current, { display: 'none' });
          setIsAnimating(false);
        },
      });
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      ref={menuRef}
      className={clsx(styles.menuOverlay, isOpen && styles.isOpen)}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Curved Shape */}
      <div className={styles.curveContainer}>
        <svg
          className={styles.curveSvg}
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            ref={curveRef}
            className={styles.curvePath}
            d="M0,1080 C0,1080 150,900 350,750 C550,600 750,450 950,350 C1150,250 1350,180 1550,120 C1700,70 1850,30 1920,0 L1920,1080 Z"
            fill="url(#curveGradient)"
            stroke="none"
          />
        </svg>
      </div>

      {/* Menu Content */}
      <div ref={contentRef} className={styles.menuContent}>
        {/* Header */}
        <div className={styles.menuHeader}>
          <LogoWhite />

          <Button
            isIconOnly
            color="primary"
            onPress={onClose}
            aria-label="Close menu"
            radius="full"
          >
            <Icon icon="mdi:close" fontSize={24} />
          </Button>
        </div>

        {/* Main Content */}
        <div className={styles.menuMain}>
          {/* Navigation Links */}
          <div className={styles.menuSection}>
            <nav className={styles.menuNav}>
              {menuItems.map((item, index) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={styles.menuLink}
                  data-menu-item
                  onClick={onClose}
                >
                  {item.label}
                </NextLink>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <a href="mailto:hello@example.com" className={styles.contactLink}>
                hello@example.com
              </a>
              <a href="tel:+1234567890" className={styles.contactLink}>
                (123) 456-7890
              </a>
              <p className={styles.contactAddress}>
                75 E Santa Clara St, Ste 1425
                <br />
                San Jose, California 95113
              </p>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className={styles.socialLink}>
                  {typeof social.icon === 'string' ? (
                    <Icon icon={social.icon} fontSize={24} />
                  ) : (
                    social.icon
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
