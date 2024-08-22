import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@icon': '/src/assets/icon',
      '@ui': '/src/assets/UI',
      '@components': '/src/components',
    },
  },
  server: {
    // Важно для работы в Docker
    host: '0.0.0.0',  // Позволяет принимать запросы из внешней сети
    port: 4173,       // Порт, на котором будет работать приложение
  },
  build: {
    outDir: 'dist',   // Папка, в которую будет производиться сборка
  },
  base: "/miami",
  plugins: [vue()],
})
