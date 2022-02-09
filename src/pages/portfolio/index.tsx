import Layout from '@components/structure/Layout';
import Card from '@components/utilities/Card';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import { breakpoints } from '@lib/breakpoints';
import { ContentPropsType } from '@lib/content';
import { getPortfolioItems } from '@lib/portfolio';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Masonry from 'react-masonry-css';

type PropsType = { portfolio: ContentPropsType<typeof getPortfolioItems> };

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const portfolio = await getPortfolioItems();
  return { props: { portfolio } };
};

interface PortfolioPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const PortfolioPage: NextPage<PortfolioPageProps> = ({ portfolio }) => {
  const columnBreakpoints = {
    default: 4,
    [breakpoints.xl]: 3,
    [breakpoints.md]: 2,
    [breakpoints.sm]: 1,
  };
  return (
    <Layout>
      <Head>
        <title>Portfolio | mjocc</title>
      </Head>
      <div className="absolute inset-x-0 top-0 utils__visible-screen-height">
        <Masonry
          breakpointCols={columnBreakpoints}
          className="flex overflow-y-auto md:mt-10"
        >
          {portfolio.map((item) => (
            <Card
              key={item.data.slug}
              href={`/portfolio/${item.data.slug}`}
              className="m-2"
            >
              <PlaceholderImage
                imgProps={item.data.placeholder.img}
                css={item.data.placeholder.css}
                alt="website screenshot"
              />
              <Card.Body>
                <Card.Title>{item.data.title}</Card.Title>
                <Card.Text>{item.data.summary}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Masonry>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
