import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/Layout';
import PlaceholderImage from '@components/PlaceholderImage';

import leftArrow from '@images/arrow-left.svg';

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
        <h1 className="pb-6 pt-3 text-center text-white font-heading text-7xl font-bold">
          {title}
        </h1>
        {placeholder && (
          <div className="pb-6 px-10">
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
          className="text-white text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}
