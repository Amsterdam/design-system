/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // The anatomy test renders page templates, so the tests need the JSX transform and the alias the app uses.
  plugins: [react()],
  resolve: {
    alias: {
      '#storybook': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  test: {
    include: ['config/**/*.test.ts', 'src/**/*.test.ts'],
  },
})
