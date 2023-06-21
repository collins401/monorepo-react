module.exports = {
  extends: ['@antfu/eslint-config-react', './.eslintrc-auto-import.json'],
  parserOptions: {
    ecmaVersion: 4,
  },
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'antfu/if-newline': 'off',
    'arrow-parens': 'off',
    'curly': 'off',
    'no-console': 'warn',
    'multiline-ternary': 'off',
    'operator-linebreak': 'off',
    'prefer-promise-reject-errors': 'off',
    'quote-props': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'max-lines': ['error', { max: 650, skipBlankLines: true, skipComments: true }],
  },
}
