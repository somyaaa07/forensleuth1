/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#207eff',
        'primary-dark': '#0a5cdb',
        'primary-light': '#5b9dff',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #207eff, #0a5cdb)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(32, 126, 255, 0.3)',
        'glow-lg': '0 0 50px rgba(32, 126, 255, 0.4)',
      },
    },
  },
  plugins: [],
}