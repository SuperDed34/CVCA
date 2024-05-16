import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/work/**/*', dest: 'work' }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        work: resolve(__dirname, './src/work/work.html')
      },
      output: {
        entryFileNames: chunkInfo => {
          if (chunkInfo.facadeModuleId.includes('/work/')) {
            return 'work/[name].[hash].js'
          }
          return '[name].[hash].js'
        },
        chunkFileNames: chunkInfo => {
          if (chunkInfo.facadeModuleId.includes('/work/')) {
            return 'work/[name].[hash].js'
          }
          return '[name].[hash].js'
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name.includes('/work/')) {
            return 'work/[name].[hash][extname]'
          }
          return '[name].[hash][extname]'
        }
      }
    }
  }
})
