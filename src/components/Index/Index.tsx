import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { defineMessages, useIntl } from 'react-intl';
import { Divider, Button } from 'antd';
import Layout from 'common/Layout';
import Footer from 'common/Footer';
import useSubnavigation from 'utils/hooks/useSubnavigation';
import { getCounter } from 'reducers/exampleReducer';
import { incrementCounter } from 'actions/exampleActions';
import { increment as incrementSliceCounter, getCounter as getSliceCounter } from 'reducers/exampleSlice';

const Index: NextPage<IndexProps> = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementCounter());
  const incrementSlice = () => dispatch(incrementSliceCounter());

  const counter: number = useSelector(getCounter);
  const sliceCounter: number = useSelector(getSliceCounter);

  const subMenuLinks = useSubnavigation();

  let breadcrumbItems = [];
  if (props.query && !Array.isArray(props.query)) {
    breadcrumbItems = [
      {
        key: 'home',
        label: intl.formatMessage(messages.home),
        url: '/',
      },
      {
        key: props.query,
        label: intl.formatMessage(messages[props.query]) || props.query,
      },
    ];
  } else {
    breadcrumbItems = [
      {
        key: 'home',
        label: intl.formatMessage(messages.home),
      },
    ];
  }

  return (
    <Layout
      menuLinks={[
        { key: 'home', label: intl.formatMessage(messages.home), url: '/', active: true },
        { key: 'about', label: intl.formatMessage(messages.about), url: '/about' },
      ]}
      sideMenuLinks={subMenuLinks}
      breadcrumbItems={breadcrumbItems}
      footer={<Footer />}
    >
      <>
        <Divider orientation="left">{intl.formatMessage(messages.header)}</Divider>
        <div>
          {counter}{' '}
          <Button type="primary" onClick={increment}>
            {intl.formatMessage(messages.increment)}
          </Button>
        </div>
        <div>
          {sliceCounter} <Button onClick={incrementSlice}>{intl.formatMessage(messages.incrementSlice)}</Button>
        </div>
      </>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = (context: NextPageContext) => ({
  query: context.query && context.query.query,
});

interface IndexProps {
  query: string | string[];
}

const messages = defineMessages({
  header: {
    id: 'components.Index.header',
    defaultMessage: `Welcome to the next-js starter pack`,
  },
  about: {
    id: 'components.Index.about',
    defaultMessage: `About`,
  },
  home: {
    id: 'components.Index.home',
    defaultMessage: `Home`,
  },
  page1: {
    id: 'components.Index.page1',
    defaultMessage: `Sub-page1`,
  },
  page2: {
    id: 'components.Index.page2',
    defaultMessage: `Sub-page2`,
  },
  increment: {
    id: 'components.Index.increment',
    defaultMessage: `Try redux and increment the counter`,
  },
  incrementSlice: {
    id: 'components.Index.incrementSlice',
    defaultMessage: `Try @reduxjs/toolkit and increment the slice counter`,
  },
});
