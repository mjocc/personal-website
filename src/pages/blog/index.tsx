import BlogPostSummary from '@components/items/BlogPostSummary';
import Layout from '@components/structure/Layout';
import { ContentPropsType } from '@lib/content';
import { getPosts } from '@lib/blog';
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

export default Blog;
