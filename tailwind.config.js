/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        screens: {
            sm: "500px",
            md: "780px",
            lg: "976px",
            xl: "1450px",
        },
        extend: {
            colors: {
                brightRed: "hsl(12, 88%, 59%)",
                brightRedLight: "hsl(12, 88%, 69%)",
                brightRedSupLight: "hsl(12, 88%, 95%)",
                darkBlue: "hsl(228, 39%, 23%)",
                darkGrayishBlue: "rgba(27, 29, 34, 50%)",
                veryDarkBlue: "hsl(223, 12%, 13%)",
                veryPaleRed: "hsl(12, 100%, 96%)",
                veryLightGray: "hsl(0, 0%, 98%)",
            },
        },
    },
    plugins: [],
};
