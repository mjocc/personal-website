import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';

const CardBody: FC = ({ children }) => <div className="p-4">{children}</div>;

const CardTitle: FC = ({ children }) => (
  <h5 className="mb-1 text-xl font-medium">{children}</h5>
);

const CardText: FC = ({ children }) => <p className="mb-4">{children}</p>;

interface CardProps {
  className?: string;
  theme?: 'light' | 'dark';
  href?: string;
}

const CardContainer: FC<CardProps> = ({
  children,
  className = '',
  theme = 'dark',
  href,
}) => (
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

interface Card {
  (props: PropsWithChildren<CardProps>): ReactNode;
  Body: FC;
  Title: FC;
  Text: FC;
}

const Card: any = CardContainer;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;
const TypedCard: Card = Card;
export default TypedCard;
