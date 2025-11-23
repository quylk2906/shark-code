import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const Line = ({ text, subText }: { text: string; subText: string }) => {
  return (
    <p className="md:text-5xl lg:text-6xl font-bold mt-16 leading-tight text-center absolute w-full opacity-0">
      {text} <span className="text-red">{subText}</span>
    </p>
  );
};

const VideoAnimatedText = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const paragraphs = Array.from(ref.current.querySelectorAll('p')) as HTMLElement[];

    if (paragraphs.length === 0) return;

    // use to pause when slide change
    // let isMounted = true;
    // let currentAnimation: ReturnType<typeof animate> | null = null;

    // Function to animate a single paragraph
    const animateParagraph = (paragraphIndex: number) => {
      // if (!isMounted) return;

      const paragraph = paragraphs[paragraphIndex];
      if (!paragraph) return;

      requestAnimationFrame(() => {
        // if (!isMounted) return;

        animate(paragraph, {
          y: [
            { to: ['100%', '0%'], duration: 750, ease: 'out(3)' }, // Slide from bottom to center
            { to: '-100%', delay: 3000, duration: 750, ease: 'in(3)' }, // After 3s, slide to top
          ],
          opacity: [
            { to: 1, duration: 750 }, // Stay visible during slide in
            { to: 0, delay: 3000, duration: 750 }, // Fade out when sliding to top
          ],
          onComplete: () => {
            // if (!isMounted) return;

            // Calculate next paragraph index (loop back to 0 after last)
            const nextIndex = (paragraphIndex + 1) % paragraphs.length;

            // Trigger next paragraph animation
            animateParagraph(nextIndex);
          },
        });
      });
    };

    // Start with the first paragraph
    animateParagraph(0);

    // Cleanup function to stop animations on unmount
    // return () => {
    //   isMounted = false;
    //   if (currentAnimation) {
    //     currentAnimation.pause();
    //   }
    // };
  }, []);

  return (
    <div ref={ref} className="relative text-center">
      <Line text="NHÀ PHÂN TÍCH" subText="CÁ MẬP" />
      <Line text="NGƯỜI DẪN LỐI TRONG" subText="BIỂN LỚN" />
      <Line text="CHIẾN LƯỢC GIA CỦA" subText="ĐẠI DƯƠNG SỐ" />
    </div>
  );
};

export default VideoAnimatedText;
