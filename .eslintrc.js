module.exports = {
  root: true,
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  overrides: [
    {
      files: ['src/modules/**/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
};
