/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "lotus-bg": "url('/bg-image.png')",
            },
            fontFamily: {
                parisienne: ["Parisienne", "cursive"],
            },
            colors: {
                lotus: {
                    cream: "#F3EED6",
                    pollen: "#E1C76A",
                },
                green: {
                    sage: "#8FAF7A",
                    pond: "#5E7F63",
                    moss: "#3F5F45",
                    ink: "#2E3F2F",
                },
                mist: {
                    olive: "#7C8B63",
                    gold: "#C7A64A",
                    golddark: "#7A5F28",
                    brown: "#5A3E2B",
                },
            },
        },
    },
    plugins: [],
};
