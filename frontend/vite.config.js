// vite.config.js
import { defineConfig } from 'vite'
import react      from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Todo lo que empiece con /api irá a http://localhost:4000
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
