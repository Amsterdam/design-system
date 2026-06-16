/* Rule sets consumed by eslint.config.mjs. Split by concern so the main config file stays
 * structural (which globs, which extends, which plugins) and the rule lists live here.
 */

import tsPlugin from '@typescript-eslint/eslint-plugin'

/* TypeScript-aware rules + the core rules they replace.
 * The `tsPlugin.configs.recommended.rules` preset is spread here (instead of using `extends`)
 * because the preset itself declares `extends`, and ESLint's `defineConfig` forbids nesting.
 */
export const tsRules = {
  ...tsPlugin.configs.recommended.rules,

  // TypeScript
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'warn',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': 'error',

  // ESLint — core rules disabled in favour of the TS-aware variants above
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-unused-expressions': 'off',
}

/* Best-practice rules from ESLint core. */
export const coreRules = {
  'array-callback-return': [
    'error',
    {
      checkForEach: false,
    },
  ],
  'block-scoped-var': 'error',
  'consistent-return': 'error',
  eqeqeq: 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-constructor-return': 'error',
  'no-eval': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-inner-declarations': 'error',
  'no-lone-blocks': 'error',
  'no-multi-str': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-return-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'prefer-regex-literals': 'error',
  radix: 'error',
  yoda: 'error',
}

/* Baseline JS — flags use of web platform features that aren't widely available. */
export const baselineRules = {
  'baseline-js/use-baseline': [
    'error',
    { available: 'widely', includeJsBuiltins: { preset: 'type-aware' }, includeWebApis: { preset: 'type-aware' } },
  ],
}

/* Import hygiene. */
export const importRules = {
  'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import-x/newline-after-import': 'error',
  'import-x/no-cycle': 'warn',
  'import-x/no-named-as-default': 'warn',
}

/* Perfectionist groups for component-prop sizes (small/medium/large/etc.). Shared between
 * `sort-object-types` and `sort-objects` so the ordering is consistent.
 */
const perfectionistCustomSizesGroups = {
  customGroups: [
    {
      elementNamePattern: '^(x-small|xs)$',
      groupName: 'x-small',
      selector: 'property',
    },
    {
      elementNamePattern: '^(small|s|narrow|phone|min|start)$',
      groupName: 'small',
      selector: 'property',
    },
    {
      elementNamePattern: '^(medium|m|tablet)$',
      groupName: 'medium',
      selector: 'property',
    },
    {
      elementNamePattern: '^(large|l|wide|desktop|max|end)$',
      groupName: 'large',
      selector: 'property',
    },
    {
      elementNamePattern: '^(x-large|xl)$',
      groupName: 'x-large',
      selector: 'property',
    },
    {
      elementNamePattern: '^(2x-large|2xl)$',
      groupName: '2x-large',
      selector: 'property',
    },
  ],
  groups: ['x-small', 'small', 'medium', 'large', 'x-large', '2x-large'],
  useConfigurationIf: {
    allNamesMatchPattern:
      '^(x-small|xs|small|s|narrow|phone|min|start|medium|m|tablet|large|l|wide|desktop|max|x-large|xl|2x-large|2xl|end)$',
  },
}

/* Perfectionist sort rules with project-specific group definitions. */
export const perfectionistRules = {
  'perfectionist/sort-imports': [
    'error',
    {
      groups: [
        'type-import',
        ['value-builtin', 'value-external'],
        ['type-parent', 'type-sibling', 'type-index'],
        ['value-parent', 'value-sibling', 'value-index'],
        'side-effect',
        'unknown',
      ],
      newlinesBetween: 1,
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-intersection-types': [
    'error',
    {
      /* Storybook uses the first type definition it finds to generate controls.
       * For example, if it finds the native HTML attribute `color` before a custom `color` prop, it will use that.
       * This results in incorrect controls.
       * Because we usually define our props in a type object, this rule will often prevent that issue. */
      groups: ['object', 'named'],
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-modules': 'off', // This impacts readability in a negative way. We want to decide the order of modules ourselves.
  'perfectionist/sort-object-types': ['error', perfectionistCustomSizesGroups],
  'perfectionist/sort-objects': [
    'error',
    perfectionistCustomSizesGroups,
    {
      customGroups: [
        {
          elementNamePattern: '^title$',
          groupName: 'title',
          selector: 'property',
        },
        {
          elementNamePattern: '^component$',
          groupName: 'component',
          selector: 'property',
        },
      ],
      groups: ['title', 'component'],
      partitionByNewLine: true,
    },
  ],
  'perfectionist/sort-union-types': 'off', // This causes more issues than it solves
}
