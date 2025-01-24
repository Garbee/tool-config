import packageJson from '@garbee/tool-config/package.json' with { type: 'json' };
import {possibleProblems} from '@garbee/tool-config/eslint/core/possible-problems.js';
import {suggestions} from '@garbee/tool-config/eslint/core/suggestions.js';

const core = {
  name: `${packageJson.name}/eslint/core`,
  rules: {
    ...suggestions,
    ...possibleProblems,
  },
};

export {core};
