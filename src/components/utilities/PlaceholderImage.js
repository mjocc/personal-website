import Image from 'next/image';

export default function PlaceholderImage({ imgProps, css, alt, href }) {
  return (
    <div className="utils__next-fix-image relative block overflow-hidden">
      <div
        className="absolute inset-0 h-full w-full scale-150 transform blur-2xl filter"
        style={css}
      />
      <Image {...imgProps} alt={alt} />
      {href !== undefined && (
        /* eslint-disable-next-line jsx-a11y/anchor-has-content */
        <a href={href} className="utils__stretched-link" />
      )}
    </div>
  );
}
