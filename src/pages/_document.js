import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body class="bg-zinc-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
