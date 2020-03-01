import React from 'react';
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';
// @ts-ignore
import stylesheet from 'antd/dist/antd.min.css';

import { IntlProps } from 'src/types/intlTypes';
// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

export default class IntlDocument extends Document<{ localeDataScript: string } & IntlProps> {
  static async getInitialProps(context: DocumentContext) {
    const props = await super.getInitialProps(context);
    const {
      // @ts-ignore
      req: { locale, localeDataScript },
    } = context;
    return {
      ...props,
      locale,
      localeDataScript,
    };
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v3/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;

    return (
      <html>
        <Head>
          <title>Default title</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: stylesheet || this.props.localeDataScript,
            }}
          />
        </body>
      </html>
    );
  }
}
