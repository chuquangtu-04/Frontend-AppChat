// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-lg': {'max': '1200px'}, // màn hình nhỏ hơn hoặc bằng 1000px
        'max-md': {'max': '860px'}, // màn hình nhỏ hơn hoặc bằng 700px
      },
      gridTemplateColumns: {
        'app-layout': '80px 340px 2fr 1.2fr',
        'app-layout-collapse': '80px 340px 3.2fr',  // layout khi ẩn cột 4
        'app-layout-collapses': '80px 1fr',  // layout khi ẩn cột 4
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar')
  ],
};
