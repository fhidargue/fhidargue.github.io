import type { Meta, StoryObj } from "@storybook/react-vite";
import styles from "./Container.module.scss";

import Container from "./Container";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Container content",
  },
};

export const WithPadding: Story = {
  args: {
    children: "Container with padding",
    className: styles["container--story"],
  },
};
