import Image from 'next/image';

import utils from '@styles/Utilities.module.scss';

export default function PlaceholderImage({ imgProps, css, alt, href }) {
  return (
    <div className={`relative block overflow-hidden ${utils.nextImageFix}`}>
      <div
        className="absolute inset-0 w-full h-full transform scale-150 blur-2xl filter"
        style={css}
      />
      <Image {...imgProps} alt={alt} />
      {href !== undefined && (
        /* eslint-disable-next-line jsx-a11y/anchor-has-content */
        <a href={href} className={utils.stretchedLink} />
      )}
    </div>
  );
}
