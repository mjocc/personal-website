const FooterLink = ({ href, text }) => (
  <a href={href} className="text-gray-100 hover:underline text-sm">
    {text}
  </a>
);

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex items-center justify-between px-3 py-2 w-full bg-gray-900">
      <FooterLink
        href="https://www.github.com/mjocc/personal-website"
        text="GitHub Repository"
      />
      <FooterLink href="/privacy.txt" text="Privacy Policy" />
    </footer>
  );
}
