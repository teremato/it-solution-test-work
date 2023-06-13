import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/shared/assets/icons', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/shared/assets/images', import.meta.url))
    }
  }
})
