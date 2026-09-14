import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import Container from "@components/Container/Container";
import Card from "@components/Card/Card";

import CardGrid from "./CardGrid";

const projectCards = [
  {
    image: "/images/cards/man.png",
    title: "HUD",
    category: "AR/VR",
    to: "/work/project-1",
  },
  {
    image: "/images/film-strip/peace.png",
    title: "London",
    category: "ARCHITECTURE",
    to: "/work/project-2",
  },
  {
    image: "/images/film-strip/deck.png",
    title: "Smart Home",
    category: "IOS APP",
    to: "/work/project-3",
  },
  {
    image: "/images/film-strip/subway.png",
    title: "Edge Runner",
    category: "AUTOMOTIVE",
    to: "/work/project-4",
  },
];

const playgroundCards = [
  {
    media: "/images/film-strip/peace.png",
    type: "image" as const,
    title: "Retro Futuristic",
    category: "GAMING",
    to: "/playground/retro-futuristic",
  },
  {
    media: "/videos/bunny.mp4",
    type: "video" as const,
    title: "Rain Drops",
    category: "CINEMA 4D",
    to: "/playground/rain-drops",
    autoPlay: true,
  },
  {
    media: "/images/film-strip/deck.png",
    type: "image" as const,
    title: "Digital World",
    category: "MOTION",
    to: "/playground/digital-world",
  },
];

const ProjectCards = () => (
  <>
    {projectCards.map((card) => (
      <Card key={card.to} variant="project" {...card} type="image" hasNoise />
    ))}
  </>
);

const PlaygroundCards = ({
  cards = playgroundCards,
}: {
  cards?: typeof playgroundCards;
}) => (
  <>
    {cards.map((card) => (
      <Card key={card.to} variant="playground" {...card} hasNoise />
    ))}
  </>
);

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
        <ProjectCards />
      </CardGrid>
    </Container>
  ),
};

export const Playground: Story = {
  args: {
    children: null,
    variant: "playground",
    featuredPosition: "right",
  },
  render: () => (
    <Container>
      <CardGrid variant="playground" featuredPosition="right">
        <PlaygroundCards cards={playgroundCards.slice(0, 2)} />
      </CardGrid>
    </Container>
  ),
};

export const ThreeColumn: Story = {
  args: {
    children: null,
    variant: "three-column",
  },
  render: () => (
    <Container>
      <CardGrid variant="three-column">
        <PlaygroundCards />
      </CardGrid>
    </Container>
  ),
};
