/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'app-blue': '#1b4db1',
        'app-yellow': '#f3f243',
        'app-pink': '#ff64bc',
        'app-whiteCinc': '#fafbfd',
        'app-red': '#d41e45',
        'app-gray': '#f0f0d8',
        'app-deepGray': '#7a8370',
        'app-whiteGray': '#777777',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'app-card': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
