import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import { defineMessages, useIntl } from 'react-intl';
import { Divider, Typography, Button } from 'antd';
import Layout from 'common/Layout';
import Footer from 'common/Footer';
import useSubnavigation from 'utils/hooks/useSubnavigation';
import { getCounter } from 'reducers/exampleReducer';
import { decrementCounter } from 'actions/exampleActions';
import { decrement as decrementSliceCounter, getCounter as getSliceCounter } from 'reducers/exampleSlice';

const { Paragraph } = Typography;

const About: NextPage<AboutProps> = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const decrement = () => dispatch(decrementCounter());
  const decrementSlice = () => dispatch(decrementSliceCounter());

  const counter: number = useSelector(getCounter);
  const sliceCounter: number = useSelector(getSliceCounter);

  const subMenuLinks = useSubnavigation();

  let breadcrumbItems = [];
  if (props.query && !Array.isArray(props.query)) {
    breadcrumbItems = [
      {
        key: 'about',
        label: intl.formatMessage(messages.about),
        url: '/about',
      },
      {
        key: props.query,
        label: intl.formatMessage(messages[props.query]) || props.query,
      },
    ];
  } else {
    breadcrumbItems = [
      {
        key: 'about',
        label: intl.formatMessage(messages.about),
      },
    ];
  }

  return (
    <Layout
      menuLinks={[
        { key: 'home', label: intl.formatMessage(messages.home), url: '/' },
        { key: 'about', label: intl.formatMessage(messages.about), url: '/about', active: true },
      ]}
      sideMenuLinks={subMenuLinks}
      breadcrumbItems={breadcrumbItems}
      footer={<Footer />}
    >
      <>
        <Divider orientation="left">{intl.formatMessage(messages.header)}</Divider>
        <Paragraph>{intl.formatMessage(messages.description)}</Paragraph>
        <div>
          {counter}
          {'  '}
          <Button type="primary" onClick={decrement}>
            {intl.formatMessage(messages.decrement)}
          </Button>
        </div>
        <div>
          {sliceCounter}
          {'  '}
          <Button onClick={decrementSlice}>{intl.formatMessage(messages.decrementSlice)}</Button>
        </div>
      </>
    </Layout>
  );
};

export default About;

About.getInitialProps = (context: NextPageContext) => ({
  query: context.query && context.query.query,
});

interface AboutProps {
  query: string | string[];
}

const messages = defineMessages({
  header: {
    id: 'components.About.header',
    defaultMessage: `Happy hacking`,
  },
  description: {
    id: 'components.About.description',
    defaultMessage: `Follow the guidance in the github repository and make sure you get 100% out of this project!`,
  },
  about: {
    id: 'components.About.about',
    defaultMessage: `About`,
  },
  home: {
    id: 'components.About.home',
    defaultMessage: `Home`,
  },
  page1: {
    id: 'components.About.page1',
    defaultMessage: `Sub-page1`,
  },
  page2: {
    id: 'components.About.page2',
    defaultMessage: `Sub-page2`,
  },
  decrement: {
    id: 'components.About.decrement',
    defaultMessage: `Try redux and decrement the counter`,
  },
  decrementSlice: {
    id: 'components.About.decrementSlice',
    defaultMessage: `Try @reduxjs/toolkit and decrement the slice counter`,
  },
});
