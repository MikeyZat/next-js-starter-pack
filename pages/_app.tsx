import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/dist/client/router';
// @ts-ignore
import stylesheet from 'antd/dist/antd.min.css';
import { IntlProps } from 'src/types/intlTypes';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

// Typescript
declare global {
  interface Window {
    __NEXT_DATA__: {
      props: IntlProps;
    };
  }
}

export default class MyApp extends App<IntlProps> {
  static async getInitialProps({ Component, ctx }: AppContextType<Router>) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    // @ts-ignore
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale, messages };
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache
    );

    return (
      <RawIntlProvider value={intl}>
        <Head>
          <title>Default title</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <Component {...pageProps} />
      </RawIntlProvider>
    );
  }
}
