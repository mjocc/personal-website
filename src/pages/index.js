import { useEffect } from 'react';

import Head from 'next/head';
import Script from 'next/script';
import Layout from '@components/structure/Layout';
import SocialMediaIcons from '@components/items/SocialMediaIcons';

import utils from '@styles/Utilities.module.scss';

const HeaderText = ({ className = '', children }) => (
  <h1 className={`text-white font-heading text-8xl ${className}`}>
    {children}
  </h1>
);

export default function Home() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Home | mjocc</title>
      </Head>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />

      <div className={`${utils.flexCenter} sm:w-screen sm:h-screen`}>
        <div className="flex flex-col fade">
          <HeaderText>Hi,</HeaderText>
          <HeaderText>I'm Matthew,</HeaderText>
          <HeaderText>Web developer</HeaderText>

          <SocialMediaIcons className="pl-2 mt-7" width="350px" />
        </div>
      </div>
    </Layout>
  );
}
