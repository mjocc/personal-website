import { useEffect } from 'react';
import { gsap } from 'gsap';
import { getPlaiceholder } from 'plaiceholder';

import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { Card, CardBody, CardTitle, CardText } from '@components/Card';
import PlaceholderImage from '@components/PlaceholderImage';
import ArrowButton from '@components/ArrowButton';

import utils from '@styles/Utilities.module.scss';

export const getStaticProps = async () => {
  const { img, css } = await getPlaiceholder('/images/header-background.jpg');
  return { props: { img, css } };
};

export default function Portfolio({ img: imgProps, css }) {
  useEffect(() => {
    runAnimation({
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
  }, []); // will only run on initial render
  return (
    <>
      <Head>
        <title>Portfolio | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div
          className={`absolute grid w-screen grid-cols-4 top-0 inset-x-0 ${utils.heightVisibleScreen}`}
        >
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative">
              <Card
                className={`absolute mx-1
                ${
                  num % 2
                    ? 'top-card top-[200px]'
                    : 'bottom-card bottom-[200px]'
                }`}
              >
                <PlaceholderImage
                  imgProps={imgProps}
                  css={css}
                  alt="landscape"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        <ArrowButton orientation="right" />
      </MainContent>

      <Footer />
    </>
  );
}

function runAnimation({ card, arrowButton }) {
  const { y: cardY, ...otherCard } = card;
  gsap.from('.top-card', { y: -cardY, ...otherCard });
  gsap.from('.bottom-card', {
    y: cardY,
    delay: card.stagger / 2,
    ...otherCard,
  });
  gsap.from('.arrow-button-right', {
    delay: card.duration + card.stagger * 1.5,
    ...arrowButton,
  });
}
