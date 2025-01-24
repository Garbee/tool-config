import packageJson from '@garbee/tool-config/package.json' with { type: 'json' };
import stylisticJs from '@stylistic/eslint-plugin-js';

const indent = 2;

/**
 * @type {import("eslint").Linter.Config}
 */
export const javascriptStyle = {
  name: `${packageJson.name}/eslint/stylistic/javascript`,
  plugins: {
    '@stylistic/js': stylisticJs,
  },
  rules: {
    '@stylistic/js/array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    '@stylistic/js/arrow-parens': ['error', 'always'],
    '@stylistic/js/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/js/block-spacing': ['error', 'always'],
    '@stylistic/js/brace-style': ['error', '1tbs'],
    '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/js/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/comma-style': ['error', 'last'],
    '@stylistic/js/computed-property-spacing': ['error', 'never'],
    '@stylistic/js/dot-location': ['error', 'property'],
    '@stylistic/js/eol-last': ['error', 'always'],
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/js/function-call-spacing': ['error', 'never'],
    '@stylistic/js/function-paren-newline': ['error', 'consistent'],
    '@stylistic/js/generator-star-spacing': ['error'],
    '@stylistic/js/implicit-arrow-linebreak': ['error'],
    '@stylistic/js/indent': ['error', indent],
    '@stylistic/js/key-spacing': ['error'],
    '@stylistic/js/keyword-spacing': ['error'],
    '@stylistic/js/line-comment-position': ['error', 'above'],
    '@stylistic/js/linebreak-style': ['error', 'unix'],
    '@stylistic/js/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        applyDefaultIgnorePatterns: true,
        afterHashbangComment: true,
      },
    ],
    '@stylistic/js/lines-between-class-members': ['error', 'always'],
    '@stylistic/js/max-len': [
      'error',
      {
        code: 60,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    '@stylistic/js/max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    '@stylistic/js/multiline-comment-style': ['error', 'starred-block'],
    '@stylistic/js/multiline-ternary': ['error', 'always'],
    '@stylistic/js/new-parens': ['error', 'always'],
    '@stylistic/js/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    '@stylistic/js/no-confusing-arrow': ['error'],
    '@stylistic/js/no-extra-parens': ['error', 'all'],
    '@stylistic/js/no-extra-semi': ['error'],
    '@stylistic/js/no-floating-decimal': ['error'],
    '@stylistic/js/no-mixed-operators': ['error'],
    '@stylistic/js/no-mixed-spaces-and-tabs': ['error'],
    '@stylistic/js/no-multi-spaces': ['error'],
    '@stylistic/js/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    '@stylistic/js/no-tabs': ['error'],
    '@stylistic/js/no-trailing-spaces': ['error'],
    '@stylistic/js/no-whitespace-before-property': ['error'],
    '@stylistic/js/nonblock-statement-body-position': ['error'],
    '@stylistic/js/object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    '@stylistic/js/object-curly-spacing': ['error', 'never'],
    '@stylistic/js/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    '@stylistic/js/one-var-declaration-per-line': ['error'],
    '@stylistic/js/operator-linebreak': ['error', 'after'],
    '@stylistic/js/padded-blocks': ['error', 'never'],
    '@stylistic/js/padding-line-between-statements': ['off'],
    '@stylistic/js/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/js/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    '@stylistic/js/semi': ['error', 'always'],
    '@stylistic/js/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/semi-style': ['error', 'last'],
    '@stylistic/js/space-before-blocks': ['error', 'always'],
    '@stylistic/js/space-before-function-paren': ['error', 'never'],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/space-infix-ops': ['error'],
    '@stylistic/js/space-unary-ops': ['error'],
    '@stylistic/js/spaced-comment': ['error', 'always'],
    '@stylistic/js/switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/template-curly-spacing': ['error', 'never'],
    '@stylistic/js/template-tag-spacing': ['error', 'never'],
    '@stylistic/js/wrap-iife': ['error', 'outside'],
    '@stylistic/js/wrap-regex': ['error'],
    '@stylistic/js/yield-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
  },
};
