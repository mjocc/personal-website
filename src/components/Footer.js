const FooterLink = ({ href, children }) => (
  <a href={href} className="text-sm text-gray-100 hover:underline">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex items-center justify-between w-full px-3 py-2 bg-gray-900">
      <FooterLink href="https://www.github.com/mjocc/personal-website">
        GitHub Repository
      </FooterLink>
      <FooterLink href="https://app.netlify.com/sites/priceless-liskov-5ad496/deploys">
        Powered by Netlify
      </FooterLink>
    </footer>
  );
}
