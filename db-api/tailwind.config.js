/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite-react/**/*.js" // Importante para Flowbite
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin') // Agrega el plugin de Flowbite
    ],
  };
  