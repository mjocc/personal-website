import Image, { ImageProps } from 'next/image';
import { createContext, FC, useContext } from 'react';
import config from '@lib/config';
import githubLogo from '@images/github-logo.svg';
import gdevLogo from '@images/google-developer-logo.svg';
import twitterLogo from '@images/twitter-logo.svg';
import linkedinLogo from '@images/linkedin-logo.svg';

const ShadowContext = createContext(false);

interface SocialMediaIconProps {
  href: string;
  name: string;
  src: ImageProps['src'];
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
          href={`https://github.com/${config.github_account}`}
          name="GitHub"
          src={githubLogo}
        />
        <SocialMediaIcon
          href={`https://g.dev/${config.gdev_account}`}
          name="Google Developer Profile"
          src={gdevLogo}
        />
        <SocialMediaIcon
          href={`https://twitter.com/${config.twitter_account}`}
          name="Twitter"
          src={twitterLogo}
        />
        <SocialMediaIcon
          href={`https://uk.linkedin.com/in/${config.linkedin_account}`}
          name="LinkedIn"
          src={linkedinLogo}
        />
      </ShadowContext.Provider>
    </div>
  );
};

export default SocialMediaIcons;
