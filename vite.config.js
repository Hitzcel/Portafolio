import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portafolio/",
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.{html,js,jsx,ts,tsx,vue,less}'
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    minify: true,
  },
})
