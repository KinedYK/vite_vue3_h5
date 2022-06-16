import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import config from "@/utils/config.js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'XXX',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       charset: false,
  //       additionalData: `@import "${resolve(
  //         __dirname,
  //         "src/common/main.less"
  //       )}";`,
  //     },
  //   },
  // },
})
