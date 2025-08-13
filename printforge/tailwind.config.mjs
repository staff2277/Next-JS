// tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // App Router
    "./pages/**/*.{js,jsx,ts,tsx}", // Pages Router (if any)
    "./components/**/*.{js,jsx,ts,tsx}",
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
};
