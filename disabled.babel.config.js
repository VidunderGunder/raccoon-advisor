// Rename to babel.config.js to enable (disables SWC)

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        cssProp: true,
        ssr: true,
        meaninglessFileNames: ["index", "styles"],
      },
    ],
  ],
};
