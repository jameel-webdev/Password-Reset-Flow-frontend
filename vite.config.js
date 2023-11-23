import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // whenever we go to fetch data from server side which starts "/api"
        target: "https://password-reset-flow-is8m.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
