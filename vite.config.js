import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Добавьте '.jsx' здесь
  },
  plugins: [react()],
})
