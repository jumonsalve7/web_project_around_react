import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web_project_around_react/', // 🔹 para GitHub Pages
  server: {
    port: 3000, // 🔹 si quieres tu puerto local
  },
});
