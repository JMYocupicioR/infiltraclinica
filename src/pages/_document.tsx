import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { SITE_CONFIG } from '@/lib/seo';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es" dir="ltr">
        <Head>
          <meta name="application-name" content={SITE_CONFIG.name} />
          <meta name="color-scheme" content="light" />
          <meta name="msapplication-TileColor" content="#106D78" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
        </Head>
        <body className="bg-white text-slate-800 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
