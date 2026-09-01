import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};

    config.resolve.alias = {
      ...config.resolve.alias,

      "@components": fileURLToPath(
        new URL("../src/components", import.meta.url),
      ),
      "@styles": fileURLToPath(new URL("../src/styles", import.meta.url)),
      "@assets": fileURLToPath(new URL("../src/assets", import.meta.url)),
    };

    return config;
  },
};

export default config;
