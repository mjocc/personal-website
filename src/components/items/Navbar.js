import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ href, text, align = 'left' }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <Link href={href}>
        <a
          className={`utils__replace-focus-ring btn-shadow mx-2.5 mt-2.5 rounded-full bg-zinc-800 py-2.5 px-6 font-bold text-white
          ${pathname === href ? 'active' : ''}
          ${align === 'right' ? 'sm:ml-auto' : ''}
          `}
          title={text}
        >
          {text}
        </a>
      </Link>
      <style jsx>{`
        .btn-shadow {
          box-shadow: 10px 10px 20px #1c1c1f, -10px -10px 20px #323235;
        }
        .btn-shadow:hover,
        .btn-shadow.active {
          box-shadow: inset 10px 10px 20px #1c1c1f,
            inset -10px -10px 20px #323235;
        }
      `}</style>
    </>
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
      <nav className="fixed top-0 left-0 z-10 flex w-full flex-col items-center justify-items-start px-4 sm:flex sm:flex-row sm:flex-nowrap sm:p-0">
        <NavbarLink href="/" text="Home" />
        <NavbarLink href="/about" text="About" />
        <NavbarLink href="/portfolio" text="Portfolio" />
        <NavbarLink href="/blog" text="Blog" />
        <NavbarLink href="/contact" text="Contact Me" align="right" />
      </nav>
    </>
  );
}
