const FooterLink = ({ href, children }) => (
  <a href={href} className="text-gray-100 hover:underline text-sm">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex items-center justify-between px-3 py-2 w-full bg-gray-900">
      <FooterLink href="https://www.github.com/mjocc/personal-website">
        GitHub Repository
      </FooterLink>
      <FooterLink href="/admin/">Admin</FooterLink>
    </footer>
  );
}
