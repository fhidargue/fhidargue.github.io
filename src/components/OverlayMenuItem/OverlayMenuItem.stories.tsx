import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "@components/Heading/Heading";

import OverlayMenuItem from "./OverlayMenuItem";

const meta = {
  title: "Components/OverlayMenuItem",
  component: OverlayMenuItem,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    item: {
      control: "text",
    },

    contentType: {
      control: "select",
      options: ["heading", "text"],
    },

    children: {
      control: false,
    },
  },
} satisfies Meta<typeof OverlayMenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: "[ VIEW MENU ITEM ]",
    contentType: "heading",
    children: <Heading level={2}>MENU ITEM</Heading>,
  },

  render: (args) => <OverlayMenuItem {...args} />,
};

export const FullWidth: Story = {
  args: {
    item: "[ VIEW MENU ITEM ]",
    contentType: "heading",
    children: <Heading level={2}>MENU ITEM</Heading>,
    fullWidth: true,
  },

  render: (args) => <OverlayMenuItem {...args} />,
};
