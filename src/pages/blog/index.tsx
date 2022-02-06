import BlogPostSummary from '@components/items/BlogPostSummary';
import Layout from '@components/structure/Layout';
import { ContentPropsType } from '@lib/content';
import { getPosts } from '@lib/posts';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

type PropsType = { posts: ContentPropsType<typeof getPosts> };

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

interface BlogProps extends InferGetStaticPropsType<typeof getStaticProps> {}

const Blog: NextPage<BlogProps> = ({ posts }) => (
  <Layout>
    <Head>
      <title>Blog | mjocc</title>
    </Head>
    <div className="flex flex-col w-3/4 p-20 item-center h-3/4">
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

export default Blog;
