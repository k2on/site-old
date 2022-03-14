const K2_RED = "#5e1935";
const K2_ORANGE = "#5b3220";
const K2_YELLOW = "#536028";
const K2_GREEN = "#1f5d5c";
const K2_BLUE = "#141e5b";
const K2_PURPLE = "#441c50";

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            letterSpacing: {
                tightest: "-1px",
            },
            colors: {
                "k2-red": K2_RED,
                "k2-orange": K2_ORANGE,
                "k2-yellow": K2_YELLOW,
                "k2-green": K2_GREEN,
                "k2-blue": K2_BLUE,
                "k2-purple": K2_PURPLE,
            },
        },
    },
    plugins: [],
};
