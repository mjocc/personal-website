import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import PlaceholderImage from '@components/PlaceholderImage';

import { getPlaceholders } from '@lib/placeholder';

export const getStaticProps = async () => {
  const placeholders = await getPlaceholders(['/images/header-background.jpg']);
  return { props: { placeholders } }
};

export default function Portfolio({ placeholders }) {
  const image = placeholders['/images/header-background.jpg'];
  console.log(image);
  return (
    <>
      <Head>
        <title>Blog | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div className="w-3/4">
          <PlaceholderImage
            imgProps={image.img}
            css={image.css}
            alt="landscape"
          />
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
