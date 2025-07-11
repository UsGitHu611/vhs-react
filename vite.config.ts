import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"
import {resolve} from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tsconfigPaths()
  ],
  resolve: {
    alias: [
      {find: "@", replacement: resolve(__dirname, 'src')},
      {find: "@context", replacement: resolve(__dirname, 'src', 'context')},
      {find: "@pages", replacement: resolve(__dirname, 'src', 'pages')},
      {find: "@shared", replacement: resolve(__dirname, 'src', 'shared')},
      {find: "@ui", replacement: resolve(__dirname, 'src', 'components', 'ui')},
      {find: "@public", replacement: resolve(__dirname, './public')},
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion'],
          query: ['@tanstack/react-query'],
          icons: ['react-icons']
        }
      }
    }
  }
})
