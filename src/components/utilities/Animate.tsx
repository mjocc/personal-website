import { FC, ReactNode } from 'react';

type AnimateProps =
  | { type: string; types?: never }
  | { type?: never; types: string[] };

const Animate: FC<AnimateProps> = ({ type, types, children }) => {
  let className = 'animate__animated ';
  if (type) {
    className = className.concat(`animate__${type}`);
  } else if (types) {
    className = className.concat(
      types.map((type) => `animate__${type}`).join(' ')
    );
  }
  return <div className={className}>{children}</div>;
};

export default Animate;
