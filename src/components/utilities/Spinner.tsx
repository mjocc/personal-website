import LoadingImage from '@images/loading.svg';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

interface SpinnerProps
  extends Omit<ImageProps, 'src' | 'className' | 'loading'> {}

const Spinner: FC<SpinnerProps> = (imageProps) => (
  <Image
    src={LoadingImage}
    className="m-auto"
    alt="loading"
    {...imageProps}
  />
);

export default Spinner;
