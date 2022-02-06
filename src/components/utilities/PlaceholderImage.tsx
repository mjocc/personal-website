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
}) => (
  <div className="utils__next-fix-image relative block overflow-hidden">
    <div
      className="absolute inset-0 h-full w-full scale-150 transform blur-2xl filter"
      style={css}
    />
    <Image {...imgProps} alt={alt} />
    {href && (
      /* eslint-disable-next-line jsx-a11y/anchor-has-content */
      <a href={href} className="utils__stretched-link" />
    )}
  </div>
);

export default PlaceholderImage;
