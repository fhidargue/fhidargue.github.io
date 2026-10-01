import type { Meta, StoryObj } from "@storybook/react-vite";

import FilmStrip from "./FilmStrip";

const meta = {
  title: "Components/Film Strip",
  component: FilmStrip,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilmStrip>;

export default meta;

type Story = StoryObj<typeof meta>;

const images = [
  "/images/film-strip/subway.png",
  "/images/film-strip/desk.png",
  "/images/film-strip/stairs.png",
  "/images/film-strip/deck.png",
  "/images/film-strip/pc.png",
];

export const Small: Story = {
  args: {
    images,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    images,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    images,
    size: "lg",
  },
};
