import Spinner from '@components/utilities/Spinner';
import Link from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

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
      {submitting ? <Spinner width={40} height={10} /> : children}
    </button>
  );
  return href ? <Link href={href}>{content}</Link> : content;
};

export default Button;
