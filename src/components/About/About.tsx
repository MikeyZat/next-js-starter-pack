import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { defineMessages, useIntl } from 'react-intl';
import { Divider, Typography } from 'antd';
import Layout from 'common/Layout';
import Footer from 'common/Footer';
import useSubnavigation from 'hooks/useSubnavigation';

const { Paragraph } = Typography;

const About: NextPage<AboutProps> = (props) => {
  const intl = useIntl();

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
});
