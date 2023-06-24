/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,ts,jsx,tsx,html}",],
  purge: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
    screens: {
      "xs": { "min": "200px" },
      "sm": { "min": "375px" },
      "md": { "min": "425px" },
      "lg": { "min": "768px" },
      "xl": { "min": "1000px" },
    },
  },
  plugins: [
  ],
}
