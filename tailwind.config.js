/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#b0e4ff',
          300: '#7cd5ff',
          400: '#3dbfff',
          500: '#159fff',
          600: '#027dff',
          700: '#0062d7',
          800: '#004ea8',
          900: '#003f85',
        },
      },
      boxShadow: {
        subtle: '0 4px 16px -2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
