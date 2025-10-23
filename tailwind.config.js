/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', // 確保在 pages 目錄中的所有 js, ts, jsx 和 tsx 文件都能應用 Tailwind CSS
      './components/**/*.{js,ts,jsx,tsx}', // 確保在 components 目錄中的所有 js, ts, jsx 和 tsx 文件都能應用 Tailwind CSS
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  