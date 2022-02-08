import { FC, useState } from 'react';
import { NavbarLink } from '@components/items/Navbar';
import Link from 'next/link';

interface MobileNavbarLinkProps {
  href: string;
  text: string;
}

const MobileNavbarLink: FC<MobileNavbarLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="w-full py-3 text-lg text-center text-white">{text}</a>
    </Link>
  );
};

interface MobileNavbarProps {
  links: NavbarLink[];
}

const MobileNavbar: FC<MobileNavbarProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav
        className={`fixed top-0 flex w-full flex-col gap-3 transition-transform duration-300 ${
          open ? '' : '-translate-y-full'
        }`}
      >
        {links.map((link) => (
          <MobileNavbarLink key={link.text} {...link} />
        ))}
      </nav>
      <button
        className="fixed top-0 right-0 z-10 text-3xl bg-emerald-500"
        onClick={() => setOpen(!open)}
      >
        toggle navbar
      </button>
    </div>
  );
};

export default MobileNavbar;
