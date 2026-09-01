import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "@components/Text/Text";

import Button from "./Button";

const storyWrapperStyle = {
  padding: "40px",
  backgroundColor: "#efefef",
};

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "alpha"],
    },

    iconOnly: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    iconOnly: false,
    children: (
      <Text as="span" variant="paragraph-large">
        Button
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Button {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    iconOnly: false,
    children: (
      <Text as="span" variant="paragraph-large">
        Button
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Button {...args} />
    </div>
  ),
};

export const Alpha: Story = {
  args: {
    variant: "alpha",
    iconOnly: false,
    children: (
      <Text as="span" variant="paragraph-large">
        Button
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Button {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    iconOnly: false,
    children: (
      <Text as="span" variant="paragraph-large">
        Button
      </Text>
    ),
  },

  render: () => (
    <div
      style={{
        ...storyWrapperStyle,
        display: "flex",
        gap: "32px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary">
        <Text as="span" variant="paragraph-large">
          Button
        </Text>
      </Button>

      <Button variant="secondary">
        <Text as="span" variant="paragraph-large">
          Button
        </Text>
      </Button>

      <Button variant="alpha">
        <Text as="span" variant="paragraph-large">
          Button
        </Text>
      </Button>
    </div>
  ),
};

export const AllExternal: Story = {
  render: () => (
    <div
      style={{
        ...storyWrapperStyle,
        display: "flex",
        gap: "32px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary" iconOnly aria-label="Open external link" />
      <Button variant="secondary" iconOnly aria-label="Open external link" />
      <Button variant="alpha" iconOnly aria-label="Open external link" />
    </div>
  ),
};
