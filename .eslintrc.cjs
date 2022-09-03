/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        "no-trailing-spaces": "error",
        "eol-last": ["error", "always"],
        "comma-dangle": ["error", "never"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        "no-unused-vars": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ],
        "vue/multi-word-component-names": "off"
    }
}
