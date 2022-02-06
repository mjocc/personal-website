import LargeTextLayout from '@components/structure/LargeTextLayout';
import Button from '@components/utilities/StandardButton';
import Head from 'next/head';
import { FC } from 'react';

interface ErrorPageProps {
  code: number;
  message: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ code, message }) => (
  <LargeTextLayout noLayout>
    <Head>
      <title>
        {code}: {message}
      </title>
    </Head>
    <div className="utils__flex-center flex-col gap-5 text-center">
      <h1 className="font-heading text-9xl">{code}</h1>
      <h1 className="font-heading text-6xl text-zinc-300">{message}</h1>
      <Button color="emerald" href="/" className="mt-5 w-64">
        Back to home
      </Button>
    </div>
  </LargeTextLayout>
);

export default ErrorPage;
