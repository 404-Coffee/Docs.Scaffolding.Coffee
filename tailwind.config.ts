/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ochre: {
          50: '#fdf7ed',
          100: '#f8e7cd',
          200: '#f0cd97',
          300: '#e8af61',
          400: '#e3943c',
          500: '#d87324',
          600: '#c1561e',
          700: '#a13d1c',
          800: '#83311d',
          900: '#6c291b',
          950: '#3e120a',
        },
        dune: {
          50: '#f7f7f6',
          100: '#e5e3e2',
          200: '#cbc7c4',
          300: '#a9a29f',
          400: '#877f7a',
          500: '#6c6560',
          600: '#55504c',
          700: '#46433f',
          800: '#3a3835',
          900: '#33302e',
          950: '#23211f',
        },
      },
      height: {
        screen: '100svh',
      },
      minHeight: {
        screen: '100svh',
      },
      maxHeight: {
        screen: '100svh',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
