module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
  },
  overrides: [
    {
      files: ['src/modules/**/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
}