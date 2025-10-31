import clipPath from 'tailwind-clip-path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          to: { backgroundPosition: "200% center" },
        },
      },
      animation: {
        gradientMove: "gradientMove 2.5s linear infinite",
      },
    },
  },
  plugins: [
    clipPath,
  ],
};
