import type { Meta, StoryObj } from "@storybook/react-vite";

import AboutMedia from "./AboutMedia";

const meta = {
  title: "Components/AboutMedia",
  component: AboutMedia,
  parameters: {
    layout: "padded",
  },
  args: {
    src: "/images/cards/man.png",
    alt: "About Felipe",
    hasNoise: true,
    leftText: "THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT.",
    rightText: "STAND HIGH LONG ENOUGH AND YOUR LIGHTNING WILL COME.",
  },
} satisfies Meta<typeof AboutMedia>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
