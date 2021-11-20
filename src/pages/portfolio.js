import anime from 'animejs';
import { useEffect } from 'react';
import { getPlaiceholder } from 'plaiceholder';

import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from '@components/Card';
import ArrowButton from '@components/ArrowButton';

import utils from '@styles/Utilities.module.scss';

function runAnimation() {
  let commonSettings = {
    duration: 3000,
    easing: 'easeInOutExpo',
  };
  anime({
    targets: '.top-card',
    translateY: 700,
    delay: anime.stagger(1000, { start: 250 }),
    ...commonSettings,
  }),
    anime({
      targets: '.bottom-card',
      translateY: -700,
      delay: anime.stagger(1000, { start: 750 }),
      ...commonSettings,
    }),
    anime({
      targets: '.arrow-button-right',
      translateX: -72,
      delay: 4000,
    });
  anime({
    targets: '.arrow-button-left',
    translateX: 72,
    delay: 4000,
  });
}

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder(
    '/images/header-background.jpg'
  );
  return { props: { imageProps: { ...img, blurDataURL: base64 } } };
};

export default function Portfolio({ imageProps }) {
  useEffect(() => {
    runAnimation();
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
                className={`absolute mx-1 ${
                  num % 2
                    ? 'top-card top-[-600px]'
                    : 'bottom-card bottom-[-600px]'
                }`}
              >
                <CardImage {...imageProps} alt="landscape" />
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