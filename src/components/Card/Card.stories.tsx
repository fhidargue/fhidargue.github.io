import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FramerLogoIcon, AppleLogoIcon } from "@phosphor-icons/react";
import { MemoryRouter } from "react-router-dom";

import Card from "./Card";
import type { CardProps } from "./Card.types";

import styles from "./Card.stories.module.scss";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;

type StoryContainerProps = {
  children: ReactNode;
  className: string;
};

const StoryContainer = ({ children, className }: StoryContainerProps) => (
  <div className={`${styles["card-story-container"]} ${styles[className]}`}>
    {children}
  </div>
);

export const Project: Story = {
  args: {
    variant: "project",
    image: "/images/cards/man.png",
    title: "HUD",
    category: "AR/VR",
    to: "/work/hud",
    type: "image",
    hasNoise: true,
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--project">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const TechStack: Story = {
  args: {
    variant: "tech-stack",
    icon: <FramerLogoIcon size={96} weight="fill" />,
    title: "Framer",
    category: "WEBSITE BUILDER",
    to: "/stack/framer",
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--square">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const Client: Story = {
  args: {
    variant: "client",
    icon: <AppleLogoIcon size={120} weight="fill" />,
    to: "/clients/apple",
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--square">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const Colophon: Story = {
  args: {
    variant: "colophon",
    video: "/videos/bunny.mp4",
    thumbnail: "/images/film-strip/pc.png",
    title: "Inter by Rasmus Andersson",
    category: "TYPOGRAPHY",
    to: "/work",
    hasNoise: true,
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--colophon">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const Award: Story = {
  args: {
    variant: "award",
    category: "WEBSITE",
    title: "AWARD",
    year: "2022",
    to: "/awards/example",
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--award">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const PlaygroundImage: Story = {
  args: {
    variant: "playground",
    media: "/images/cards/man.png",
    title: "Image Study",
    category: "PLAYGROUND",
    to: "/playground/image",
    type: "image",
    hasNoise: true,
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--playground-image">
      <Card {...args} />
    </StoryContainer>
  ),
};

export const PlaygroundVideo: Story = {
  args: {
    variant: "playground",
    media: "/videos/bunny.mp4",
    poster: "/images/film-strip/pc.png",
    title: "Motion Study",
    category: "PLAYGROUND",
    to: "/playground/video",
    type: "video",
    hasNoise: true,
  },
  render: (args: CardProps) => (
    <StoryContainer className="card-story-container--playground-video">
      <Card {...args} />
    </StoryContainer>
  ),
};
