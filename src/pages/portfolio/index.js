import Layout from '@components/structure/Layout';
import ArrowButton from '@components/utilities/ArrowButton';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
} from '@components/utilities/Card';
import PlaceholderImage from '@components/utilities/PlaceholderImage';
import { getPortfolioItems } from '@lib/portfolio';
import { gsap } from 'gsap';
import Head from 'next/head';
import { useEffect } from 'react';

export const getStaticProps = async () => {
  const portfolio = await getPortfolioItems();
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
      <div className="utils__height-visible-screen absolute inset-x-0 top-0 grid w-screen grid-cols-4">
        {portfolio.map((item, index) => (
          <div key={item.data.slug} className="utils__flex-center">
            <Card
              className={`mx-1
                ${
                  index % 2
                    ? 'top-card translate-y-6'
                    : 'bottom-card -translate-y-6'
                }`}
              href={`/portfolio/${item.data.slug}`}
            >
              <PlaceholderImage
                imgProps={item.data.placeholder.img}
                css={item.data.placeholder.css}
                alt="website screenshot"
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
