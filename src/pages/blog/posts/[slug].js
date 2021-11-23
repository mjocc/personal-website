import { getPost, getPostSlugs } from '@lib/posts';

import Post from '@components/structure/Post';

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
  return <Post page="blog" title={data.title} content={content} />;
}
