import { getPost, getPostSlugs } from '@lib/posts';

import Head from 'next/head';
import Layout from '@components/Layout';

export const getStaticPaths = async () => {
  const slugs = await getPostSlugs();
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { content, data } = await getPost(context.params.slug);
  return { props: { content, data } };
};

export default function BlogPost({ content, data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title} | blog | mjocc</title>
      </Head>
      <article className="container pb-10 mb-10 mt-28">
        <h1 className="pb-6 font-bold text-center text-white font-heading text-7xl">
          {data.title}
        </h1>
        <div
          className="text-lg text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}
