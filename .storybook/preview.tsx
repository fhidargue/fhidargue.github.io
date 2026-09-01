import "../src/styles/main.scss";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      document.documentElement.setAttribute("data-theme", theme);

      return <Story />;
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
