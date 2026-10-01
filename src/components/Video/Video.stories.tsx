import type { Meta, StoryObj } from "@storybook/react-vite";

import Video from "./Video";

const meta = {
  title: "Components/Video",
  component: Video,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const YouTube: Story = {
  args: {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    poster: "/images/film-strip/peace.png",
    category: "VIDEO",
    title: "YouTube Test",
  },
};

export const Vimeo: Story = {
  args: {
    src: "https://vimeo.com/76979871",
    poster: "/images/film-strip/deck.png",
    category: "VIDEO",
    title: "Vimeo Test",
  },
};
