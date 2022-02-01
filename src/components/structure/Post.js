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
      <article className="container relative pb-10 mt-4 mb-10">
        <div className="relative pb-12">
          <div className="sticky top-0 left-0 pt-24 ml-10">
            <Link href={`/${page}`}>
              <a>
                <Image
                  src={leftArrow}
                  alt="back arrow"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
          </div>
          <h1 className="font-bold text-center text-white font-heading text-7xl">
            {title}
          </h1>
        </div>
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
          className="mx-auto prose prose-lg prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}
