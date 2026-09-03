import type { Meta, StoryObj } from "@storybook/react-vite";

import FilmStrip from "./FilmStrip";

const meta = {
  title: "Components/Film Strip",
  component: FilmStrip,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilmStrip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      "/images/film-strip/subway.png",
      "/images/film-strip/desk.png",
      "/images/film-strip/stairs.png",
      "/images/film-strip/deck.png",
      "/images/film-strip/pc.png",
    ],
    size: "md",
  },
};
