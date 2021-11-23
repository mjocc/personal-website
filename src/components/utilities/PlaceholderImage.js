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
        <a href={href} className="after:absolute after:inset-0" />
      )}
    </div>
  );
}
