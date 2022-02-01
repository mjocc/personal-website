import Image from 'next/image';

function SocialMediaIcon({ href, name, src }) {
  return (
    <>
      <a
        href={href}
        className="utils__flex-center utils__replace-focus-ring icon-shadow h-16 w-16 rounded-3xl bg-zinc-800"
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
      } h-16 items-center justify-between ${className}`}
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
