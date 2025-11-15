// import { Link } from '@heroui/link';
// import { Snippet } from '@heroui/snippet';
// import { Code } from '@heroui/code';
// import { button as buttonStyles } from '@heroui/theme';

// import { siteConfig } from '@/config/site';
// import { title, subtitle } from '@/components/primitives';
// import { GithubIcon } from '@/components/icons';
import Banner from '@/components/banner/banner';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <Banner />
    </>
  );
}
