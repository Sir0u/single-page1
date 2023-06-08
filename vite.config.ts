import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/global/spaces.scss";
          @import "./src/style/global/colors.scss";
        `,
      },
    },
  },
})
