import { getPortfolioItem, getPortfolioSlugs } from '@lib/portfolio';

import Head from 'next/head';
import Layout from '@components/Layout';
import PlaceholderImage from '@components/PlaceholderImage';

export const getStaticPaths = async () => {
  const slugs = await getPortfolioSlugs();
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { content, data } = await getPortfolioItem(context.params.slug);
  return { props: { content, data } };
};

export default function BlogPost({ content, data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title} | portfolio | mjocc</title>
      </Head>
      <article className="container pb-10 mb-10 mt-28">
        <h1 className="pb-6 font-bold text-center text-white font-heading text-7xl">
          {data.title}
        </h1>
        <div className="px-10 pb-6">
          <PlaceholderImage
            className="px-10"
            href={data.url}
            imgProps={data.placeholder.img}
            css={data.placeholder.css}
            alt="website screenshot"
          />
        </div>
        <div
          className="text-lg text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}
