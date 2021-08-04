module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'space-in-parens': ['error', 'always'],
    'padded-blocks': ['error', 'always', { allowSingleLineBlocks: true }],
    'class-methods-use-this': 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'prettier/prettier': 'off',
      }
    }
  ]
};
