import React from 'react';
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';
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
        <Head />
        <body>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
