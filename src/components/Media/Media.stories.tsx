import type { Meta, StoryObj } from "@storybook/react-vite";

import Media from "./Media";

const meta = {
  title: "Components/Media",
  component: Media,
  parameters: {
    layout: "centered",
  },
  args: {
    src: "/images/film-strip/pc.png",
    type: "image",
    alt: "HUD project",
    width: 480,
    height: 480,
    hasNoise: true,
    borderRadius: 32,
  },
} satisfies Meta<typeof Media>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithoutNoise: Story = {
  args: {
    hasNoise: false,
  },
};

export const Video: Story = {
  args: {
    src: "/videos/bunny.mp4",
    type: "video",
    poster: "/images/film-strip/pc.png",
    hasNoise: true,
  },
};

export const Custom: Story = {
  args: {
    width: 600,
    height: 400,
  },

  argTypes: {
    type: {
      control: "select",
      options: ["image", "video"],
    },
    width: {
      control: {
        type: "number",
        min: 100,
        step: 10,
      },
    },
    height: {
      control: {
        type: "number",
        min: 100,
        step: 10,
      },
    },
  },

  render: (args) => {
    const imageSrc = "/images/film-strip/pc.png";
    const videoSrc = "/videos/bunny.mp4";

    return (
      <Media
        {...args}
        src={args.type === "video" ? videoSrc : imageSrc}
        poster={imageSrc}
      />
    );
  },
};
