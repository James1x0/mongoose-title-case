module.exports = {
  'parser': 'babel-eslint',
  'extends': 'eslint:recommended',
  'env': {
    'browser': false,
    'node': true,
    'amd': false,
    'mocha': true
  },
  'rules': {
    'key-spacing':             [ 'error', { align: { on: 'value' } }],
    'object-property-newline': [ 'error', {
      allowAllPropertiesOnSameLine: false
    }],
    'object-curly-newline': [ 'error', {
      minProperties: 2,
      consistent: true
    }],
    'eol-last': [ 'error', 'always' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false } ],
    'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': true } ],
    'space-in-parens': [ 'error', 'never' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'semi-spacing': [2, {'before': false, 'after': true}],
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'space-before-blocks': ['error'],
    'indent': [ 2, 2, { 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 }, 'MemberExpression': 0 } ],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-extra-bind': 2,
    'no-catch-shadow': 2,
    'comma-dangle': [2, 'never'],
    'no-irregular-whitespace': 2,
    'no-cond-assign': 0,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 0,
    'no-dupe-keys': 2,
    'no-else-return': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-invalid-regexp': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 0,
    'no-mixed-requires': [0, false],
    'no-multi-str': 2,
    'no-multi-spaces': 0,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-path-concat': 0,
    'no-plusplus': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': [2, 'local'],
    'no-use-before-define': 2,
    'no-with': 2,
    'no-void': 2,
    'yoda': [2, 'never'],
    'block-scoped-var': 0,
    'brace-style': [2, '1tbs'],
    'camelcase': 2,
    'complexity': [0, 11],
    'consistent-return': 0,
    'consistent-this': [0, 'that'],
    'curly': [2, 'all'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'func-names': 0,
    'func-style': 0,
    'guard-for-in': 2,
    'max-depth': [0, 4],
    'max-len': [0, 80, 4],
    'max-nested-callbacks': [0, 2],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'new-cap': 0,
    'new-parens': 2,
    'one-var': 0,
    'quote-props': 0,
    'quotes': [2, 'single'],
    'radix': 2,
    'semi': 2,
    'strict': 0,
    'sort-vars': 0,
    'space-infix-ops': 2,
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'wrap-iife': 0,
    'wrap-regex': 0,
    'vars-on-top': 0,
  }
};
