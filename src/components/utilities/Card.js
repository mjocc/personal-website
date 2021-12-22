import Link from 'next/link';

import utils from '@styles/Utilities.module.scss';

export const Card = ({ children, className = '', theme = 'dark', href }) => (
  <div
    className={`card sm:max-w-sm md:max-w-md rounded-lg border overflow-hidden filter hover:brightness-95 drop-shadow-xl transition ${
      theme === 'light'
        ? 'bg-zinc-100 text-black border-current'
        : 'bg-zinc-800 text-white border-zinc-900'
    } ${className}`}
  >
    {children}
    {href !== undefined && (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className={utils.stretchedLink} />
      </Link>
    )}
  </div>
);

export const CardBody = ({ children }) => <div className="p-4">{children}</div>;

export const CardTitle = ({ children }) => (
  <h5 className="mb-1 text-xl font-medium">{children}</h5>
);

export const CardText = ({ children }) => <p className="mb-4">{children}</p>;
