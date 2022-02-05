import Post from '@components/structure/Post';
import { ContentPropsType, PathObject } from '@lib/content';
import { getPost, getPostSlugs } from '@lib/posts';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs();
  return {
    paths: slugs,
    fallback: false,
  };
};

type PropsType = ContentPropsType<typeof getPost>;

export const getStaticProps: GetStaticProps<PropsType, PathObject> = async (
  context
) => {
  const post = await getPost(context.params!.slug);
  return { props: post };
};

interface BlogPostProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogPost: FC<BlogPostProps> = ({ content, data }) => {
  return <Post page="blog" title={data.title} content={content} />;
};

export default BlogPost;
