import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Netflix-Clone-Hab-2024/", // Use your actual repository name
  plugins: [react()],
});
