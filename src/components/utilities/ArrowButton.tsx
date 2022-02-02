import leftArrow from '@images/arrow-left.svg';
import rightArrow from '@images/arrow-right.svg';
import Image from 'next/image';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

// orientation must equal 'left' or 'right'
interface ArrowButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  orientation?: 'left' | 'right';
}

const ArrowButton: FC<ArrowButtonProps> = ({
  orientation = 'right',
  ...buttonProps
}) => (
  <button
    className={`absolute top-2/4 z-20 h-12 w-16 rounded-full border border-zinc-900 bg-zinc-800 hover:bg-zinc-900 ${
      orientation === 'right'
        ? 'arrow-button-right right-0 mr-3'
        : 'arrow-button-left left-0 ml-3'
    } utils__flex-center`}
    {...buttonProps}
  >
    <Image
      src={orientation === 'right' ? rightArrow : leftArrow}
      alt={`${orientation} arrow`}
      width={35}
      height={35}
    />
  </button>
);

export default ArrowButton;
