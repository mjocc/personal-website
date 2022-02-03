import { FC } from 'react';

interface FooterLinkProps {
    href: string;
}

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-sm text-zinc-100 hover:underline">
    {children}
  </a>
);

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between bg-zinc-900 px-3 py-2">
      <FooterLink href="https://www.github.com/mjocc/personal-website-next">
        GitHub Repository
      </FooterLink>
      <FooterLink href="/admin/">Admin</FooterLink>
    </footer>
  );
}

export default Footer;