// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        'no-multiple-empty-lines': 'off',
        'space-before-function-paren': 'off',
        'no-new': 'off',
        'semi': 'off',
        'eqeqeq': 'off',
        'no-tabs': 'off',
        'comma-dangle': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}