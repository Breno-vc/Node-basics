import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier'; // Importa o plugin Prettier
import prettierConfig from 'eslint-config-prettier'; // Importa o config Prettier

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: [
            'constructor',
            'index',
            'show',
            'update',
            'create',
            'destroy',
          ],
        },
      ],
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  prettierConfig,
];
