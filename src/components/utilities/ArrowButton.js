import leftArrow from '@images/arrow-left.svg';
import rightArrow from '@images/arrow-right.svg';
import Image from 'next/image';

// orientation must equal 'left' or 'right'
export default function ArrowButton({ orientation = 'right', ...otherProps }) {
  return (
    <button
      className={`absolute top-2/4 z-20 h-12 w-16 rounded-full border border-zinc-900 bg-zinc-800 hover:bg-zinc-900 ${
        orientation === 'right'
          ? 'arrow-button-right right-0 mr-3'
          : 'arrow-button-left left-0 ml-3'
      } utils__flex-center`}
      {...otherProps}
    >
      <Image
        src={orientation === 'right' ? rightArrow : leftArrow}
        alt={`${orientation} arrow`}
        width={35}
        height={35}
      />
    </button>
  );
}
