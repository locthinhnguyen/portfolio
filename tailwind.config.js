/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#171717',
        bgColor2: '#212121',
        primaryColor: '#FFF',
        secondaryColor: '#535353',
        thirdColor: '#4F4F4F',
        greenColor: '#27AE60',
      },
      backgroundImage: {
        primaryRgba: 'rgba(30, 29, 29, 0.20)',
      },
    },
  },
  plugins: [],
};
