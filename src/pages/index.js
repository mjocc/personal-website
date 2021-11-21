import { useEffect } from 'react';

import Head from 'next/head';
import Script from 'next/script';
import Layout from '@components/Layout';
import SocialMediaIcons from '@components/SocialMediaIcons';

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
        <div className="fade flex flex-col">
          <HeaderText>Hi,</HeaderText>
          <HeaderText>I'm Matthew,</HeaderText>
          <HeaderText>Web developer</HeaderText>

          <SocialMediaIcons className="mt-5 pl-2" width="350px" />
        </div>
      </div>
    </Layout>
  );
}
