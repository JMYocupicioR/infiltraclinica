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
          {/* Facebook SDK */}
          <div id="fb-root"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId: '',
                    cookie: true,
                    xfbml: true,
                    version: 'v18.0'
                  });
                };
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
