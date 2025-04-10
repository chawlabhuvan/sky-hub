const { tailwindConfig } = require("@sky-hub/tailwind/config");
const extractDesignSystemVariables = require("./tailwind.config.viewer.cjs");

module.exports = {
  presets: [tailwindConfig],
  important: true,
  content: [
    ...tailwindConfig.content,
    "./libs/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    configViewer: {
      themeReplacements: extractDesignSystemVariables(),
    },
  },
};
