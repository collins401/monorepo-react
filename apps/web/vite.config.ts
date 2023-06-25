import { resolve } from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
  envDir: './env',
  plugins: [
    react(),
    UnoCSS(),
    mode === 'production' && legacy({}),
    Pages({
      extensions: ['tsx'],
      routeStyle: 'next',
      exclude: ['**/components/**/*', '**/controller.tsx'],
      importMode: 'async'
    }),
    // 自动导入 import xx from xx
    AutoImport({
      include: [/\.[tj]sx?$/],
      imports: ['react', 'react-router-dom'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: resolve(__dirname, './src') }
    ]
  },
  server: {
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://baidu.com',
        changeOrigin: true,
        ws: false
        // rewrite: path => path.replace('/api', '/api')
      }
    }
  },
  esbuild: {
    // 生产环境去掉console.log、debugger
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },
  build: {
    chunkSizeWarningLimit: 1200,
    assetsDir: 'static/',
    sourcemap: mode === 'staging',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // 分包
          vendor: ['react', 'react-dom', 'react-router-dom'],
          antd: ['antd']
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
