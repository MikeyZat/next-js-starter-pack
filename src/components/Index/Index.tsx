import React from 'react';
import { NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';
import { DatePicker } from 'antd';

const Index: NextPage<IndexProps> = (props) => {
  const intl = useIntl();

  return (
    <div>
      <div>{props.name}</div>
      <div>{props.name}</div>
      <div>{props.name}</div>
      <div>{intl.formatMessage(messages.description)}</div>
      <DatePicker />
    </div>
  );
};

export default Index;

Index.getInitialProps = () => {
  return {
    name: "Hello, what's your wish",
  };
};

interface IndexProps {
  name: string;
}

const messages = defineMessages({
  description: {
    id: 'components.Index.description',
    defaultMessage: `Welcome to Mikey's app`,
  },
});
