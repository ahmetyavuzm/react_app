/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        wave: {
          '0%': { 
            transform: "scale(1)"
          },
          '100%': { 
            opacity: "0",
            transform: "scale(1.3)" },
        },
        breathe: {
          '0%': { 
            transform: "scale(1)"
          },
          '50%': { 
            transform: "scale(1.1)" },
          '100%': { 
            transform: "scale(1)" },
        },

        stretchX : {
          '0%': { 
            transform: "scaleX(1)"
          },
          '100%': { 
            transform: "scaleX(6)" },
        },

        stretchY : {
          '0%': { 
            transform: "scaleY(1)"
          },
          '100%': { 
            transform: "scaleY(6)" },
        },


      },
      animation: {
        'wave': 'wave 2s linear infinite',
        "wave-delay-1s" : "wave 2s linear 1s infinite",
        "breathe": "breathe 1s linear infinite",
        "stretchX" : "stretchX 1s linear",
        "stretchY" : "stretchY 1s linear",

      },

    },

    colors: {
      ...colors,
      primary: colors.cyan,
      secondary: colors.yellow,
      navbar:"#121212",
    },

  },
  plugins: [],

  safelist: [
    {
      pattern: /^(bg|text|from|to|via)-(red|yellow|green|blue|indigo|purple|pink|cyan)-[0-9]{1,3}$/,
    }
  ],

}
