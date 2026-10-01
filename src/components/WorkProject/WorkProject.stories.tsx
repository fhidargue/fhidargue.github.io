import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "@components/Text/Text";

import WorkProject from "./WorkProject";

const meta = {
  title: "Components/WorkProject",
  component: WorkProject,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof WorkProject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "HUD",
    description: "Expand Your Universe",
    tags: [
      {
        label: "AR/VR",
        variant: "primary",
      },
      {
        label: "2077",
        variant: "secondary",
      },
    ],
    media: [
      {
        src: "/images/film-strip/pc.png",
        type: "image",
        alt: "HUD project",
        hasNoise: true,
        isHovered: false,
      },
      {
        src: "/images/film-strip/peace.png",
        type: "image",
        alt: "HUD project",
        hasNoise: false,
        isHovered: false,
      },
      {
        src: "/images/film-strip/deck.png",
        type: "image",
        alt: "HUD project",
        hasNoise: true,
        isHovered: false,
      },
    ],
    children: (
      <>
        <Text variant="roboto-large">ABOUT</Text>
        <Text variant="roboto-small" colorType="secondary">
          AUGMENTED REALITY (AR) AND VIRTUAL REALITY (VR) BRIDGE THE DIGITAL AND
          PHYSICAL WORLDS. THEY ALLOW YOU TO TAKE IN INFORMATION AND CONTENT
          VISUALLY, AND TO TAKE YOU INTO THE WORLD.
        </Text>
      </>
    ),
  },
};
