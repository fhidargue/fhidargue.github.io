import type { Meta, StoryObj } from "@storybook/react-vite";
import { FramerLogoIcon, AppleLogoIcon } from "@phosphor-icons/react";
import { MemoryRouter } from "react-router-dom";

import useBreakpoints from "@hooks/useBreakpoints";

import Card, { type CardProps } from "./Card";

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

export const Project: Story = {
  render: (args: CardProps) => {
    const { isMobile } = useBreakpoints();

    return (
      <Card
        {...args}
        width={isMobile ? 360 : 480}
        height={isMobile ? 360 : 480}
      />
    );
  },
  args: {
    variant: "project",
    image: "/images/cards/man.png",
    title: "HUD",
    category: "AR/VR",
    to: "/work/hud",
    width: 480,
    height: 480,
    type: "image",
    hasNoise: true,
  },
};

export const TechStack: Story = {
  render: (args: CardProps) => {
    const { isMobile } = useBreakpoints();

    return (
      <Card
        {...args}
        width={isMobile ? 360 : 480}
        height={isMobile ? 360 : 480}
      />
    );
  },
  args: {
    variant: "tech-stack",
    icon: <FramerLogoIcon size={96} weight="fill" />,
    title: "Framer",
    category: "WEBSITE BUILDER",
    to: "/stack/framer",
    width: 480,
    height: 480,
  },
};

export const Client: Story = {
  render: (args: CardProps) => {
    const { isMobile } = useBreakpoints();

    return (
      <Card
        {...args}
        width={isMobile ? 360 : 480}
        height={isMobile ? 360 : 480}
      />
    );
  },

  args: {
    variant: "client",
    icon: <AppleLogoIcon size={120} weight="fill" />,
    to: "/clients/apple",
    width: 480,
    height: 480,
  },
};
