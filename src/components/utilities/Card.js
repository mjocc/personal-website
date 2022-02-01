import Link from 'next/link';

export const Card = ({ children, className = '', theme = 'dark', href }) => (
  <div
    className={`card overflow-hidden rounded-lg border drop-shadow-xl filter transition hover:brightness-95 sm:max-w-sm md:max-w-md ${
      theme === 'light'
        ? 'border-current bg-zinc-100 text-black'
        : 'border-zinc-900 bg-zinc-800 text-white'
    } ${className}`}
  >
    {children}
    {href !== undefined && (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="utils__stretched-link" />
      </Link>
    )}
  </div>
);

const CardBody = ({ children }) => <div className="p-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h5 className="mb-1 text-xl font-medium">{children}</h5>
);

const CardText = ({ children }) => <p className="mb-4">{children}</p>;

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
