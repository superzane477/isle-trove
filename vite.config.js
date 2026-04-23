import { defineConfig } from 'vite'

export default defineConfig({
  base: '/isle-trove/',
  publicDir: 'public',
  server: {
    fs: {
      strict: false
    }
  }
})
