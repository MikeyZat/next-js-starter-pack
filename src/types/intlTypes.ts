import { IntlConfig } from 'react-intl';

export interface IntlProps {
  locale: IntlConfig['locale'];
  messages: IntlConfig['messages'];
}
