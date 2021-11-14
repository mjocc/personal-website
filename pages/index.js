import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | mjocc</title>
      </Head>

      <MainContent>
        <Navbar />
      </MainContent>

      <Footer />
    </>
  );
}
