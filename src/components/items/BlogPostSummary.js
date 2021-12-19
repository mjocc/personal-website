import Link from 'next/link';
import dateFormat from 'dateformat';

export default function BlogPostSummary({ className = '', slug, title, date }) {
  return (
    <div className={className}>
      <Link href={`/blog/posts/${slug}`}>
        <a className="relative flex flex-col group">
          <span className="text-2xl font-bold text-zinc-100 group-hover:underline">
            {title}
          </span>
          <span className="italic font-semibold text-l text-zinc-500 group-hover:underline">
            {dateFormat(date, 'd mmmm, yyyy')}
          </span>
        </a>
      </Link>
    </div>
  );
}
