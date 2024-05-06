/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
const flowbite = require("flowbite-react/tailwind");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
})