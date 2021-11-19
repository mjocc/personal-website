import Image from 'next/image';

import socialMediaIconStyles from '@components/SocialMediaIcons.module.scss';
import utils from '@styles/Utilities.module.scss';

function SocialMediaIcon({ href, name, src }) {
  return (
    <a
      href={href}
      className={`h-16 w-16 rounded-3xl bg-gray-800 ${utils.flexCenter} ${socialMediaIconStyles.iconShadow}`}
      title={name}
    >
      <Image src={src} alt={name} width={32} height={32} />
    </a>
  );
}

export default function SocialMediaIcons({
  className = '',
  width = '500px',
  height = '500px',
  column = false,
}) {
  return (
    <div
      className={`flex ${
        column && 'flex-col'
      } justify-between items-center h-16 ${className}`}
      style={column ? { height } : { width }}
    >
      <SocialMediaIcon
        href="https://github.com/mjocc"
        name="GitHub"
        src="/images/github-logo.svg"
      />
      <SocialMediaIcon
        href="https://g.dev/mjocc"
        name="Google Developer Profile"
        src="/images/google-developer-logo.svg"
      />
      <SocialMediaIcon
        href="https://uk.linkedin.com/"
        name="LinkedIn"
        src="/images/linkedin-logo.svg"
      />
    </div>
  );
}
