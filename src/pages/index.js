import Head from 'next/head';
import MainContent from '@components/MainContent';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import SocialMediaIcons from '@components/SocialMediaIcons';

import utils from '@styles/Utilities.module.scss';

const HeaderText = ({ className = '', children }) => <h1 className={`text-white font-heading text-8xl ${className}`}>{children}</h1>

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
            <HeaderText>Hi,</HeaderText>
            <HeaderText>I'm Matthew,</HeaderText>
            <HeaderText>Web developer</HeaderText>
          
            <SocialMediaIcons className="mt-5 pl-2" width="350px" />
          </div>
        </div>
      </MainContent>

      <Footer />
    </>
  );
}
