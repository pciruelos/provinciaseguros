/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    '../node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    '../node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add flowbite plugin here
  ],
}
