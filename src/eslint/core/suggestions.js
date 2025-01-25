/**
 * @type {import("eslint").Linter.Config["rules"]}
 */
export const suggestions = {
  'accessor-pairs': [
    'error',
    {
      setWithoutGet: true,
      getWithoutSet: false,
      enforceForClassMembers: true,
    },
  ],
  'arrow-body-style': ['error', 'always'],
  'block-scoped-var': ['error'],
  'camelcase': [
    'error',
    {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
    },
  ],
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreInlineComments: false,
      ignoreConsecutiveComments: false,
    },
  ],
  'class-methods-use-this': ['error'],
  'complexity': [
    'error',
    {
      max: 10,
    },
  ],
  'consistent-return': [
    'error',
    {
      treatUndefinedAsUnspecified: false,
    },
  ],
  'consistent-this': ['error'],
  'curly': ['error', 'all'],
  'default-case': ['error'],
  'default-case-last': ['error'],
  'default-param-last': ['error'],
  'dot-notation': ['error'],
  'eqeqeq': ['error', 'always'],
  'func-name-matching': ['error'],
  'func-names': ['error', 'as-needed'],
  'func-style': [
    'error',
    'expression',
    {
      overrides: {
        namedExports: 'declaration',
      },
    },
  ],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': ['error'],
  'id-denylist': ['off'],
  'id-length': [
    'error',
    {
      min: 3,
      max: 30,
      properties: 'always',
      exceptions: ['id'],
    },
  ],
  'id-match': ['off'],
  'init-declarations': ['off'],
  'logical-assignment-operators': ['error', 'always'],
  'max-classes-per-file': ['error', 1],
  'max-depth': [
    'error',
    {
      max: 2,
    },
  ],
  'max-lines': [
    'error',
    {
      max: 300,
    },
  ],
  'max-lines-per-function': [
    'error',
    {
      max: 35,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  'max-nested-callbacks': [
    'error',
    {
      max: 3,
    },
  ],
  'max-params': [
    'error',
    {
      max: 3,
    },
  ],
  'max-statements': [
    'error',
    {
      max: 20,
    },
  ],
  'new-cap': ['error'],
  'no-alert': ['error'],
  'no-array-constructor': ['error'],
  'no-bitwise': ['error'],
  'no-caller': ['error'],
  'no-case-declarations': ['error'],
  'no-console': ['off'],
  'no-continue': ['off'],
  'no-delete-var': ['error'],
  'no-div-regex': ['error'],
  'no-else-return': ['error'],
  'no-empty': ['error'],
  'no-empty-function': ['error'],
  'no-empty-static-block': ['error'],
  'no-eq-null': ['error'],
  'no-eval': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-extra-label': ['error'],
  'no-global-assign': ['error'],
  'no-implicit-coercion': ['error'],
  'no-implicit-globals': ['error'],
  'no-implied-eval': ['error'],
  'no-inline-comments': ['error'],
  'no-invalid-this': ['error'],
  'no-iterator': ['error'],
  'no-label-var': ['error'],
  'no-labels': ['off'],
  'no-lone-blocks': ['error'],
  'no-lonely-if': ['error'],
  'no-loop-func': ['error'],
  'no-magic-numbers': [
    'error',
    {ignore: [
      0,
      1,
      -1,
    ],
    ignoreDefaultValues: true,
    ignoreClassFieldInitialValues: true},
  ],
  'no-multi-assign': ['error'],
  'no-multi-str': ['error'],
  'no-negated-condition': ['error'],
  'no-nested-ternary': ['error'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  'no-new-wrappers': ['error'],
  'no-nonoctal-decimal-escape': ['error'],
  'no-object-constructor': ['error'],
  'no-octal': ['error'],
  'no-octal-escape': ['error'],
  'no-param-reassign': ['error'],
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'no-proto': ['error'],
  'no-redeclare': ['error'],
  'no-regex-spaces': ['error'],
  'no-restricted-exports': ['off'],
  'no-restricted-globals': ['error'],
  'no-restricted-imports': ['off'],
  'no-restricted-properties': ['off'],
  'no-restricted-syntax': ['off'],
  'no-return-assign': ['error', 'always'],
  'no-script-url': ['error'],
  'no-sequences': ['error'],
  'no-shadow': ['error'],
  'no-shadow-restricted-names': ['error'],
  'no-ternary': ['off'],
  'no-throw-literal': ['error'],
  'no-undef-init': ['error'],
  'no-undefined': ['off'],
  'no-underscore-dangle': ['error'],
  'no-unneeded-ternary': ['error'],
  'no-unused-expressions': ['error'],
  'no-unused-labels': ['error'],
  'no-useless-call': ['error'],
  'no-useless-catch': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-concat': ['error'],
  'no-useless-constructor': ['error'],
  'no-useless-escape': ['error'],
  'no-useless-rename': ['error'],
  'no-useless-return': ['error'],
  'no-var': ['error'],
  'no-void': ['off'],
  'no-warning-comments': ['error'],
  'no-with': ['error'],
  'object-shorthand': ['error'],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': ['error'],
  'prefer-const': ['error'],
  'prefer-destructuring': [
    'error',
    {
      object: true,
      array: false,
    },
  ],
  'prefer-exponentiation-operator': ['error'],
  'prefer-named-capture-group': ['error'],
  'prefer-numeric-literals': ['error'],
  'prefer-object-has-own': ['error'],
  'prefer-object-spread': ['error'],
  'prefer-promise-reject-errors': ['error'],
  'prefer-regex-literals': ['error'],
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'prefer-template': ['error'],
  'radix': ['error', 'always'],
  'require-await': ['error'],
  'require-unicode-regexp': ['error'],
  'require-yield': ['error'],
  'sort-imports': ['off'],
  'sort-keys': ['off'],
  'sort-vars': ['error'],
  'strict': ['error', 'global'],
  'symbol-description': ['error'],
  'vars-on-top': ['off'],
  'yoda': ['off'],
};
