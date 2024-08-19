module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended'
  ],
  ignorePatterns: ['client', '.eslintrc.cjs'],
  parserOptions: { sourceType: 'module' },
  plugins: ['jest'],
  rules: {
    indent: ['error', 'tab'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
  },
}
