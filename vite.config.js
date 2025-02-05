import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensure relative paths are used
  build: {
    outDir: 'dist', // Vercel expects this directory for static assets
  }
})
