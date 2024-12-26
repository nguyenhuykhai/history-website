import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        'trong-dong': "url('/src/assets/image/background/background-trong-dong.webp')",
      }
    },
  },
  plugins: [flowbite.plugin()],
};
