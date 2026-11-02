import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// tetap pertahankan import plugin Tailwind kamu kalau ada

export default defineConfig({
  plugins: [react() /*, tailwindcss() */],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})