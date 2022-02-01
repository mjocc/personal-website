import Layout from '@components/structure/Layout';
import Head from 'next/head';

const HeaderText = ({ className = '', children }) => (
  <h1 className={`font-heading text-8xl text-white ${className}`}>
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
