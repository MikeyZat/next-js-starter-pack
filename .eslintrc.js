module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'react-app',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-intl', 'import'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-tabs': 2,
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [1, 'as-needed'],
    'array-callback-return': 2,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'default-case': 1,
    'default-param-last': 0,
    eqeqeq: 1,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': [
      1,
      {
        code: 120,
      },
    ],
    'newline-per-chained-call': 0,
    'new-cap': 1,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'no-template-curly-in-string': 1,
    'no-param-reassign': 0,
    'no-useless-return': 1,
    'padded-blocks': 0,
    'prefer-template': 2,
    'prefer-destructuring': 1,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-no-literals': [1, { noStrings: true }],
    'react/no-find-dom-node': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react-intl/string-is-marked-for-translation': 2,
    'require-yield': 0,
    'import/no-webpack-loader-syntax': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
