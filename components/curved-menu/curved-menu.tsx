'use client';

import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import NextLink from 'next/link';
import clsx from 'clsx';
import styles from './curved-menu.module.scss';

import ZaloLogo from '@/public/zalo.svg';
import LogoWhite from '@/public/logo-white.svg';
import { Button } from '@heroui/button';

interface CurvedMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrimaryColorArray = ['sora', 'midori', 'hikari', 'kaze'];
const CategoryColorArray = [
  'business',
  'nature',
  'culture',
  'network',
  'education',
  'medical',
  'transportation',
];
const AllColorArray = [...PrimaryColorArray, ...CategoryColorArray];

const getRandomColor = () => {
  return AllColorArray[Math.floor(Math.random() * AllColorArray.length)];
};

const ColorLink = ({
  title,
  href,
  onClose,
}: {
  title: string;
  href: string;
  onClose: () => void;
}) => {
  const [color, setColor] = useState<string>(getRandomColor());

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  return (
    <NextLink
      data-menu-item
      href={href}
      onMouseEnter={handleMouseEnter}
      className={clsx(styles.menuLink, styles[`menuLink--${color}`])}
      onClick={onClose}
    >
      <span>{title}</span>
    </NextLink>
  );
};

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

  return (
    <div ref={menuRef} className={clsx(styles.menuOverlay, isOpen && styles.isOpen)}>
      {/* Menu Content */}
      <div ref={contentRef} className={styles.menuContent}>
        {/* Header */}
        <div className={styles.menuHeader}>
          <LogoWhite />

          <Button
            size="lg"
            isIconOnly
            color="default"
            onPress={onClose}
            aria-label="Close menu"
            radius="full"
            className="-top-19 -right-15"
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
                <ColorLink key={index} href={item.href} onClose={onClose} title={item.label} />
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <a href="mailto:hello@example.com" className={styles.contactLink}>
                hello@sharecode.com
              </a>
              <a href="tel:+1234567890" className={styles.contactLink}>
                (123) 123.231.123
              </a>
              <p className={styles.contactAddress}>1322, München, Germany / Stockholm, Sweden</p>
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
