import DesktopNavbar from '@components/items/DesktopNavbar';
import { useBreakpoints } from '@lib/breakpoints';
import { FC } from 'react';
import MobileNavbar from './MobileNavbar';

export type NavbarLink = {
  href: string;
  text: string;
  align?: 'left' | 'right';
};

const navbarLinks: NavbarLink[] = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/portfolio', text: 'Portfolio' },
  { href: '/blog', text: 'Blog' },
  { href: '/contact', text: 'Contact me', align: 'right' },
];

interface NavbarProps {
  noShadow?: boolean;
}

const Navbar: FC<NavbarProps> = ({ noShadow }) => {
  const { isLargeTablet, isDesktop } = useBreakpoints();

  if (isLargeTablet || isDesktop)
    return <DesktopNavbar noShadow={noShadow} links={navbarLinks} />;

  return <MobileNavbar links={navbarLinks} />;
};

export default Navbar;
