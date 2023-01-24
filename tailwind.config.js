/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                darkBlue: '#141c32',
                lightBlue: '#4a6eec',
            },
        },
    },
    plugins: [],
};

