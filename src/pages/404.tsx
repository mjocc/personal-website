import LargeTextLayout from '@components/structure/LargeTextLayout';
import Button from '@components/utilities/StandardButton';
import { NextPage } from 'next';
import Head from 'next/head';

const Error404Page: NextPage = () => (
  <LargeTextLayout noLayout>
    <Head>
      <title>404: This page could not be found</title>
    </Head>
    <div className="utils__flex-center flex-col gap-5 text-center">
      <h1 className="font-heading text-9xl">404</h1>
      <h1 className="font-heading text-6xl text-zinc-300">
        This page could not be found
      </h1>
      <Button color="emerald" href="/" className="mt-5 w-64">
        Back to home
      </Button>
    </div>
  </LargeTextLayout>
);

export default Error404Page;
