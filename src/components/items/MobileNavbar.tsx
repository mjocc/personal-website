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
      <a className="text-center text-lg text-white w-full py-3">{text}</a>
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
      <div
        className={`fixed top-0 flex flex-col gap-3 transition-transform duration-300 w-full ${
          open ? '' : '-translate-y-full'
        }`}
      >
        {links.map((link) => (
          <MobileNavbarLink {...link} />
        ))}
      </div>
      <button
        className="fixed top-0 right-0 z-10 bg-emerald-500 text-3xl"
        onClick={() => setOpen(!open)}
      >
        toggle navbar
      </button>
    </div>
  );
};

export default MobileNavbar;
