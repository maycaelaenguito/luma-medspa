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
        raleway:["Raleway", "cursive"],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      backgroundImage: {
        'header': " linear-gradient(180deg, rgba(0, 0, 0, 0.25) 100%, rgba(0, 0, 0, 0.25) 100%, rgba(0, 0, 0, 0.25) 100%), url(https://res.cloudinary.com/dk3aalcb0/image/upload/v1694409717/Luma%20Medspa/skin2_2_p4ox0s.png)",
        'grid-col-1': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688447/Luma%20Medspa/1_4_zktyvg.png')",
        'grid-col-2': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688447/Luma%20Medspa/2_4_vkqchp.png')",
        'grid-col-3': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688446/Luma%20Medspa/3_4_ctbgzu.png')",
        'grid-col-4': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688447/Luma%20Medspa/4_2_famr5z.png')",
        'grid-col-5': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688447/Luma%20Medspa/5_2_a4ov27.png')",
        'grid-col-6': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.47) 59.82%, #000 100%), url('https://res.cloudinary.com/dk3aalcb0/image/upload/v1694688447/Luma%20Medspa/6_1_rb4m9j.png')",
      }
    },
  },
  plugins: [],
}

