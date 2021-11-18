import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import SocialMediaIcons from '@components/SocialMediaIcons';

import utils from '@styles/Utilities.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | mjocc</title>
      </Head>

      <Navbar />

      <MainContent>
        <div className={`${utils.flexCenter} sm:w-screen sm:h-screen`}>
          <div className="fade flex flex-col">
            <h1 className="text-white font-heading text-8xl">Hi, I'm</h1>
            <h1 className="text-white font-heading text-9xl">Matthew</h1>
            <h2 className="text-white font-heading text-5xl">Web developer</h2>
            <SocialMediaIcons className="mt-5 pl-2" width="350px" />
          </div>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
