import Post from '@components/structure/Post';
import { ContentPropsType, PathObject } from '@lib/content';
import { getPortfolioItem, getPortfolioSlugs } from '@lib/portfolio';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPortfolioSlugs();
  return {
    paths: slugs,
    fallback: false,
  };
};

type PropsType = ContentPropsType<typeof getPortfolioItem>;

export const getStaticProps: GetStaticProps<PropsType, PathObject> = async (
  context
) => {
  const portfolioItem = await getPortfolioItem(context.params!.slug);
  return { props: portfolioItem };
};

interface PortfolioItemPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const PortfolioItemPage: FC<PortfolioItemPageProps> = ({ content, data }) => (
  <Post
    page="portfolio"
    title={data.title}
    url={data.url}
    placeholder={data.placeholder}
    content={content}
  />
);

export default PortfolioItemPage;
