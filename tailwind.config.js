/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wb-black": "#1F1F1F",
        "wb-gray": "#404040",
        "wb-lightgray": "#F3F3F3",
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
        "wb-30": "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
