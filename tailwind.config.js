module.exports = {
  // mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Koulen: ["Koulen", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Roboto: ["'Roboto Slab'", "serif"]
      },
      colors: {
        illegalGreen: "#00AB4E",
        illegalRed: "#EE3224",
        illegalBlue: "#2E9BD2",
        illegalBackground: "#FAF7EC",
        illegalBlack: "#231F20"
      }
    },
  },
  plugins: [],
}
