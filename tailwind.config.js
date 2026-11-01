/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind v4: design tokens live in CSS (tokens.css), not here.
  // Only content scanning is configured in this file.
  theme: {},
  plugins: [],
}
