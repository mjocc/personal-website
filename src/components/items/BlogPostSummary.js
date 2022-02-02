import dateFormat from 'dateformat';
import Link from 'next/link';

export default function BlogPostSummary({ className = '', slug, title, date }) {
  return (
    <div className={className}>
      <Link href={`/blog/posts/${slug}`}>
        <a className="group relative flex flex-col">
          <span className="text-2xl font-bold text-zinc-100 group-hover:underline">
            {title}
          </span>
          <span className="text-l font-semibold italic text-zinc-400 group-hover:underline">
            {dateFormat(date, 'd mmmm, yyyy')}
          </span>
        </a>
      </Link>
    </div>
  );
}
