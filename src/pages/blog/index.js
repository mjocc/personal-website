import BlogPostSummary from '@components/items/BlogPostSummary';
import Layout from '@components/structure/Layout';
import { getPosts } from '@lib/posts';
import Head from 'next/head';

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog | mjocc</title>
      </Head>
      <div className="item-center flex h-3/4 w-3/4 flex-col p-20">
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
