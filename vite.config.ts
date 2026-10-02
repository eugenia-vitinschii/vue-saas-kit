import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json'
    })
  ],
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