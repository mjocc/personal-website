import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Blog | mjocc</title>
      </Head>

      <Navbar />

      <MainContent></MainContent>

      <Footer />
    </>
  );
}
