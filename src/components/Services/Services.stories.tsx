import type { Meta, StoryObj } from "@storybook/react-vite";

import Services from "./Services";

const meta = {
  title: "Components/Services",
  component: Services,
  parameters: {
    layout: "padded",
  },
  args: {
    services: [
      {
        title: "3D DESIGN",
        image: "/images/services/robot.png",
        imagePosition: "left",
      },
      {
        title: "PHOTOGRAPHY",
        image: "/images/services/girl.png",
        imagePosition: "right",
      },
      {
        title: "UI+UX",
        image: "/images/services/keyboard.png",
        imagePosition: "left",
      },
      {
        title: "WEB DESIGN",
        image: "/images/services/laptop.png",
        imagePosition: "right",
      },
    ],
  },
} satisfies Meta<typeof Services>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
