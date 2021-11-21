import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(), 
    Pages()
  ],
  server: {
    hmr: {
      port: 443,
    },
  },
});
