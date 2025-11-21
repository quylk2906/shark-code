const { heroui } = require('@heroui/theme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#283C63',
              foreground: '#FFFFFF',
            },
            white: {
              DEFAULT: '#FFFFFF',
              foreground: '#000000',
            },
            red: {
              DEFAULT: '#FF5252',
              foreground: 'red',
            },
            // blue: {
            //   DEFAULT: '#0000FF',
            //   foreground: '#FFFFFF',
            // },
            // green: {
            //   DEFAULT: '#00FF00',
            //   foreground: '#000000',
            // }
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#283C63',
              foreground: '#FFFFFF',
            },
            white: {
              DEFAULT: '#FFFFFF',
              foreground: '#000000',
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
