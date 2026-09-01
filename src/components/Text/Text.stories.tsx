import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "section-title-large",
        "section-title-small",
        "paragraph-large",
        "paragraph-small",
        "roboto-large",
        "roboto-small",
      ],
    },

    as: {
      control: "select",
      options: ["p", "span", "div"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text Styles",
    variant: "section-title-large",
    as: "p",
  },
};

export const SectionTitleLarge: Story = {
  args: {
    children: "Section Title",
    variant: "section-title-large",
  },
};

export const SectionTitleSmall: Story = {
  args: {
    children: "Section Title",
    variant: "section-title-small",
  },
};

export const ParagraphLarge: Story = {
  args: {
    children: "Paragraph Large",
    variant: "paragraph-large",
  },
};

export const ParagraphSmall: Story = {
  args: {
    children: "Paragraph Small",
    variant: "paragraph-small",
  },
};

export const RobotoLarge: Story = {
  args: {
    children: "ROBOTO LARGE",
    variant: "roboto-large",
  },
};

export const RobotoSmall: Story = {
  args: {
    children: "ROBOTO SMALL",
    variant: "roboto-small",
  },
};
