module.exports = {
    mode: 'jit',
    purge: [
        './views/**/*.ejs',
        './views/*.ejs',
        './public/**/*.html',
        './public/*.html'
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