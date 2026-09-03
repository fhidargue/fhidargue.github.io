import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import TopBar from "./TopBar";

const meta = {
  title: "Components/TopBar",
  component: TopBar,

  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],

  tags: ["autodocs"],

  argTypes: {
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
