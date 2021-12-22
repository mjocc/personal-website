import { useRouter } from 'next/router';

import Link from 'next/link';

import utils from '@styles/Utilities.module.scss';
import navbarStyles from './Navbar.module.scss';

const NavbarLink = ({ href, text, align = 'left' }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Link href={href}>
      <a
        className={`bg-zinc-800 text-white font-bold py-2.5 px-6 rounded-full mt-2.5 mx-2.5
          ${pathname === href ? navbarStyles.active : ''}
          ${align === 'right' ? 'sm:ml-auto' : ''}
          ${navbarStyles.btnShadow}
          ${utils.focusRingReplace}
          `}
        title={text}
      >
        {text}
      </a>
    </Link>
  );
};

export default function Navbar() {
  return (
    <>
      <div className="navbar-hamburger-bar">
        <div className="navbar-hamburger-container">
          <div className="navbar-hamburger">
            <div />
          </div>
        </div>
      </div>
      <nav className="fixed top-0 left-0 z-10 flex flex-col items-center w-full px-4 justify-items-start sm:flex sm:flex-row sm:flex-nowrap sm:p-0">
        <NavbarLink href="/" text="Home" />
        <NavbarLink href="/about" text="About" />
        <NavbarLink href="/portfolio" text="Portfolio" />
        <NavbarLink href="/blog" text="Blog" />
        <NavbarLink href="/contact" text="Contact Me" align="right" />
      </nav>
    </>
  );
}
