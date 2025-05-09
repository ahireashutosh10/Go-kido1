import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://testapp.gokidogo.com/webapi',
        changeOrigin: true,
        
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
