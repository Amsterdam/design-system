/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['config/**/*.test.ts', 'src/**/*.test.ts'],
          name: 'unit',
        },
      },
      {
        plugins: [
          storybookTest({
            configDir: path.join(dirname, 'config'),
          }),
        ],
        resolve: {
          alias: { '#storybook': path.join(dirname, 'src') },
        },
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright({}),
          },
          name: 'storybook',
        },
      },
    ],
  },
})
