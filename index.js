module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/recommended',
  ],
  plugins: ['react-hooks', 'simple-import-sort', 'sort-destructure-keys'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parser: 'babel-eslint',
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        'valid-jsdoc': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          { functions: false, classes: false, variables: false, typedefs: false },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        'react/default-props-match-prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'import/extensions': [
      'warn',
      'never',
      {
        json: 'always',
      },
    ],
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
