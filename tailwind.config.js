module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "system-ui"],
        NotoSerif: ["Noto Serif Khmer", "Noto Serif Khmer"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}