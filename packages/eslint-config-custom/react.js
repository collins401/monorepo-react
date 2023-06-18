module.exports = {
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@antfu/eslint-config-ts',
  ],
  'settings': {
    react: {
      version: '18.0',
    },
  },
  'jsx-runtime': {
    plugins: [
      'react',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null, // for @typescript/eslint-parser
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
    },
  },
  'rules': {
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'antfu/if-newline': 'off',
    'arrow-parens': 'off',
    'curly': 'off',
    'no-console': 'off',
    'multiline-ternary': 'off',
    'operator-linebreak': 'off',
    'prefer-promise-reject-errors': 'off',
    'quote-props': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
}
