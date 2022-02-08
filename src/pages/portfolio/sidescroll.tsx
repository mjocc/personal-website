import Layout from '@components/structure/Layout';
import Card from '@components/utilities/Card';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import { ContentPropsType } from '@lib/content';
import { getPortfolioItems } from '@lib/portfolio';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

type PropsType = { portfolio: ContentPropsType<typeof getPortfolioItems> };

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const portfolio = await getPortfolioItems();
  return { props: { portfolio } };
};

interface PortfolioProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const Portfolio: NextPage<PortfolioProps> = ({ portfolio }) => (
  <Layout>
    <Head>
      <title>Portfolio | mjocc</title>
    </Head>
    <div className="utils__visible-screen-height absolute inset-x-0 top-0 flex snap-x overflow-x-auto">
      {portfolio.map((item, index) => (
        <div key={item.data.slug} className="utils__flex-center min-w-[25vw]">
          <Card
            className={`animate__animated mx-1 snap-start scroll-mx-1
                ${
                  index % 2
                    ? 'top-card animate__slideInDown mb-10'
                    : 'bottom-card animate__slideInUp mt-10'
                }`}
            href={`/portfolio/${item.data.slug}`}
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
        </div>
      ))}
    </div>
  </Layout>
);

export default Portfolio;
