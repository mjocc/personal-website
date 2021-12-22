import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-zinc-800 selection:bg-emerald-600/50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
