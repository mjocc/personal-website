import { NavbarLink } from '@components/items/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, FC, useContext } from 'react';

const ShadowContext = createContext(false);

interface DesktopNavbarLinkProps {
  href: string;
  text: string;
  align?: 'left' | 'right';
}

const DesktopNavbarLink: FC<DesktopNavbarLinkProps> = ({
  href,
  text,
  align = 'left',
}) => {
  const router = useRouter();
  const noShadow = useContext(ShadowContext);
  const pathname = router.pathname;
  return (
    <>
      <Link href={href}>
        <a
          className={`utils__replace-focus-ring mx-2.5 mt-2.5 rounded-full bg-zinc-800 py-2.5 px-6 font-bold text-white transition
          ${noShadow ? 'hover:bg-zinc-900' : 'btn-shadow'}
          ${pathname === href ? (noShadow ? 'bg-zinc-900' : 'active') : ''}
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

interface DesktopNavbarProps {
  noShadow?: boolean;
  links: NavbarLink[];
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({ noShadow, links }) => (
  <>
    <nav className="fixed top-0 left-0 z-10 flex w-full flex-col items-center justify-items-start px-4 sm:flex sm:flex-row sm:flex-nowrap sm:p-0">
      <ShadowContext.Provider value={!!noShadow}>
        {links.map((link) => (
          <DesktopNavbarLink {...link} />
        ))}
      </ShadowContext.Provider>
    </nav>
  </>
);

export default DesktopNavbar;
