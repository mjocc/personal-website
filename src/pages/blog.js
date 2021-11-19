import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder(
    '/images/header-background.jpg'
  );
  return { props: { imageProps: { ...img, blurDataURL: base64 } } };
};

export default function Portfolio({ imageProps }) {
  return (
    <>
      <Head>
        <title>Blog | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <Image {...imageProps} placeholder="blur" />
      </MainContent>

      <Footer />
    </>
  );
}
