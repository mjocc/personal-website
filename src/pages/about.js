
import Head from 'next/head';
import Layout from '@components/Layout';

import utils from '@styles/Utilities.module.scss';

const HeaderText = ({ className = '', children }) => (
  <h1 className={`text-white font-heading text-8xl ${className}`}>
    {children}
  </h1>
);

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | mjocc</title>
      </Head>

    </Layout>
  );
}
