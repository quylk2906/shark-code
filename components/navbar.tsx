'use client';
import { useState } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Kbd } from '@heroui/kbd';
import { Link } from '@heroui/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { link as linkStyles } from '@heroui/theme';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import {
  DiscordIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  TwitterIcon,
} from '@/components/icons';
import { ThemeSwitch } from '@/components/theme-switch';
import Logo from '@/public/logo-slogan.svg';
import { CurvedMenu } from './curved-menu/curved-menu';
import Languages from './languages/languages';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pahtname = usePathname();
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: 'bg-default-100',
  //       input: 'text-sm',
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={['command']}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <>
      <HeroUINavbar
        maxWidth="full"
        position="sticky"
        height={100}
        classNames={{
          wrapper: 'pl-11 pr-0 ',
          base: styles.navbar,
        }}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            {pahtname === '/' ? (
              <Logo
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              />
            ) : (
              <NextLink href="/">
                <Logo />
              </NextLink>
            )}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
          {/* <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}

          <NavbarItem className="hidden md:flex h-full">
            <Languages />
          </NavbarItem>

          <NavbarItem className="hidden md:flex h-full">
            <Link href="/contact" className="h-full px-8 bg-foreground text-white">
              Liên hệ
            </Link>
            {/* Toggle Menu */}
            <Button
              variant="light"
              radius="none"
              className="h-full px-10"
              onPress={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon icon="lucide:component" fontSize={24} />
            </Button>
          </NavbarItem>

          {/* <NavbarItem className="hidden md:flex px-6"></NavbarItem> */}
        </NavbarContent>

        {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Button color="primary" variant="light" radius="sm">
          Liên hệ
        </Button>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />  
        <Languages />
      </NavbarContent> */}

        {/* <NavbarMenu> */}

        {/* {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div> */}
        {/* </NavbarMenu> */}
      </HeroUINavbar>
      <CurvedMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
