import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      cleanVueFileName: true,
      // Включаем ТОЛЬКО либу, демо нахрен исключаем!
      include: ['src/lib/**/*'],
      exclude: ['src/demo/**/*', 'src/App.vue', 'src/main.ts', 'src/router.ts']
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'VueSaaSKit',
      fileName: (format) => `vue-saas-kit.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'modular-ui-kit-vue', 'vue-router', 'chart.js'],
      output: {
        globals: {
          vue: 'Vue',
          'modular-ui-kit-vue': 'ModularUiKitVue'
        }
      }
    }
  }
})