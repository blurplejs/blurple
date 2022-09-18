module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowAny: true,
    }],
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      allowAny: true,
    }],
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
}
