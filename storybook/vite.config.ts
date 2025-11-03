/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
})
