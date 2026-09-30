import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// This is a user site (gogogo-hash.github.io) served from the root, so base stays "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
