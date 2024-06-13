// vite.config.ts
import { vitePlugin as remix } from "file:///F:/Projects/remix-template/node_modules/@remix-run/dev/dist/index.js";
import { installGlobals } from "file:///F:/Projects/remix-template/node_modules/@remix-run/node/dist/index.js";
import { defineConfig } from "file:///F:/Projects/remix-template/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///F:/Projects/remix-template/node_modules/vite-tsconfig-paths/dist/index.mjs";
installGlobals();
var vite_config_default = defineConfig({
  plugins: [remix({
    ssr: false
  }), tsconfigPaths()],
  server: {
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxQcm9qZWN0c1xcXFxyZW1peC10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcUHJvamVjdHNcXFxccmVtaXgtdGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1Byb2plY3RzL3JlbWl4LXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xyXG5pbXBvcnQgeyBpbnN0YWxsR2xvYmFscyB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcclxuXHJcbmluc3RhbGxHbG9iYWxzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFsgcmVtaXgoe1xyXG4gICAgc3NyOiBmYWxzZX0pLCB0c2NvbmZpZ1BhdGhzKCldLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgb3BlbjogdHJ1ZVxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsU0FBUyxjQUFjLGFBQWE7QUFDMVMsU0FBUyxzQkFBc0I7QUFDL0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFFMUIsZUFBZTtBQUVmLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBRSxNQUFNO0FBQUEsSUFDZixLQUFLO0FBQUEsRUFBSyxDQUFDLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDL0IsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
