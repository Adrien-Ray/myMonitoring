module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'import/extensions': 'off',
        'spaced-comment': 'off',
        'no-underscore-dangle': 'off',
        'no-inner-declarations': 'off',
        'no-console': 'off',
        eqeqeq: 'off',
        'no-undef': 'off',
        'no-restricted-syntax': 'off',
    },
};
