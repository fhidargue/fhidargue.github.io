import type { Meta, StoryObj } from "@storybook/react-vite";

import Logo from "./Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,

  parameters: {
    layout: "centered",
    controls: {
      exclude: ["theme"],
    },
  },

  argTypes: {
    size: {
      control: {
        type: "number",
        min: 20,
        max: 200,
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 64,
  },

  render: (args, context) => <Logo {...args} theme={context.globals.theme} />,
};
