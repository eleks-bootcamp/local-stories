module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53'
    }
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type':
          'off'
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'warn',
    'no-debugger': 'error',
    'no-dupe-keys': 'warn',
    'no-dupe-args': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty': 'warn',
    'no-extra-semi': 'warn',
    'no-func-assign': 'warn',
    'no-obj-calls': 'warn',
    'no-sparse-arrays': 'warn',
    'no-unreachable': 'warn',
    'valid-typeof': 'warn',
    'no-multi-spaces': 'warn',
    'no-with': 'warn',
    curly: 'warn',
    'no-unused-expressions': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-undefined': 'off',
    camelcase: 'warn',

    indent: [
      'warn',
      2,
      {
        MemberExpression: 'off'
      }
    ],

    'array-bracket-spacing': ['warn', 'never'],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'func-call-spacing': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'new-cap': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never'
      }
    ],
    semi: 'warn',
    quotes: ['error', 'single'],
    'space-in-parens': ['warn', 'never'],
    'space-before-blocks': 'warn',
    'unicode-bom': 'warn',
    'new-parens': 'warn',
    'no-nested-ternary': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false
      }
    ],

    // ES2015
    'constructor-super': 'warn',
    'no-this-before-super': 'warn',
    'no-var': 'error'
  }
}
