import Post from '@components/structure/Post';
import { getPost, getPostSlugs } from '@lib/blog';
import { ContentPropsType, PathObject } from '@lib/content';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

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

interface BlogPostPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ content, data }) => (
  <Post
    page="blog"
    title={data.title}
    titleSize="text-6xl"
    date={data.date}
    content={content}
  />
);

export default BlogPostPage;
