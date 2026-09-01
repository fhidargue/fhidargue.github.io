import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "@components/Text/Text";

import Link from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    changed: "DE5IGN3D BY P4UL",
    isExternal: false,

    children: (
      <Text as="span" variant="roboto-large">
        DESIGNED BY PAUL
      </Text>
    ),
  },
};

export const ExternalLink: Story = {
  args: {
    href: "#",
    changed: "EXT3RN4L L1NK",
    isExternal: true,
    children: (
      <Text as="span" variant="roboto-large">
        EXTERNAL LINK
      </Text>
    ),
  },
};
