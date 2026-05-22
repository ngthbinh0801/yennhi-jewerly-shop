import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          cream: '#FAF8F5',
          charcoal: '#1A1A1A',
          burgundy: '#722F37',
          gold: '#C9A961',
          gray: '#8B8B8B',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
      },
      screens: {
        xs: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '3rem',
          lg: '5rem',
          xl: '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
