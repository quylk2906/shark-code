import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@heroui/button';
import clsx from 'clsx';
import styles from './languages.module.scss';

interface LanguagesProps {
  className?: string;
}

const Languages: React.FC<LanguagesProps> = ({ className: addClass }) => {
  const langRef = useRef<HTMLDivElement>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const locale: any = 'vi';
  const languageLabel = locale === 'vi' ? 'VN' : locale === 'ja' ? 'JP' : 'EN';
  const className = clsx(styles.languages, addClass, isLangOpen && styles.opened);

  const toggleLang = useCallback(() => {
    setIsLangOpen((prev) => !prev);
  }, []);

  const clickOutSide = useCallback((e: any) => {
    if (!langRef.current?.contains(e.target as Node)) {
      setIsLangOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutSide);
    return () => document.removeEventListener('mousedown', clickOutSide);
  });

  return (
    <div className={className} ref={langRef}>
      <span className={styles['languages__lang-text']} onClick={toggleLang}>
        {languageLabel}
      </span>
      <ul>
        {locale !== 'vi' && (
          <li>
            <button
              // color="primary"
              // variant="light"
              // radius="sm"
              className={styles['languages__lang-text']}
            >
              VN
            </button>
          </li>
        )}
        {locale !== 'en' && (
          <li>
            <button className={styles['languages__lang-text']}>EN</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Languages;
