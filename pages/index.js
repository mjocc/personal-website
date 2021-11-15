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

      <MainContent>
        <Navbar />

        <div className={`${utils.flexCenter} sm:w-screen sm:h-screen`}>
          <div className="flex flex-col">
            <h1 className="text-8xl font-heading text-white">Hi, I'm</h1>
            <h1 className="text-9xl font-heading text-white">Matthew</h1>
            <h2 className="text-5xl font-heading text-white">Web developer</h2>
            <SocialMediaIcons className="mt-5 pl-2" width="350px" />
          </div>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
