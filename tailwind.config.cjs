/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'verylight':'#FDEEDC',
        'light':'#FFD8A9',
        'normal':'#F1A661',
        'dark':'#E38B29'
      },
    },
  },
  plugins: [],
}
