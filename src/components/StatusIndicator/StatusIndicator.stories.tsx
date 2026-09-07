import type { Meta, StoryObj } from "@storybook/react-vite";

import StatusIndicator from "./StatusIndicator";
import Text from "@components/Text/Text";

const meta = {
  title: "Components/Status Indicator",
  component: StatusIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof StatusIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text variant="roboto-small">AVAILABLE FOR FREELANCE</Text>,
  },
};
