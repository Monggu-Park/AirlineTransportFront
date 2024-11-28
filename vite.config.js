import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Node.js의 path 모듈 import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // "@/경로"를 "src/경로"로 매핑
    },
  },
});