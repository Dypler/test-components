import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@home': fileURLToPath(new URL('./src/pages/Home', import.meta.url)),
      '@events': fileURLToPath(new URL('./src/pages/Events', import.meta.url)),
      '@news': fileURLToPath(new URL('./src/pages/News', import.meta.url)),
      '@courses': fileURLToPath(new URL('./src/pages/Courses', import.meta.url)),
      '@help': fileURLToPath(new URL('./src/pages/Help', import.meta.url)),
      '@background': fileURLToPath(new URL('./src/components/background', import.meta.url)),
      '@footer': fileURLToPath(new URL('./src/components/footer', import.meta.url)),
      '@header': fileURLToPath(new URL('./src/components/header', import.meta.url)),
      '@social': fileURLToPath(new URL('./src/components/socialLink', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/components/common', import.meta.url)),
      '@swiper': fileURLToPath(new URL('./src/pages/Home/sliders', import.meta.url)),
      '@social_link': fileURLToPath(new URL('./src/components/socialLink', import.meta.url))
    }
  },
  server: {
    server: {
      proxy: {
        '/api': {
          target: 'http://tanin.phosagro.picom.su',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
