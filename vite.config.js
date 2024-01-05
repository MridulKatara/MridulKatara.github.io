import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MridulKatara.github.io/', 
  build: {
    outDir: 'dist',
  },

  plugins: [react()],
})
