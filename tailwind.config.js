/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Violet: "hsl(257, 40%, 49%)",
                c_Soft_Magenta: "hsl(300, 69%, 71%)",
            },
            fontFamily: {
                headings: ["Poppins", "sans-serif"],
                body: [ "Open Sans", "system-ui"]
            }
        },
    },
    plugins: [],
}

