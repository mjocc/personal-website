import Image from 'next/image';

export const Card = ({ children, className = '', theme = 'dark' }) => (
  <div
    className={`card sm:max-w-sm md:max-w-md rounded-lg border overflow-hidden ${
      theme === 'light'
        ? 'bg-gray-100 text-black border-current'
        : 'bg-gray-800 text-white border-gray-900'
    } ${className}`}
  >
    {children}
  </div>
);

export const CardImage = (props) => {
  const { className = '', alt, ...otherProps } = props;
  return (
    <Image {...otherProps} placeholder="blur" className={className} alt={alt} />
  );
};

export const CardBody = ({ children }) => <div className="p-4">{children}</div>;

export const CardTitle = ({ children }) => (
  <h5 className="mb-1 text-xl font-medium">{children}</h5>
);

export const CardText = ({ children }) => <p className="mb-4">{children}</p>;
