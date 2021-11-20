import Image from 'next/image';

import utils from '@styles/Utilities.module.scss';

export default function PlaceholderImage({ imgProps, css, alt }) {
  return (
    <div className={`relative block overflow-hidden ${utils.nextImageFix}`}>
      <div
        className="absolute inset-0 w-full h-full transform scale-150 filter blur-2xl"
        style={css}
      />
      <Image {...imgProps} alt={alt} />
    </div>
  );
}
