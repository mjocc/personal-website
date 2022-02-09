import { MediaContextProvider } from '@lib/breakpoints';
import config from '@lib/config';
import '@styles/main.scss';
import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tippy.js/dist/tippy.css';


const Application = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="google-site-verification"
        content="FNF-VSEbfd8DAY1gaBiZfVedIlPnZKt-p01-aCDqv1k"
      />
      <meta name="description" content={config.site_description} />
      <meta name="keywords" content={config.site_keywords.join()} />
      <meta name="author" content={`@${config.twitter_account}`} />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://avatars.githubusercontent.com/u/61629073?v=4"
      />
    </Head>
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  </>
);

export default Application;
