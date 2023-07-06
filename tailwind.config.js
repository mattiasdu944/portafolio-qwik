/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary' :'#4338ca',
        'secondary':'#a21caf',

        'dark':'#3f3f46'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-1rem)' },
          '50%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
};
