import type { Meta, StoryObj } from "@storybook/react-vite";

import DigitalClock from "./DigitalClock";

const meta = {
  title: "Components/DigitalClock",
  component: DigitalClock,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    timeZone: "Europe/London",
    location: "BOURNEMOUTH, UK",
  },
} satisfies Meta<typeof DigitalClock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
