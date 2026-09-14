import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'

export default defineConfig({
  plugins: [react()],

  base: '/game-explorer/',

  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'gerar-404',

          closeBundle() {
            copyFileSync('dist/index.html', 'dist/404.html')
          },
        },
      ],
    },
  },
})