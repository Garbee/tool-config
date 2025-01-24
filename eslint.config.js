import {core} from '@garbee/tool-config/eslint/core.js';
import {javascriptStyle} from '@garbee/tool-config/eslint/stylistic/javascript.js';
import {unicorn} from './src/eslint/unicorn.js';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ...core,
    ...unicorn,
    files: ['**/*.js'],
  },
  {
    ...javascriptStyle,
    files: ['**/*.js'],
  },
];
