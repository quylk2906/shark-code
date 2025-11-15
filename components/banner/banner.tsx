'use client';

import { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './banner.module.scss';
import { useRouter } from 'next/navigation';

type BannerProps = {
  className?: string;
};

const BANNER_DATA = [
  {
    id: 1,
    image: '/images/banner-1.jpg',
    title: 'Biến ý tưởng thành công nghệ',
    subtitle: 'IT Software Solution & Technology',
    description:
      'Phân tích sâu – Hiểu rõ gốc rễ vấn đề doanh nghiệp. Chúng tôi giúp doanh nghiệp xác định vấn đề cốt lõi, đề xuất chiến lược chuyển đổi số và triển khai giải pháp công nghệ phù hợp để tăng trưởng bền vững.',
  },
  {
    id: 2,
    image: '/images/banner-2.jpg',
    title: 'Đặt uy tín lên hàng đầu',
    subtitle: '',
    description:
      'Cam kết chất lượng trong từng dòng code và từng dự án. Niềm tin của khách hàng là thước đo thành công của chúng tôi.',
  },
  {
    id: 3,
    image: '/images/banner-3.jpg',
    title: 'Biến công nghệ thành doanh thu',
    subtitle: '',
    description:
      'Trong thời đại chuyển đổi số, công nghệ không chỉ là công cụ - mà là đòn bẩy giúp doanh nghiệp tăng trưởng. Từ ý tưởng đến giải pháp, từ sản phẩm đến doanh thu - chúng tôi đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững bằng sức mạnh của công nghệ.',
  },

  {
    id: 4,
    video: '/images/sharks_video_smaller.mp4',
  },
];

const ContactButton = () => {
  const router = useRouter();
  const handleContact = () => {
    router.push('/contact');
  };
  return (
    <Button
      color="white"
      size="lg"
      variant="ghost"
      radius="md"
      onPress={handleContact}
      className="font-semibold btn-animated"
      endContent={<Icon icon="lucide:arrow-up-right" fontSize={20} />}
    >
      Liên hệ ngay
    </Button>
  );
};

const Banner = ({ className }: BannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    // fade: true,
    cssEase: 'linear',
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  const isSlide4 = currentSlide === 3; // Slide 4 is at index 3

  return (
    <section
      className={twMerge(
        'relative',
        styles.banner,
        isSlide4 && styles.darkDots,
        className
      )}
    >
      <Slider {...settings}>
        {BANNER_DATA.map((banner) => (
          <div
            key={banner.id}
            className="relative h-[600px] md:h-[700px] lg:h-[800px]"
          >
            {/* Background Image */}
            {banner.video ? (
              <video
                src={banner.video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                fill
                src={banner.image as string}
                alt={banner.title as string}
                className="object-cover"
                priority={banner.id === 1}
              />
            )}
            {/* Content */}
            <div className="absolute inset-0 z-10 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                  {banner.subtitle && (
                    <p className="text-lg md:text-xl mb-4 opacity-90">
                      {banner.subtitle}
                    </p>
                  )}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {banner.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    {banner.description}
                  </p>
                  <ContactButton />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Navigation Arrows */}
    </section>
  );
};

export default Banner;
