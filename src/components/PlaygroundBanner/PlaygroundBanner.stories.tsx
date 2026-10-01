import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import TopBar from "@components/TopBar/TopBar";

import PlaygroundBanner from "./PlaygroundBanner";

const meta = {
  title: "Components/Playground Banner",
  component: PlaygroundBanner,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    topHeading: "EXPLORE THE",
    bottomHeading: "GROUND",
    label:
      "UNLEASH YOUR CREATIVITY. SHOWCASE YOUR BEST CONCEPT WORK AND HIGHLIGHT YOUR UNIQUE SKILLS TO ATTRACT NEW CLIENTS.",
    media: "/images/cards/man.png",
    mediaAlt: "Playground",
    mediaType: "image",
  },
} satisfies Meta<typeof PlaygroundBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <TopBar />
      <PlaygroundBanner {...args} />
      <div
        style={{
          width: "100%",
          height: "800px",
          backgroundColor: "var(--color-text)",
        }}
      />
    </>
  ),
};

export const Video: Story = {
  args: {
    media: "/videos/bunny.mp4",
    mediaType: "video",
    mediaAlt: "Motion Study",
  },
  render: (args) => (
    <>
      <TopBar />
      <PlaygroundBanner {...args} />
      <div
        style={{
          width: "100%",
          height: "800px",
          backgroundColor: "var(--color-text)",
        }}
      />
    </>
  ),
};
