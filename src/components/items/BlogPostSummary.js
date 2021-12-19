import Link from 'next/link';

export default function BlogPostSummary({ className = '', slug, title, date }) {
  return (
    <div className={className}>
      <Link href={`/blog/posts/${slug}`}>
        <a className="group relative flex flex-col">
          <span className="text-zinc-100 group-hover:underline text-2xl font-bold">
            {title}
          </span>
          <span className="text-l text-zinc-500 group-hover:underline italic font-semibold">
            {date}
          </span>
        </a>
      </Link>
    </div>
  );
}
