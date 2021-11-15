const FooterLink = ({ href, text }) => (
  <a href={href} className="text-gray-100 text-sm hover:underline">
    {text}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-2 px-3 absolute bottom-0 w-full bg-gray-900">
      <FooterLink
        href="https://www.github.com/mjocc/personal-website"
        text="GitHub Repository"
      />
      <FooterLink href="/privacy.txt" text="Privacy Policy" />
    </footer>
  );
}
