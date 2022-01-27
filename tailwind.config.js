module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light: '#7b8c52',
        DEFAULT: '#485933',
        dark: '#1e2616',
      },
      gray: {
        DEFAULT: '#f2f2f2', 
        dark: '#3D413B',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}}}
