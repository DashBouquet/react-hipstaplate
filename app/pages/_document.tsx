import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

const sheet = new ServerStyleSheet();
const main = sheet.collectStyles(<Main />);
const styleTags = sheet.getStyleElement();

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Hipstaplate</title>
          <link rel="stylesheet" type="text/css" href="/static/css/normalize.css" />
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
