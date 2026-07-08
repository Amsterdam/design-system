/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['config/**/*.test.ts', 'src/**/*.test.ts'],
  },
})
