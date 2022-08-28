module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: ['next'],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never'],
    'no-console': ['warn']
  }
}
