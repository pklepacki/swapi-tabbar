/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          ['object', 'unknown'],
          'type',
        ],
        pathGroups: [
          {
            pattern: '*.scss',
            patternOptions: { matchBase: true },
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'styles/classes',
            patternOptions: { matchBase: true },
            group: 'type',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
