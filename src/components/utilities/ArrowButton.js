import Image from 'next/image';

import leftArrow from '@images/arrow-left.svg';
import rightArrow from '@images/arrow-right.svg';

import utils from '@styles/Utilities.module.scss';

// orientation must equal 'left' or 'right'
export default function ArrowButton(props) {
  const { orientation = 'right', ...otherProps } = props;
  return (
    <button
      className={`bg-zinc-800 hover:bg-zinc-900 z-20 border border-zinc-900 rounded-full w-16 h-12 absolute top-2/4 ${
        orientation === 'right'
          ? 'arrow-button-right right-0 mr-3'
          : 'arrow-button-left left-0 ml-3'
      } ${utils.flexCenter}`}
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
