module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'eol-last': 'off',
    'no-useless-return': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'react/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'prefer-destructuring': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    camelcase: 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'default-case': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
