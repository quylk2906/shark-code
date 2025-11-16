'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useInViewport } from 'react-in-viewport';
import styles from './home-intro.module.scss';
import useAppStore from '@/stores/useAppStore';
import Container from '@/components/container';
import AnimeHeading from '@/components/anime-heading/anime-heading';
import Image from 'next/image';

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

  const { isLoading } = useAppStore();
  const { inViewport = false, enterCount } = useInViewport(ref);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (!inViewport || !ref || enterCount > 1 || isLoading) return;
    setIsPlay(true);
  }, [enterCount, inViewport, isLoading]);

  return (
    <section className={styles.homeIntro}>
      {/* <Container>
        <div className={styles.homeIntro_title}>
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
        </div>
      </Container> */}
      <div className={styles.homeIntro_wrapperText} ref={ref}>
        {DATA.map((marquee, marqueeIndex) => (
          <Marquee
            key={marqueeIndex}
            gradient={false}
            speed={marquee.speed}
            play={isPlay}
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
      {button && <Container className={styles.homeIntro_buttonContainer}>{button}</Container>}
    </section>
  );
};

export default HomeIntro;
