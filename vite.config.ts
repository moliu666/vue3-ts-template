/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'types/components.d.ts'
    })
  ],
  test: {
    // jest like test api
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src')
    }
  }
});
