const _index = `import * as React from 'react';

export default (): JSX.Element => (
  <div>
    <h1>Hello!</h1>
  </div>
);

`;

const _document = `import * as React from 'react';
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
          <title>Blank application</title>
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

`;

module.exports = [
  { path: './app/pages/index.tsx', content: _index, name: 'index.tsx' },
  { path: './app/pages/_document.tsx', content: _document, name: '_document.tsx' }
];
