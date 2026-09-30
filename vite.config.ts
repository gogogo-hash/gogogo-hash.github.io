import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// Vite's dev server doesn't resolve a directory request like "/resume/" to
// an index.html file inside public/ the way a real static host (and
// `vite preview`) does. This closes that gap so `npm run dev` matches
// production behavior.
function servePublicDirIndex(): Plugin {
  return {
    name: 'serve-public-dir-index',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url !== '/' && req.url.endsWith('/')) {
          const indexPath = path.join(server.config.publicDir, req.url, 'index.html')
          if (fs.existsSync(indexPath)) {
            res.setHeader('Content-Type', 'text/html')
            fs.createReadStream(indexPath).pipe(res)
            return
          }
        }
        next()
      })
    },
  }
}

// This is a user site (gogogo-hash.github.io) served from the root, so base stays "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), servePublicDirIndex()],
})
