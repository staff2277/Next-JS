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
        toggleOrange: "#F77429",
      },
      fontFamily: {
        montAlt: ["var(--font-montserrat-alt)", "sans-serif"],
        albertSans: ["var(--font-albert-sans)", "sans-serif"],
      },
      fontSize: {
        primarySmall: "1rem",
        heroLarge: "3.5rem",
        heroMedium: "1.75rem",
        primaryButton: "20px",
      },
    },
  },
  plugins: [],
};
