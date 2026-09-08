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
    hasNoise: true,
    borderRadius: 32,
  },
} satisfies Meta<typeof Media>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div style={{ width: 480, height: 480 }}>
      <Media {...args} />
    </div>
  ),
};

export const WithoutNoise: Story = {
  render: (args) => (
    <div style={{ width: 480, height: 480 }}>
      <Media {...args} />
    </div>
  ),
  args: {
    hasNoise: false,
  },
};

export const Video: Story = {
  render: (args) => (
    <div style={{ width: 480, height: 480 }}>
      <Media {...args} />
    </div>
  ),
  args: {
    src: "/videos/bunny.mp4",
    type: "video",
    poster: "/images/film-strip/pc.png",
    hasNoise: true,
  },
};

export const Custom: Story = {
  render: (args) => {
    const imageSrc = "/images/film-strip/pc.png";
    const videoSrc = "/videos/bunny.mp4";

    return (
      <div style={{ width: 600, height: 400 }}>
        <Media
          {...args}
          src={args.type === "video" ? videoSrc : imageSrc}
          poster={imageSrc}
        />
      </div>
    );
  },

  argTypes: {
    type: {
      control: "select",
      options: ["image", "video"],
    },
  },
};
