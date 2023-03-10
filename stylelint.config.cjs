module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-vue'
  ],
  rules: {},
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
};
