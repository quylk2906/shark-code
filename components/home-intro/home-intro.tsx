'use client';
import { ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useInViewport } from 'react-in-viewport';
import styles from './home-intro.module.scss';
import useAppStore from '@/stores/useAppStore';
import Container from '@/components/container';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const AnimeHeading = dynamic(() => import('@/components/anime-heading/anime-heading'), {
  ssr: false,
});

interface MarqueeItem {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface MarqueeData {
  speed: number;
  items: MarqueeItem[];
  pauseOnHover?: boolean;
}

const DATA: MarqueeData[] = [
  {
    speed: 32,
    items: [
      { type: 'text', content: 'Giữa đại dương công nghệ rộng lớn' },
      { type: 'image', src: '/images/home-intro-2.jpg', width: 150, height: 52, alt: 'intro-2' },
      { type: 'text', content: 'SharkCode vươn lên như chú cá mập tiên phong' },
      { type: 'image', src: '/images/home-intro-3.jpg', width: 250, height: 52, alt: 'intro-3' },
      {
        type: 'text',
        content: 'mang đến sức mạnh mạnh mẽ, kiên cường và bền bỉ trong từng giải pháp số.',
      },
      { type: 'image', src: '/images/home-intro-1.jpg', width: 150, height: 52, alt: 'intro-1' },
    ],
  },
  {
    speed: 37,
    pauseOnHover: true,
    items: [
      { type: 'text', content: 'Chúng tôi lặn sâu vào bài toán doanh nghiệp' },
      { type: 'image', src: '/images/home-intro-4.jpg', width: 192, height: 52, alt: 'intro-4' },
      { type: 'text', content: 'kết hợp tư duy chiến lược, năng lực outsourcing' },
      { type: 'image', src: '/images/home-intro-5.jpg', width: 200, height: 52, alt: 'intro-5' },
      { type: 'text', content: 'và sức mạnh của phần mềm – website – ứng dụng – AI' },
      { type: 'image', src: '/images/home-intro-6.jpg', width: 128, height: 52, alt: 'intro-6' },
      { type: 'text', content: 'để kiến tạo hệ thống vận hành thông minh.' },
      { type: 'image', src: '/images/home-intro-7.jpg', width: 128, height: 52, alt: 'intro-7' },
    ],
  },
  {
    speed: 35,
    items: [
      { type: 'text', content: 'Điều tạo nên sự khác biệt của SharkCode không chỉ là công nghệ' },
      { type: 'image', src: '/images/home-intro-8.jpg', width: 192, height: 52, alt: 'intro-8' },
      { type: 'text', content: 'mà còn là con người – đội ngũ chuyên gia tận tâm' },
      { type: 'image', src: '/images/home-intro-9.jpg', width: 250, height: 52, alt: 'intro-9' },
      {
        type: 'text',
        content: 'theo đuổi UI/UX mượt mà và trải nghiệm liền mạch trong mọi sản phẩm.',
      },
      { type: 'image', src: '/images/home-intro-10.jpg', width: 256, height: 52, alt: 'intro-10' },
    ],
  },
  {
    speed: 35,
    pauseOnHover: true,
    items: [
      { type: 'text', content: 'Chúng tôi tin vào một hệ sinh thái số bền vững' },
      { type: 'image', src: '/images/home-intro-8.jpg', width: 192, height: 52, alt: 'intro-8' },
      { type: 'text', content: 'nơi công nghệ nuôi dưỡng sự phát triển và thịnh vượng' },
      { type: 'image', src: '/images/home-intro-9.jpg', width: 250, height: 52, alt: 'intro-9' },
      { type: 'text', content: 'giúp doanh nghiệp vươn xa hơn mọi giới hạn trong kỷ nguyên số.' },
      { type: 'image', src: '/images/home-intro-10.jpg', width: 256, height: 52, alt: 'intro-10' },
    ],
  },
];

interface HomeIntroProps {
  title: string;
  subTitle: string;
  button: ReactNode;
}

const HomeIntro: React.FC<HomeIntroProps> = ({ title, subTitle, button }) => {
  const ref = useRef<HTMLDivElement>(null);
  useMemo(() => gsap.registerPlugin(ScrollTrigger), []);

  const { isLoading } = useAppStore();
  const { inViewport = false } = useInViewport(ref, {
    rootMargin: '100px',
    threshold: 1,
  });

  const [isPlay, setIsPlay] = useState(false);

  useLayoutEffect(() => {
    if (inViewport) {
      setTimeout(() => {
        setIsPlay(true);
      }, 500);
    }
  }, [inViewport, isLoading]);

  return (
    <section className={styles.homeIntro}>
      <h2
        className={clsx(
          'flex items-center gap-4 font-bold text-[#2a67d88f] mb-[170px]! justify-center',
          styles.homeIntro_bigTitle
        )}
      >
        Kiến tạo đại dương công nghệ
        <svg
          width="70"
          height="44"
          viewBox="0 0 70 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4004 2.7894C22.242 1.63941 19.9043 0.863781 17.4866 0.495361L2.94899 15.2341C1.06065 17.1255 6.10352e-05 19.6889 6.10352e-05 22.3615C6.10352e-05 25.0341 1.06065 27.5976 2.94899 29.489L16.8644 43.6557C19.333 43.416 21.7544 42.8234 24.0547 41.8959L7.63147 24.8127C7.30841 24.4915 7.05204 24.1096 6.8771 23.6889C6.70216 23.2682 6.6121 22.8171 6.6121 22.3615C6.6121 21.9059 6.70216 21.4549 6.8771 21.0342C7.05204 20.6135 7.30841 20.2315 7.63147 19.9103L24.4004 2.7894Z"
            fill="#2A68D8"
            fill-opacity="0.5"
          />
          <path
            d="M45.5436 41.3679C47.7018 42.5181 50.0396 43.2938 52.4573 43.662L66.9887 28.9233C67.9274 27.9889 68.6724 26.8781 69.1807 25.655C69.689 24.4319 69.9507 23.1204 69.9507 21.7958C69.9507 20.4713 69.689 19.1598 69.1807 17.9367C68.6724 16.7136 67.9274 15.6028 66.9887 14.6684L53.0795 0.495361C50.6109 0.738673 48.1897 1.33335 45.8893 2.26146L62.3062 19.3447C62.6292 19.6659 62.8856 20.0478 63.0606 20.4685C63.2355 20.8892 63.3256 21.3402 63.3256 21.7958C63.3256 22.2514 63.2355 22.7025 63.0606 23.1232C62.8856 23.5439 62.6292 23.9258 62.3062 24.2471L45.5436 41.3679Z"
            fill="#2A68D8"
            fill-opacity="0.5"
          />
          <path
            d="M36.3137 -8.75918e-05L28.8496 43.0332L34.4231 43.9999L41.8872 0.966623L36.3137 -8.75918e-05Z"
            fill="#2A68D8"
            fill-opacity="0.5"
          />
        </svg>
        Đưa doanh nghiệp vươn xa
      </h2>

      <Container>
        <div className={styles.homeIntro_title}>
          {isPlay && (
            <>
              <AnimeHeading
                className={styles.homeIntro_bigTitle}
                isAnimation={{ start: 'bottom 75%', end: 'bottom 75%' }}
              >
                {title}
              </AnimeHeading>

              <AnimeHeading
                className={styles.homeIntro_subTitle}
                isAnimation={{ start: 'bottom 80%', end: 'bottom 80%' }}
              >
                {subTitle}
              </AnimeHeading>
            </>
          )}
        </div>
      </Container>

      <div className={styles.homeIntro_wrapperText} ref={ref}>
        {DATA.map((marquee, marqueeIndex) => (
          <Marquee
            key={marqueeIndex}
            // gradient={false}
            speed={marquee.speed}
            play
            className={styles.homeIntro_marquee}
          >
            {Array(3)
              .fill(null)
              .map((_v, i) => (
                <div className={styles.homeIntro_text} key={i}>
                  {marquee.items.map((item, itemIndex) => {
                    if (item.type === 'text') {
                      return <span key={itemIndex}>{item.content}</span>;
                    }
                    return (
                      <Image
                        key={itemIndex}
                        className={styles.homeIntro_image}
                        src={item.src!}
                        width={item.width!}
                        height={item.height!}
                        alt={item.alt!}
                      />
                    );
                  })}
                </div>
              ))}
          </Marquee>
        ))}
      </div>
      {/* {button && <Container className={styles.homeIntro_buttonContainer}>{button}</Container>} */}
    </section>
  );
};

export default HomeIntro;
