import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from "path";
// import { fileURLToPath } from 'url';

// const  __filename = fileURLToPath(import.meta.url);
// const __dirname = path.__dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
            ssr: false,
          },
        ],
      ],
    })],
  resolve: {
    alias: { // image 절대 결로 설정 alias
      "@": new URL('./src', import.meta.url).pathname
    }
  }
})