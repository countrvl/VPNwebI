module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-constructed-context-values': 0,
    'default-param-last': 0,
    'new-cap': [2, { capIsNewExceptions: ['List', 'Map', 'Set'] }],
    'react/no-multi-comp': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'comma-dangle': 0, // not sure why airbnb turned this on. gross!
    'no-alert': 0,
    'linebreak-style': 0,
    'eslint-disable-next-line': 0,
    'react/jsx-props-no-spreading': 0,
    camelcase: 'off',
    semi: ['error', 'always'],
    'no-console': 0,
    'no-underscore-dangle': 0,
    indent: [
      'error',
      2,
      {
        ignoredNodes: [
          'TemplateLiteral',
        ],
      },
    ],
    'template-curly-spacing': [
      'off',
    ],

  },
};
