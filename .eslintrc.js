const path = require('path');
const workspace = process.cwd();
const projectConfig = path.join(workspace, 'tsconfig.json');
const ignorePaths = [
  'dev/*',
  'dist/*',
  'builder/*',
  'draft/*',
  'coverage/*',
  '.vscode/*',
  '.eslintrc.js',
  '**/*.js',
];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  ignorePatterns: ignorePaths,
  parserOptions: {
    project: projectConfig,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '17',
    },
  },
  rules: {
    'no-prototype-builtins': 'off',
    'no-sparse-arrays': 'off',
    'indent': 'off',
    'brace-style': 'off',
    'no-debugger': 'off',

    'max-len': ['warn', {
      code: 90,
    }],
    'keyword-spacing': 'error',
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-multi-spaces': 'error',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent':  ['error', 2, {
      SwitchCase: 1,
    }],
    '@typescript-eslint/brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],
  },
};
