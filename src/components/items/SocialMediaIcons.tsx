import Image from 'next/image';
import { createContext, FC, useContext } from 'react';

const ShadowContext = createContext(false);

interface SocialMediaIconProps {
  href: string;
  name: string;
  src: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ href, name, src }) => {
  const noShadow = useContext(ShadowContext);
  return (
    <>
      <a
        href={href}
        className={`utils__flex-center utils__replace-focus-ring h-16 w-16 rounded-3xl bg-zinc-800 transition ${
          noShadow ? 'hover:bg-zinc-900' : 'icon-shadow'
        }`}
        title={name}
      >
        <Image src={src} alt={name} width={32} height={32} />
      </a>
      <style jsx>{`
        .icon-shadow {
          box-shadow: 7.5px 7.5px 15px #181818, 0px 0px 15px #545454;
        }
        .icon-shadow:hover {
          box-shadow: inset 7.5px 7.5px 15px #181818,
              inset 0px 0px 15px #545454;
          }
        }
      `}</style>
    </>
  );
};

interface SocialMediaIconsProps {
  className?: string;
  width?: string;
  height?: string;
  column?: boolean;
  noShadow?: boolean;
}

const SocialMediaIcons: FC<SocialMediaIconsProps> = ({
  className = '',
  width = '500px',
  height = '500px',
  column,
  noShadow,
}) => {
  return (
    <div
      className={`flex h-16 items-center justify-between ${
        column && 'flex-col'
      } ${className}`}
      style={column ? { height } : { width }}
    >
      <ShadowContext.Provider value={!!noShadow}>
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
      </ShadowContext.Provider>
    </div>
  );
};

export default SocialMediaIcons;
