import Link from 'next/link';
import Image from 'next/image';

import footerStyles from '@components/Footer.module.scss';

function FooterLink({ href, text }) {
  return (
    <a
      href={href}
      className={`bg-gray-lightest text-white flex-center font-bold px-12 h-11 rounded-full my-4 mx-2.5 ${footerStyles.linkBtnShadow}`}
      target="_blank"
      rel="noopener"
      title={text}
    >
      {text}
    </a>
  );
}

function SocialMediaIcon({ href, name, src }) {
  return (
    <Link href={href}>
      <a
        className={`h-16 w-16 rounded-3xl flex-center bg-gray-lightest ${footerStyles.socialBtnShadow}`}
        target="_blank"
        rel="noopener"
        title={name}
      >
        <Image src={src} alt={name} width={32} height={32} />
      </a>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className={`py-6 md:px-10 lg:px-20 flex-center absolute bottom-0 w-full bg-gray-lightest ${footerStyles.height}`}
    >
      <FooterLink
        href="https://www.github.com/mjocc/personal-website"
        text="GitHub Repository"
      />
      <div
        className={`flex-grow flex justify-around items-center h-16 ${footerStyles.socialContainerWidth}`}
      >
        <SocialMediaIcon
          href="https://github.com/mjocc"
          name="GitHub"
          src="/images/github-logo.svg"
        />
        <SocialMediaIcon
          href="https://developers.google.com/profile/u/108756308586786593957"
          name="Google Developer Profile"
          src="/images/google-developer-logo.svg"
        />
        <SocialMediaIcon
          href="https://uk.linkedin.com/"
          name="LinkedIn"
          src="/images/linkedin-logo.svg"
        />
      </div>
    </footer>
  );
}
