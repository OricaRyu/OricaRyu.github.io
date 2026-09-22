import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths keep static assets working from a GitHub Pages project subdirectory.
  base: './',
  plugins: [react()],
})
