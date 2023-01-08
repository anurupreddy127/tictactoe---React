// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: 'true',
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'error',
    'arrow-body-style': [0],
    'prefer-arrow-callback': [0],
    'no-plusplus': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    'react/no-array-index-key': [0]
  }
};
