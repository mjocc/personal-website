import { FC } from 'react';
import dateFormat from 'dateformat';
import Link from 'next/link';

interface BlogPostSummaryProps {
  className?: string;
  slug: string;
  title: string;
  date: number;
}

const BlogPostSummary: FC<BlogPostSummaryProps> = ({
  className = '',
  slug,
  title,
  date,
}) => (
  <div className={className}>
    <Link href={`/old-blog/posts/${slug}`}>
      <a className="group relative flex flex-col">
        <span className="text-2xl font-bold text-zinc-100 group-hover:underline">
          {title}
        </span>
        <span className="font-semibold text-zinc-400 group-hover:underline">
          {dateFormat(date, 'dS mmmm, yyyy')}
        </span>
      </a>
    </Link>
  </div>
);

export default BlogPostSummary;
