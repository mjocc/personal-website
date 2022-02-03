import Layout from '@components/structure/Layout';
import Card from '@components/utilities/Card';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import { getPortfolioItems } from '@lib/portfolio';
import chunk from 'lodash/chunk';
import Head from 'next/head';
import { useState } from 'react';

export const getStaticProps = async () => {
  const portfolio = await getPortfolioItems();
  return { props: { portfolio } };
};

export default function Portfolio({ portfolio: fullPortfolio }) {
  const portfolioChunks = chunk(fullPortfolio, 4);
  const [chunkIndex, setChunkIndex] = useState(0);
  const getCurrentChunk = () => portfolioChunks[chunkIndex];

  const showRightArrow = () => !!portfolioChunks[chunkIndex + 1];
  const showLeftArrow = () => !!portfolioChunks[chunkIndex - 1];

  return (
    <Layout>
      <Head>
        <title>Portfolio | mjocc</title>
      </Head>
      <div className="utils__visible-screen-height absolute inset-x-0 top-0 flex snap-x overflow-x-auto">
        {fullPortfolio.map((item, index) => (
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
      {/* {showRightArrow() && (
        <ArrowButton
          orientation="right"
          onClick={() => setChunkIndex((index) => index + 1)}
        />
      )}
      {showLeftArrow() && (
        <ArrowButton
          orientation="left"
          onClick={() => setChunkIndex((index) => index - 1)}
        />
      )} */}
    </Layout>
  );
}
