/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "toggle-orange": "#F77429",
      },
      fontFamily: {
        "mont-alt": ["var(--font-montserrat-alt)", "sans-serif"],
        "albert-sans": ["var(--font-albert-sans)", "sans-serif"],
      },
      fontSize: {
        "primary-small": "1rem",
        "hero-large": "3.5rem",
        "hero-medium": "1.75rem",
        "primary-button": "20px",
      },
    },
  },
  plugins: [],
};
