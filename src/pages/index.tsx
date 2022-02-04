import SocialMediaIcons from '@components/items/SocialMediaIcons';
import LargeTextLayout from '@components/structure/LargeTextLayout';
import Layout from '@components/structure/Layout';
import HeaderText from '@components/utilities/HeaderText';
import netlifyIdentity from 'netlify-identity-widget';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('init', (user) => {
      if (!user) {
        netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }, []);
  return (
    <LargeTextLayout>
      <Head>
        <title>Web developer & student | mjocc</title>
      </Head>
      <HeaderText className="pb-2 text-9xl text-emerald-500" text="mjocc" />
      <HeaderText className="text-zinc-100" text="web developer" />
      <HeaderText className="text-7xl text-zinc-300" text="& student" />

      <SocialMediaIcons className="mt-7 pl-2" width="350px" noShadow />
    </LargeTextLayout>
  );
};

export default HomePage;
