module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: [['~', './src']]
    }
  },
  rules: {
    'no-console': import.meta.env.MODE === 'production' ? 'error' : 'off',
    'no-debugger': import.meta.env.MODE === 'production' ? 'error' : 'error',
    'global-require': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false }
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'main'] // 需要忽略的组件名
      }
    ]
  }
};
