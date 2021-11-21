import Link from 'next/link';

export default function BlogPostSummary({ className = '', slug, title, date }) {
  return (
    <div className={className}>
      <Link href={`/blog/posts/${slug}`}>
        <a className="relative flex flex-col group">
          <span className="text-2xl font-bold text-gray-100 group-hover:underline">
            {title}
          </span>
          <span className="italic font-semibold text-gray-500 text-l group-hover:underline">
            {date}
          </span>
        </a>
      </Link>
    </div>
  );
}
