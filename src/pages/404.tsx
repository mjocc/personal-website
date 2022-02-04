import LargeTextLayout from '@components/structure/LargeTextLayout';
import Button from '@components/utilities/StandardButton';
import Head from 'next/head';
import { FC } from 'react';

const Error404Page: FC = () => (
  <LargeTextLayout>
    <Head>
      <title>404: This page could not be found</title>
    </Head>
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-heading text-9xl">404</h1>
      <h1 className="font-heading text-6xl text-zinc-300">
        This page could not be found
      </h1>
      <div className="flex-grow flex">
        <Button color="emerald">Back to home</Button>
      </div>
    </div>
  </LargeTextLayout>
);

export default Error404Page;
