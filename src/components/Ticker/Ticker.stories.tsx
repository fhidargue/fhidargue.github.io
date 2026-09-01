import type { Meta, StoryObj } from "@storybook/react-vite";

import Ticker from "./Ticker";

const meta = {
  title: "Components/Ticker",
  component: Ticker,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    title1: {
      control: "text",
    },

    title2: {
      control: "text",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Ticker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title1: "MORE WORK",
    title2: "YOU MIGHT LIKE",
    duration: 200,
  },
};
