import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    Pages({
      extensions: ['tsx'],
      routeStyle: 'next',
      exclude: ['**/components/**/*', '**/controller.tsx'],
      importMode: 'async',
    }),
    // 自动导入 import xx from xx
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],
      imports: ['react', 'react-router-dom'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})
