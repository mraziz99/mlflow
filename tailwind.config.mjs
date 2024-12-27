/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  // prefix: 'tw-',
  corePlugins: {
    preflight: false,
  }, // klo mau make tailwind bareng sama css lib yang lain harus dikasi ini, karena tailwind akan me reset semua class css pada tahap preflight
  plugins: [],
};
