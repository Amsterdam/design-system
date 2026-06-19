/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '#storybook': fileURLToPath(new URL('src', import.meta.url)),
      '#tokens': fileURLToPath(new URL('../packages-proprietary/tokens/src', import.meta.url)),
    },
  },
})
