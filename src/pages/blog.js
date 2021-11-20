import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import PlaceholderImage from '@components/PlaceholderImage';

import { getPlaiceholder } from 'plaiceholder';

export const getStaticProps = async () => {
  const { img, css } = await getPlaiceholder('/images/header-background.jpg');
  return { props: { img, css } };
};

export default function Portfolio({ img: imgProps, css }) {
  return (
    <>
      <Head>
        <title>Blog | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div className="w-1/2 h-1/2">
          <PlaceholderImage imgProps={imgProps} css={css} alt="landscape" />
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
