module.exports = {
    mode: 'jit',
    purge: [
        './views/**/*.ejs',
        './views/*.ejs',
        './public/**/*.html',
        './public/*.html',
        './partials/*.ejs'
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
            },
            colors: {
                primary: {
                    DEFAULT: '#0af',
                    dark_blue: '#0a0132',
                    primary_purple: '#4f46e5',
                    light_purple: '#4f46e52e'
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}