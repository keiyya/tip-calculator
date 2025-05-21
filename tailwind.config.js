/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        myGreen400: 'hsl(172, 67%, 45%)',
        myGreen900: 'hsl(183, 100%, 15%)',
        myGrey500: 'hsl(186, 14%, 43%)',
        myGrey400: 'hsl(184, 14%, 56%)',
        myGrey200: 'hsl(185, 41%, 84%)',
        myGrey50: 'hsl(189, 47%, 97%)',
        myWhite: 'hsl(0, 100%, 100%)'
      }
    },
  },
  plugins: [],
}

