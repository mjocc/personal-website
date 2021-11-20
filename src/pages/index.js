import Head from 'next/head';
import Script from 'next/script';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import SocialMediaIcons from '@components/SocialMediaIcons';

import utils from '@styles/Utilities.module.scss';

const HeaderText = ({ className = '', children }) => (
  <h1 className={`text-white font-heading text-8xl ${className}`}>
    {children}
  </h1>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | mjocc</title>
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <Navbar />

      <MainContent>
        <div className={`${utils.flexCenter} sm:w-screen sm:h-screen`}>
          <div className="flex flex-col fade">
            <HeaderText>Hi,</HeaderText>
            <HeaderText>I'm Matthew,</HeaderText>
            <HeaderText>Web developer</HeaderText>

            <SocialMediaIcons className="pl-2 mt-5" width="350px" />
          </div>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
