/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      colors: {
         txtwhite: 'rgb(255, 255, 255)',
         slate: 'rgb(21, 35, 66)',
         turquoise: 'rgb(73, 126, 126)',
         midnight: 'rgb(13, 13, 48)',
         lime: 'rgb(135, 230, 40)',
      },
      extend: {
         fontFamily: {
            sans: ['Quattrocento sans'],
            serif: ['Taviraj'],
            h1: ['Bodoni Moda'],
         },
      },
   },
   plugins: [
      plugin(function ({ addBase, theme }) {
         addBase({
            h2: { fontFamily: theme('fontFamily.serif') },
         })
      }),
   ],
}
