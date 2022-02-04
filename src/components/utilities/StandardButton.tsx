import Image from 'next/image';
import Spinner from '@images/spinner.svg';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

const colorMapping = {
  blue: {
    DEFAULT: 'bg-blue-700',
    clicked: 'hover:bg-blue-800',
  },
};

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends HTMLButtonProps {
  color: keyof typeof colorMapping;
  className?: string;
  submitting?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  className = '',
  type,
  submitting,
  ...buttonProps
}) => {
  let mappedColor = colorMapping[color];
  return (
    <button
      className={`px-3 py-1.5 text-white ${mappedColor.DEFAULT} ${mappedColor.clicked} rounded border border-transparent active:ring ${className}`}
      type={type}
      {...buttonProps}
    >
      {type === 'submit' && submitting ? (
        <Image src={Spinner} className="m-auto h-5 w-5 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
