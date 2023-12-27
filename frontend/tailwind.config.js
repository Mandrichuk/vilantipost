/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color-50': 'rgb(207, 246, 243)',
        'custom-color-100': 'rgb(180, 240, 237)',
        'custom-color-200': 'rgb(153, 233, 230)',
        'custom-color-300': 'rgb(126, 227, 224)',
        'custom-color-400': 'rgb(109, 222, 218)',
        'custom-color-500': 'rgb(98, 221, 212)', // Original color
        'custom-color-600': 'rgb(87, 195, 187)',
        'custom-color-700': 'rgb(76, 170, 162)',
        'custom-color-800': 'rgb(65, 144, 136)',
        'custom-color-900': 'rgb(54, 119, 111)',
      }
    },
  },
  plugins: [],
}
