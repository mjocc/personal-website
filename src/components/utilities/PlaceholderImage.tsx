import Image, { ImageProps } from 'next/image';
import { IGetCSSReturn } from 'plaiceholder/dist/css';
import { FC } from 'react';

interface PlaceholderImageProps {
  imgProps: ImageProps;
  css: IGetCSSReturn;
  alt: string;
  href?: string;
}

const PlaceholderImage: FC<PlaceholderImageProps> = ({
  imgProps,
  css,
  alt,
  href,
}) => {
  return (
    <div className="relative block overflow-hidden utils__next-fix-image">
      <div
        className="absolute inset-0 w-full h-full transform scale-150 blur-2xl filter"
        style={css}
      />
      <Image {...imgProps} alt={alt} />
      {href && (
        /* eslint-disable-next-line jsx-a11y/anchor-has-content */
        <a href={href} className="utils__stretched-link" />
      )}
    </div>
  );
};

export default PlaceholderImage;
