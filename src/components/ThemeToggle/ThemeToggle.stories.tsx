import type { Meta, StoryObj } from "@storybook/react-vite";

import ThemeToggle from "./ThemeToggle";

const meta = {
  title: "Components/Theme Toggle",
  component: ThemeToggle,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <ThemeToggle iconSize={48} />;
  },
};
