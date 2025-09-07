// Vite config using ES module syntax
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'https://saefulrdevs-portfolio-api.vercel.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }
});
