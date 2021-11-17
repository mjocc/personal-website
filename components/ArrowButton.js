import Image from 'next/image';

import leftArrow from '@images/arrow-left.svg';
import rightArrow from '@images/arrow-right.svg';

import utils from '@styles/Utilities.module.scss';

// orientation must equal 'left' or 'right'
export default function ArrowButton(props) {
  const { orientation = 'right', ...otherProps } = props;
  return (
    <button
      className={`bg-gray-800 hover:bg-gray-900 z-20 border border-gray-900 rounded-full w-16 h-12 absolute top-2/4 ${
        orientation === 'right'
          ? 'arrow-button-right right-[-72px] mr-2'
          : 'arrow-button-left left-[-72px] ml-2'
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
