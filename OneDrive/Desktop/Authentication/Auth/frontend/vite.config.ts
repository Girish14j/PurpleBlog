import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // This will expose the server to your network
    strictPort: false, // Allow fallback to another port if 3000 is taken
  }
})
