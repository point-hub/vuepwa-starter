module.exports = {
  extends: [
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