import Image from 'next/image';
import LoadingImage from '@images/loading.svg';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import Link from 'next/link';

const colorMapping = {
  blue: {
    DEFAULT: 'bg-blue-700',
    clicked: 'hover:bg-blue-800',
  },
  emerald: {
    DEFAULT: 'bg-emerald-600',
    clicked: 'hover:bg-emerald-700',
  },
};

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends HTMLButtonProps {
  color: keyof typeof colorMapping;
  href?: string;
  submitting?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  className = '',
  type,
  href,
  submitting,
  ...buttonProps
}) => {
  let mappedColor = colorMapping[color];
  const content = (
    <button
      className={`px-3 py-1.5 text-white ${mappedColor.DEFAULT} ${mappedColor.clicked} rounded border border-transparent active:ring ${className}`}
      type={type}
      {...buttonProps}
    >
      {submitting ? (
        <Image
          src={LoadingImage}
          width={40}
          height={10}
          className="m-auto"
          alt="loading"
        />
      ) : (
        children
      )}
    </button>
  );
  return href ? <Link href={href}>{content}</Link> : content;
};

export default Button;
