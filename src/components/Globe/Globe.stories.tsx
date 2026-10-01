import type { Meta, StoryObj } from "@storybook/react-vite";

import Globe from "./Globe";

const meta = {
  title: "Components/Globe",
  component: Globe,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Globe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
