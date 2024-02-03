import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            flex: {
                '2': '2 2 0%',
            },
            width: {
                '128' : '32rem',
                '144' : '36rem',
                '160' : '40rem',
                '176' : '44rem',
                '192' : '48rem',
                '208' : '52rem',
                '224' : '56rem',
                '240' : '60rem',
                '256' : '64rem',
                '272' : '68rem',
                '288' : '72rem',
                '304' : '76rem',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
