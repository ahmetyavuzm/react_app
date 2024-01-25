/** @type {import('tailwindcss').Config} */
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

      },
      animation: {
        'wave': 'wave 3s linear infinite',
        "wave-delay-1s" : "wave 3s linear 1s infinite",
        "wave-delay-2s" : "wave 3s linear 2s infinite",
        "breathe": "breathe 1s linear infinite"
      },

    },
  },
  plugins: [],
}
