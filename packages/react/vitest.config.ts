/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: ['**/index.ts'],
      provider: 'v8',
    },
    environment: 'jsdom',
    exclude: ['**/dist/**', '**/node_modules/**'],
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})
