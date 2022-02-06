import Layout from '@components/structure/Layout';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import leftArrow from '@images/arrow-left.svg';
import 'highlight.js/styles/atom-one-dark.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IGetPlaiceholderReturn } from 'plaiceholder';
import { FC } from 'react';
import dateFormat from 'dateformat';

interface PostProps {
  page: string;
  title: string;
  titleSize?: string;
  date?: string;
  content: string;
  url?: string;
  placeholder?: IGetPlaiceholderReturn;
}

const Post: FC<PostProps> = ({
  page,
  title,
  titleSize = 'text-7xl',
  date,
  url,
  placeholder,
  content,
}) => (
  <Layout>
    <Head>
      <title>
        {title} | {page} | mjocc
      </title>
    </Head>
    <article className="container relative mt-4 mb-10 pb-10">
      <div className="sticky top-0 left-0 ml-10 pt-24">
        <Link href={`/${page}`}>
          <a>
            <Image src={leftArrow} alt="back arrow" width={35} height={35} />
          </a>
        </Link>
      </div>
      <span className="text-lg absolute right-0 top-0 mt-24 ml-auto font-semibold text-zinc-400">
        {dateFormat(date, 'dS mmmm, yyyy')}
      </span>
      <h1
        className={`px-24 pb-12 text-center font-heading font-bold text-white ${titleSize}`}
      >
        {title}
      </h1>
      {placeholder && url && (
        <div className="px-10 pb-6">
          <PlaceholderImage
            href={url}
            imgProps={placeholder.img}
            css={placeholder.css}
            alt="website screenshot"
          />
        </div>
      )}
      <div
        className="prose prose-lg prose-invert mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  </Layout>
);

export default Post;
