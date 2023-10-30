/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wb-black": "#1F1F1F",
        "wb-gray": "#404040",
        "wb-lightgray": "#F3F3F3",
        "wb-lightgray2": "#E6E6E6",
        "wb-white": "#FDFDFD",
        "wb-red": "#FF0000",
        "wb-redorange": "#FF4D00",
        "wb-orange": "#FF7400",
        "wb-orangeyellow": "#FF9A00",
        "wb-yellow": "#FFC100",
      },
      backgroundImage: {
        deskripsi: "url('./assets/images/deskripsi.jpg')",
      },
      spacing: {
        "wb-screen": "75rem",
        "wb-42": "42rem",
        "wb-30": "32rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
