module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gold: "#F1C27D",
        textgold: "#FDE047",
        bggold: "#F1C27D",
        deepPurple: "#3C0A45",
        hoverpurple: "#4E115A",
        orangebg: "#EA580C",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-justify-hyphen": {
          textAlign: "justify",
          hyphens: "auto",
        },
        ".theme-text-bg": {
          color: "#F1C27D",
          backgroundColor: "#F1C27D",
        },
        ".logo-theme": {
          // backgroundColor: "#F1C27D",
          // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          // borderRadius: "5px",
        },
        ".button-theme": {
          fontWeight: "bold",
          color: "black",
          backgroundColor: "#F1C27D",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease-in-out",
        },
        ".button-theme:hover": {
          backgroundColor: "#fde047",
        },
        ".button-theme2": {
          fontWeight: "bold",
          color: "#F1C27D",
          backgroundColor: "#6E3D72",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease-in-out",
        },
        ".button-theme2:hover": {
          backgroundColor: "#3C0A45",
        },
        ".custom-dots .slick-dots li button:before": {
          color: "black",
          fontSize: "12px",
        },
        ".custom-dots .slick-dots li.slick-active button:before": {
          color: "#F1C27D",
        },
      });
    },
  ],
};
