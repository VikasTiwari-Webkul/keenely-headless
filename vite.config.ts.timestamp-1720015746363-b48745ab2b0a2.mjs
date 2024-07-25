// vite.config.ts
import { defineConfig } from "file:///home/users/vishal.handa/www/html/keneely%20Headless/hydrogen-quickstart/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///home/users/vishal.handa/www/html/keneely%20Headless/hydrogen-quickstart/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///home/users/vishal.handa/www/html/keneely%20Headless/hydrogen-quickstart/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///home/users/vishal.handa/www/html/keneely%20Headless/hydrogen-quickstart/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///home/users/vishal.handa/www/html/keneely%20Headless/hydrogen-quickstart/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91c2Vycy92aXNoYWwuaGFuZGEvd3d3L2h0bWwva2VuZWVseSBIZWFkbGVzcy9oeWRyb2dlbi1xdWlja3N0YXJ0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91c2Vycy92aXNoYWwuaGFuZGEvd3d3L2h0bWwva2VuZWVseSBIZWFkbGVzcy9oeWRyb2dlbi1xdWlja3N0YXJ0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VzZXJzL3Zpc2hhbC5oYW5kYS93d3cvaHRtbC9rZW5lZWx5JTIwSGVhZGxlc3MvaHlkcm9nZW4tcXVpY2tzdGFydC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCB7aHlkcm9nZW59IGZyb20gJ0BzaG9waWZ5L2h5ZHJvZ2VuL3ZpdGUnO1xuaW1wb3J0IHtveHlnZW59IGZyb20gJ0BzaG9waWZ5L21pbmktb3h5Z2VuL3ZpdGUnO1xuaW1wb3J0IHt2aXRlUGx1Z2luIGFzIHJlbWl4fSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGh5ZHJvZ2VuKCksXG4gICAgb3h5Z2VuKCksXG4gICAgcmVtaXgoe1xuICAgICAgcHJlc2V0czogW2h5ZHJvZ2VuLnByZXNldCgpXSxcbiAgICAgIGZ1dHVyZToge1xuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBBbGxvdyBhIHN0cmljdCBDb250ZW50LVNlY3VyaXR5LVBvbGljeVxuICAgIC8vIHdpdGh0b3V0IGlubGluaW5nIGFzc2V0cyBhcyBiYXNlNjQ6XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXG4gIH0sXG4gIHNzcjoge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJbmNsdWRlIGRlcGVuZGVuY2llcyBoZXJlIGlmIHRoZXkgdGhyb3cgQ0pTPD5FU00gZXJyb3JzLlxuICAgICAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGVycm9yOlxuICAgICAgICpcbiAgICAgICAqID4gUmVmZXJlbmNlRXJyb3I6IG1vZHVsZSBpcyBub3QgZGVmaW5lZFxuICAgICAgICogPiAgIGF0IC9Vc2Vycy8uLi4vbm9kZV9tb2R1bGVzL2V4YW1wbGUtZGVwL2luZGV4LmpzOjE6MVxuICAgICAgICpcbiAgICAgICAqIEluY2x1ZGUgJ2V4YW1wbGUtZGVwJyBpbiB0aGUgYXJyYXkgYmVsb3cuXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvZGVwLW9wdGltaXphdGlvbi1vcHRpb25zXG4gICAgICAgKi9cbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1ksU0FBUSxvQkFBbUI7QUFDamEsU0FBUSxnQkFBZTtBQUN2QixTQUFRLGNBQWE7QUFDckIsU0FBUSxjQUFjLGFBQVk7QUFDbEMsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdaLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
