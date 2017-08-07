import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

const sheet = new ServerStyleSheet();
const main = sheet.collectStyles(<Main />);
const styleTags = sheet.getStyleElement();
const normalize = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
    position: relative;
  }

  button {
    cursor: pointer;
  }
`;

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Hipstaplate</title>
          <style type="text/css">{normalize}</style>
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
