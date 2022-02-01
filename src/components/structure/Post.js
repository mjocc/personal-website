import Layout from '@components/structure/Layout';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import leftArrow from '@images/arrow-left.svg';
import 'highlight.js/styles/atom-one-dark.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ page, title, url, placeholder, content }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {page} | mjocc
        </title>
      </Head>
      <article className="container mb-10 mt-28 pb-10">
        <Link href={`/${page}`}>
          <a>
            <Image src={leftArrow} alt="back arrow" width={35} height={35} />
          </a>
        </Link>
        <h1 className="pt-3 pb-6 text-center font-heading text-7xl font-bold text-white">
          {title}
        </h1>
        {placeholder && (
          <div className="px-10 pb-6">
            <PlaceholderImage
              className="px-10"
              href={url}
              imgProps={placeholder.img}
              css={placeholder.css}
              alt="website screenshot"
            />
          </div>
        )}
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}
