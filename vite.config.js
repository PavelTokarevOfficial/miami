import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@icon': '/src/assets/icon',
    },
  },
  plugins: [vue()],
})
