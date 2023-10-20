/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "none",
  useTabs: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
