import React from 'react';
import { NextPage } from 'next';
import { defineMessages, useIntl } from 'react-intl';

const Index: NextPage<IndexProps> = (props) => {
  const intl = useIntl();

  return (
    <div>
      <div>{props.name}</div>
      <div>{intl.formatMessage(messages.description)}</div>
    </div>
  );
};

export default Index;

Index.getInitialProps = () => {
  return {
    name: 'Hello',
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
