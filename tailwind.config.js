module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#F0FBFF',
                    900: '#000B54',
                },
            },
            fontFamily: {
                title: ['Open Sans, sans-serif'],
                subtitle: ['Segoe UI Variable, sans-serif'],
            },
        },
    },
    plugins: [],
};
