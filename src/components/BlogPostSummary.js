import Link from 'next/link';

export default function BlogPostSummary({ className = '', slug, title, date }) {
  return (
    <div className={className}>
      <div className="relative flex flex-col">
        <span className="text-2xl font-bold text-gray-100">{title}</span>
        <span className="italic font-semibold text-gray-500 text-l">
          {date}
        </span>
        <Link href={`/blog/post/${slug}`}>
          <a className="after:absolute after:inset-0" />
        </Link>
      </div>
    </div>
  );
}
