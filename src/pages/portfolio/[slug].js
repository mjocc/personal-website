import { getPortfolioItem, getPortfolioSlugs } from '@lib/portfolio';

import Post from '@components/structure/Post';

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
    <Post
      page="portfolio"
      title={data.title}
      url={data.url}
      placeholder={data.placeholder}
      content={content}
    />
  );
}
