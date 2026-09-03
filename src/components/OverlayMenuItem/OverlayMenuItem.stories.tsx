import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import OverlayMenuItem from "./OverlayMenuItem";

const meta = {
  title: "Components/Overlay Menu Item",
  component: OverlayMenuItem,

  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],

  tags: ["autodocs"],

  argTypes: {
    contentType: {
      control: "select",
      options: ["heading", "text"],
    },
  },
} satisfies Meta<typeof OverlayMenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "MENU ITEM",
    to: "/work",
    contentType: "heading",
  },
};

export const FullWidth: Story = {
  args: {
    label: "MENU ITEM",
    to: "/work",
    contentType: "heading",
    fullWidth: true,
  },
};
