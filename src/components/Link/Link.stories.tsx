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
    children: (
      <Text as="span" variant="roboto-small">
        DESIGNED BY PAUL
      </Text>
    ),
  },
};
