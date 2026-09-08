import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import Container from "@components/Container/Container";
import Card from "@components/Card/Card";

import CardGrid from "./CardGrid";

const images = [
  "/images/cards/man.png",
  "/images/film-strip/peace.png",
  "/images/film-strip/deck.png",
  "/images/film-strip/subway.png",
];

const meta = {
  title: "Components/CardGrid",
  component: CardGrid,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Container>
      <CardGrid>
        {images.map((image, index) => (
          <Card
            key={image}
            variant="project"
            image={image}
            title={["HUD", "London", "Smart Home", "Edge Runner"][index]}
            category={["AR/VR", "ARCHITECTURE", "IOS APP", "AUTOMOTIVE"][index]}
            to={`/work/project-${index + 1}`}
            type="image"
            hasNoise
          />
        ))}
      </CardGrid>
    </Container>
  ),
};
