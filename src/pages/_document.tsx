import { mediaStyles } from '@lib/breakpoints';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
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
