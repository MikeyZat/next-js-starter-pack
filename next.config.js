/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    // ALIASES
    config.resolve.alias['common'] = path.resolve(__dirname, 'src/components/common');
    config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['actions'] = path.resolve(__dirname, 'src/actions');
    config.resolve.alias['reducers'] = path.resolve(__dirname, 'src/reducers');
    config.resolve.alias['types'] = path.resolve(__dirname, 'src/types');
    config.resolve.alias['utils'] = path.resolve(__dirname, 'src/utils');
    // HOT RELOADING

    if (dev) {
      config.watchOptions = {
        ignored: ['node_modules/', '.next/'],
      };
    }

    return config;
  },
};
