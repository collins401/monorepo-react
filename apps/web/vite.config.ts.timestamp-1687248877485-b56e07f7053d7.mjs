// vite.config.ts
import { defineConfig } from "file:///Users/deepsky/Documents/GitHub/monorepo-react/node_modules/.pnpm/vite@4.3.9_@types+node@20.3.1_terser@5.18.0/node_modules/vite/dist/node/index.js";
import react from "file:///Users/deepsky/Documents/GitHub/monorepo-react/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Pages from "file:///Users/deepsky/Documents/GitHub/monorepo-react/node_modules/.pnpm/vite-plugin-pages@0.31.0_vite@4.3.9/node_modules/vite-plugin-pages/dist/index.mjs";
import AutoImport from "file:///Users/deepsky/Documents/GitHub/monorepo-react/node_modules/.pnpm/unplugin-auto-import@0.16.4/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///Users/deepsky/Documents/GitHub/monorepo-react/node_modules/.pnpm/unocss@0.53.1_postcss@8.4.24_vite@4.3.9/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    Pages({
      extensions: ["tsx"],
      routeStyle: "next",
      exclude: ["**/components/**/*", "**/controller.tsx"],
      importMode: "async"
    }),
    // 自动导入 import xx from xx
    AutoImport({
      include: [
        /\.[tj]sx?$/
      ],
      imports: ["react", "react-router-dom"],
      dts: "types/auto-imports.d.ts",
      eslintrc: {
        enabled: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGVlcHNreS9Eb2N1bWVudHMvR2l0SHViL21vbm9yZXBvLXJlYWN0L2FwcHMvd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGVlcHNreS9Eb2N1bWVudHMvR2l0SHViL21vbm9yZXBvLXJlYWN0L2FwcHMvd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kZWVwc2t5L0RvY3VtZW50cy9HaXRIdWIvbW9ub3JlcG8tcmVhY3QvYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBVbm9DU1MoKSxcbiAgICBQYWdlcyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3RzeCddLFxuICAgICAgcm91dGVTdHlsZTogJ25leHQnLFxuICAgICAgZXhjbHVkZTogWycqKi9jb21wb25lbnRzLyoqLyonLCAnKiovY29udHJvbGxlci50c3gnXSxcbiAgICAgIGltcG9ydE1vZGU6ICdhc3luYycsXG4gICAgfSksXG4gICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IGltcG9ydCB4eCBmcm9tIHh4XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogWydyZWFjdCcsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLFNBQVMsb0JBQW9CO0FBQ3BYLE9BQU8sV0FBVztBQUNsQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFlBQVksQ0FBQyxLQUFLO0FBQUEsTUFDbEIsWUFBWTtBQUFBLE1BQ1osU0FBUyxDQUFDLHNCQUFzQixtQkFBbUI7QUFBQSxNQUNuRCxZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUE7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLFNBQVMsa0JBQWtCO0FBQUEsTUFDckMsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
