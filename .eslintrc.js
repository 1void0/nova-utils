module.exports = {
  extends: 'nova',
  parserOptions: {
    project: null
  },
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/unbound-method': 'off'
  }
}
