/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.055em',
      widest: '.115em',
    },
    extend: {
      fontFamily: {
        Dancing:["Dancing Script","cursive"],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}

