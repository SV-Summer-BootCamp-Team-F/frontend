/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // 여기에 추가로 필요한 폰트 추가 후 사용, 1rem = 10px
    fontSize: {
      "1": "1rem",
      "1.2": "1.2rem",
      "2": "2rem",
      "2.4": "2.4rem",
      "2.8": "2.8rem",
    },
    extends: {
      // 여기에 추가로 필요한 간격 추가 후 사용, 1rem = 10px
      spacing: {
        "1": "1rem",
        "2": "2rem",
        "3": "3rem",
        "4": "4rem",
        "5": "5rem",
        "6": "6rem",
        "7": "7rem",
        "8": "8rem",
        "9": "9rem",
        "10": "10rem",
        "11": "11rem",
        "12": "12rem",
        "13": "13rem",
        "14": "14rem",
        "15": "15rem",
        "16": "16rem",
        "17": "17rem",
        "18": "18rem",
        "19": "19rem",
        "20": "20rem",
      },
      // 여기에 추가로 필요한 색상 추가 후 사용
      colors: {
        rememberBlue: "#7CC7E8",
        rememberBlueHover: "#6AB9E0",
        rememberBlueActive: "#5AA8CC",
        rememberBlueDisabled: "#B3DFF0",
        rememberBlack: "#090909",
        rememberBlackHover: "#0A0A0A",
        rememberBlackActive: "#0B0B0B",
        rememberBlackDisabled: "#4D4D4D",
        rememberWhite: "#FFFFFF",
        rememberWhiteHover: "#F2F2F2",
        rememberWhiteActive: "#E6E6E6",
        rememberWhiteDisabled: "#E6E6E6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
