import Head from 'next/head';

import '@styles/globals.css';

function Application({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>
  );
}

export default Application;
