import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    level: {
      control: "select",

      options: [1, 2, 3],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Felipe Hidalgo",
    level: 1,
  },
};

export const HeadingOne: Story = {
  args: {
    children: "Heading One",
    level: 1,
  },
};

export const HeadingTwo: Story = {
  args: {
    children: "Heading Two",
    level: 2,
  },
};

export const HeadingThree: Story = {
  args: {
    children: "Heading Three",
    level: 3,
  },
};
