import { useRouter } from 'next/router';

import Link from 'next/link';

import utils from '@styles/Utilities.module.scss';

const NavbarLink = ({ href, text, align = 'left' }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Link href={href}>
      <a
        className={`bg-gray-800 text-white font-bold py-2.5 px-6 rounded-full mt-2.5 mx-2.5
          ${pathname === href ? utils.active : ''}
          ${align === 'right' ? 'sm:ml-auto' : ''}
          ${utils.btnShadow}`}
        title={text}
        tabIndex={0}
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
      <nav className="absolute z-10 left-0 top-0 flex flex-col items-center justify-items-start px-4 w-full sm:flex sm:flex-row sm:flex-nowrap sm:p-0">
        <NavbarLink href="/" text="Home" />
        <NavbarLink href="/portfolio" text="Portfolio" />
        <NavbarLink href="/blog" text="Blog" />
        <NavbarLink href="/contact" text="Contact Me" align="right" />
      </nav>
    </>
  );
}
