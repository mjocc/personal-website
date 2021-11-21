import { getPosts } from '@lib/posts';

import Head from 'next/head';
import Layout from '@components/Layout';
import BlogPostSummary from '@components/BlogPostSummary';

export const getStaticProps = async () => {
  let posts = await getPosts();
  return { props: { posts } };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog | mjocc</title>
      </Head>
      <div className="flex flex-col justify-center w-3/4 mt-20 item-center h-3/4">
        {posts.map((post) => (
          <BlogPostSummary
            key={post.data.slug}
            slug={post.data.slug}
            title={post.data.title}
            date={post.data.date}
            className="mt-5"
          />
        ))}
      </div>
    </Layout>
  );
}
