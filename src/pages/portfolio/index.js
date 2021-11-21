import { useEffect } from 'react';
import { gsap } from 'gsap';
import { getPortfolioItems } from '@lib/portfolio';

import Head from 'next/head';
import Layout from '@components/Layout';
import { Card, CardBody, CardTitle, CardText } from '@components/Card';
import PlaceholderImage from '@components/PlaceholderImage';
import ArrowButton from '@components/ArrowButton';

import utils from '@styles/Utilities.module.scss';

export const getStaticProps = async () => {
  let portfolio = await getPortfolioItems();
  return { props: { portfolio } };
};

export default function Portfolio({ portfolio }) {
  useEffect(() => {
    runAnimation(portfolio.length, {
      card: {
        duration: 2,
        stagger: 1.5,
        ease: 'expo.out',
        y: 700,
      },
      arrowButton: {
        duration: 1,
        x: 100,
        ease: 'elastic.out(0.75, 0.5)',
      },
    });
  }, [portfolio.length]); // will only run on initial render
  return (
    <Layout>
      <Head>
        <title>Portfolio | mjocc</title>
      </Head>
      <div
        className={`absolute grid w-screen grid-cols-4 top-0 inset-x-0 ${utils.heightVisibleScreen}`}
      >
        {portfolio.map((item, index) => (
          <div key={item.data.slug} className="relative">
            <Card
              className={`absolute mx-1
                ${
                  index % 2
                    ? 'top-card top-[200px]'
                    : 'bottom-card bottom-[200px]'
                }`}
              href={`/portfolio/${item.data.slug}`}
            >
              <PlaceholderImage
                imgProps={item.data.placeholder.img}
                css={item.data.placeholder.css}
                alt="landscape"
              />
              <CardBody>
                <CardTitle>{item.data.title}</CardTitle>
                <CardText>{item.data.summary}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      {portfolio.length > 4 && <ArrowButton orientation="right" />}
    </Layout>
  );
}

function runAnimation(len, { card, arrowButton }) {
  const { y: cardY, ...otherCard } = card;
  gsap.from('.bottom-card', { y: cardY, ...otherCard });
  if (len >= 2) {
    gsap.from('.top-card', {
      y: -cardY,
      delay: card.stagger / 2,
      ...otherCard,
    });
    if (len > 4) {
      gsap.from('.arrow-button-right', {
        delay: card.duration + card.stagger * ((len - 1) / 2),
        ...arrowButton,
      });
    }
  }
}
