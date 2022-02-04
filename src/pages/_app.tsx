import ProvideContext from '@components/utilities/ProvideContext';
import { SiteConfigContext } from '@lib/config';
import '@styles/main.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="FNF-VSEbfd8DAY1gaBiZfVedIlPnZKt-p01-aCDqv1k"
        />
        <meta name="description" content="Personal website and portfolio" />
        <meta
          name="keywords"
          content="full stack web developer,github,python,html,css,javascript,nodejs,vue,django"
        />
        <meta name="author" content="mjocc" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://avatars.githubusercontent.com/u/61629073?v=4"
        />
      </Head>
      <ProvideContext>
        <Component {...pageProps} />
      </ProvideContext>
    </>
  );
};

export default Application;
