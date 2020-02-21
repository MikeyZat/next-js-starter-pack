/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  webpack: (config) => {
    // ALIASES
    config.resolve.alias['common'] = path.resolve(__dirname, 'src/components/common');
    config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['hooks'] = path.resolve(__dirname, 'src/utils/hooks');
    config.resolve.alias['actions'] = path.resolve(__dirname, 'src/actions');
    config.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers');

    return config;
  },
};
