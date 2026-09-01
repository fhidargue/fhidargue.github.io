import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "@components/Text/Text";

import Tag from "./Tag";

const storyWrapperStyle = {
  padding: "40px",
  backgroundColor: "#efefef",
};

const meta = {
  title: "Components/Tag",
  component: Tag,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "alpha"],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: (
      <Text as="span" variant="roboto-small">
        CATEGORY
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Tag {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: (
      <Text as="span" variant="roboto-small">
        CATEGORY
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Tag {...args} />
    </div>
  ),
};

export const Alpha: Story = {
  args: {
    variant: "alpha",
    children: (
      <Text as="span" variant="roboto-small">
        CATEGORY
      </Text>
    ),
  },

  render: (args) => (
    <div style={storyWrapperStyle}>
      <Tag {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    children: (
      <Text as="span" variant="roboto-small">
        CATEGORY
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
      <Tag variant="primary">
        <Text as="span" variant="roboto-small">
          CATEGORY
        </Text>
      </Tag>

      <Tag variant="secondary">
        <Text as="span" variant="roboto-small">
          CATEGORY
        </Text>
      </Tag>

      <Tag variant="alpha">
        <Text as="span" variant="roboto-small">
          CATEGORY
        </Text>
      </Tag>
    </div>
  ),
};
