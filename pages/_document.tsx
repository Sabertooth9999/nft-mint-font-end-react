import React from 'react';
// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
// MUI Core
import { ServerStyleSheet as StyleServerStyleSheet } from 'styled-components';
import { ServerStyleSheets} from '@mui/styles';
// Utils
import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const styleSheets = new StyleServerStyleSheet(); 
  const originalRenderPage = ctx.renderPage;
  try{
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => styleSheets.collectStyles(sheets.collect(<App {...props} />)),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheets.getStyleElement(),
          styleSheets.getStyleElement()
        ],
      };
    } finally {
      styleSheets.seal;
    }
};

export default MyDocument;