/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                darkBlue: '#141c32',
                lightBlue: '#4a6eec',
                lightGray: '#686767',
                darkGray: '#707070',
            },
            borderWidth: {
                3: '3px',
            },
        },
    },
    plugins: [],
};

