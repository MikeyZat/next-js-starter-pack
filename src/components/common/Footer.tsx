import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Button } from 'antd';

const Footer = () => {
  const intl = useIntl();
  const repoUrl = 'https://github.com/MikeyZat/next-js-starter-pack';

  return (
    <Button type="link" href={repoUrl} target="_blank">
      {intl.formatMessage(messages.visitGithub)}
    </Button>
  );
};

export default Footer;

const messages = defineMessages({
  visitGithub: {
    id: 'components.common.Footer',
    defaultMessage: `Visit the github repository.`,
  },
});
