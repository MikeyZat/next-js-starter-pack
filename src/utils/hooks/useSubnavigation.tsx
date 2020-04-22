import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { HomeOutlined, NotificationOutlined } from '@ant-design/icons';

const useSubnavigation = (): SideMenuLink[] => {
  const intl = useIntl();

  const links = [
    {
      key: 'home',
      label: (
        <span>
          <HomeOutlined />
          {intl.formatMessage(messages.home)}
        </span>
      ),
      subLinks: [
        {
          key: 'home.page1',
          url: '/?query=page1',
          label: intl.formatMessage(messages.page1),
        },
        {
          key: 'home.page2',
          url: '/?query=page2',
          label: intl.formatMessage(messages.page2),
        },
      ],
    },
    {
      key: 'about',
      label: (
        <span>
          <NotificationOutlined />
          {intl.formatMessage(messages.about)}
        </span>
      ),
      subLinks: [
        {
          key: 'about.page1',
          url: '/about?query=page1',
          label: intl.formatMessage(messages.page1),
        },
        {
          key: 'about.page2',
          url: '/about?query=page2',
          label: intl.formatMessage(messages.page2),
        },
      ],
    },
  ];
  return links;
};

export default useSubnavigation;

interface SideMenuLink {
  key: string;
  label: React.ReactNode;
  url?: string;
  subLinks?: SideMenuLink[];
}

const messages = defineMessages({
  about: {
    id: 'utils.hooks.useSubnavigation.about',
    defaultMessage: `About`,
  },
  home: {
    id: 'utils.hooks.useSubnavigation.home',
    defaultMessage: `Home`,
  },
  page1: {
    id: 'utils.hooks.useSubnavigation.page1',
    defaultMessage: `Sub-page1`,
  },
  page2: {
    id: 'utils.hooks.useSubnavigation.page2',
    defaultMessage: `Sub-page2`,
  },
});
