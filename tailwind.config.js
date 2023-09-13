import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/js/Components/ScrollToTop.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                darkgreen: "#2e4500"
            }
        },
    },

    plugins: [forms],
    corePlugins: {
        preflight: false,
    },
};
