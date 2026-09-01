import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "@components/Text/Text";

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
  args: {
    children: (
      <Text as="span" variant="section-title-large">
        Change theme
      </Text>
    ),
  },
};
