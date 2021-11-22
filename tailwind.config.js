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
                    DEFAULT: '#0af'
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}