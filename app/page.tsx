// import { Link } from '@heroui/link';
// import { Snippet } from '@heroui/snippet';
// import { Code } from '@heroui/code';
// import { button as buttonStyles } from '@heroui/theme';
// import { siteConfig } from '@/config/site';
// import { title, subtitle } from '@/components/primitives';
// import { GithubIcon } from '@/components/icons';
import { Button } from '@heroui/button';
import Banner from '@/components/banner/banner';
import HomeIntro from '@/components/home-intro/home-intro';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <Banner />

      <HomeIntro
        title="SharkCode"
        subTitle="Sức mạnh công nghệ – Tốc độ của cá mập."
        button={
          <Button variant="solid" color="primary">
            Button
          </Button>
        }
      />
    </>
  );
}
