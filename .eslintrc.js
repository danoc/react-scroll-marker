module.exports = {
  extends: [
    "airbnb",
    "plugin:jest/recommended",
    // Prettier must go last so that it can turn off other rules
    "prettier"
  ],
  plugins: ["jest"],
  env: {
    browser: true,
    "jest/globals": true
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  }
};
