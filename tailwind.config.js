/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        'surface-hover': 'var(--bg-surface-hover)',
        primary: 'var(--fg-primary)',
        secondary: 'var(--fg-secondary)',
        muted: 'var(--fg-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      spacing: {
        'mobile': 'var(--spacing-mobile)',
        'tablet': 'var(--spacing-tablet)',
        'desktop': 'var(--spacing-desktop)',
        'section-mobile': 'var(--spacing-section-mobile)',
        'section-desktop': 'var(--spacing-section-desktop)',
      },
    },
  },
  plugins: [],
}
