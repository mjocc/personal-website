import { FC } from 'react';

interface FooterLinkProps {
  href: string;
}

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-sm text-zinc-100 hover:underline decoration-wavy hover:text-zinc-400">
    {children}
  </a>
);

const Footer: FC = () => (
  <footer className="fixed bottom-0 flex items-center justify-between w-full px-3 py-2 bg-zinc-900">
    <FooterLink href="https://www.github.com/mjocc/personal-website-next">
      GitHub Repository
    </FooterLink>
    <FooterLink href="/admin/">Admin</FooterLink>
  </footer>
);

export default Footer;
