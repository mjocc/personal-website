import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

const colorMapping = {
  blue: {
    DEFAULT: 'bg-blue-700',
    clicked: 'hover:bg-blue-800',
  },
};

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: keyof typeof colorMapping;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, color, className = '', ...buttonProps } = props;
  let mappedColor = colorMapping[color];
  return (
    <button
      className={`px-3 py-1.5 text-white disabled:opacity-50 ${mappedColor.DEFAULT} ${mappedColor.clicked} rounded border border-transparent active:ring ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
