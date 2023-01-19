/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PS_primary: "#262161", //primary dark blue shade
        PS_accent: "#EE4036", // button red color
        PS_primaryText: "#333333", // primary text color
        PS_secondaryText: "#666666", // heading text color
        PS_rejected: "#D60A0A", // red rejected
        PS_accepted: "#4FC027", // green accepted
        PS_border: "#D7D7D7", // border color
      },

      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
