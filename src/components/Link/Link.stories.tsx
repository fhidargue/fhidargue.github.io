import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import Text from "@components/Text/Text";

import Link, { type LinkProps } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,

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

  tags: ["autodocs"],
} satisfies Meta<LinkProps>;

export default meta;

type Story = StoryObj<LinkProps>;

export const InternalLink: Story = {
  args: {
    to: "/work",
    changed: "W0RK",
    isExternal: false,

    children: (
      <Text as="span" variant="roboto-large">
        WORK
      </Text>
    ),
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    changed: "EXT3RN4L L1NK",
    isExternal: true,

    children: (
      <Text as="span" variant="roboto-large">
        EXTERNAL LINK
      </Text>
    ),
  },
};

export const Button: Story = {
  args: {
    as: "button",
    type: "button",
    changed: "M3NU",

    children: (
      <Text as="span" variant="roboto-large">
        MENU
      </Text>
    ),
  },
};
