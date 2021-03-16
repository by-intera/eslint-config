module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/recommended',
  ],
  plugins: ['react-hooks', 'simple-import-sort', 'sort-destructure-keys'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useUpdateEffect',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'], // Side effect imports
          ['^react$', '^react-dom$', '^react', '^@?\\w'],
          ['^src/config', '^src/modules', '^src/locales'],
          ['^src/components', '^src/routes'],
          ['^src/types'],
          ['^test'],
          ['^\\./[^.]'], // './*'
          ['^\\.\\./'], // '../*'
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
  },
};
