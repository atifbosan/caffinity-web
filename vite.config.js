import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /caffinity-web/; Vercel serves it from /.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/caffinity-web/' : '/',
  plugins: [react(), tailwindcss()],
})
