/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                darkBlue: '#141c32',
                lightBlue: '#4a6eec',
                lightGray: '#5a6070',
            },
            borderWidth: {
                3: '3px',
            },
        },
    },
    plugins: [],
};

