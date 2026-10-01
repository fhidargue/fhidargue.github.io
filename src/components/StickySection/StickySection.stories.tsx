import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";

import StickySection from "./StickySection";
import styles from "./StickySection.stories.module.scss";
import TopBar from "@components/TopBar/TopBar";

const meta = {
  title: "Components/Sticky Section",
  component: StickySection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof StickySection>;

export default meta;

type Story = StoryObj<typeof meta>;

const clients = [
  "/images/services/robot.png",
  "/images/services/girl.png",
  "/images/services/keyboard.png",
  "/images/services/laptop.png",
  "/images/cards/man.png",
  "/images/film-strip/deck.png",
];

const sections = [
  {
    title: "Select Clients",
    children: (
      <CardGrid>
        {clients.map((image, index) => (
          <div key={image} className={styles["sticky-section__client-card"]}>
            <Card variant="client" icon={null} to={`/client-${index}`} />
          </div>
        ))}
      </CardGrid>
    ),
  },
  {
    title: "Awards and Recognition",
    children: (
      <CardGrid>
        {clients.map((image, index) => (
          <div key={image} className={styles["sticky-section__client-card"]}>
            <Card variant="client" icon={null} to={`/client-${index}`} />
          </div>
        ))}
      </CardGrid>
    ),
  },
  {
    title: "Colophon",
    children: (
      <CardGrid>
        {clients.map((image, index) => (
          <div key={image} className={styles["sticky-section__client-card"]}>
            <Card variant="client" icon={null} to={`/client-${index}`} />
          </div>
        ))}
      </CardGrid>
    ),
  },
];

export const Default: Story = {
  args: {
    sections,
  },
  render: (args) => (
    <div className={styles["sticky-section__story"]}>
      <div className={styles["sticky-section__block"]} />

      <StickySection {...args} />

      <div className={styles["sticky-section__block"]} />
    </div>
  ),
};

export const WithTopBar: Story = {
  args: {
    sections,
  },
  render: (args) => (
    <div className={styles["sticky-section__story"]}>
      <TopBar />
      <div className={styles["sticky-section__block"]} />
      <StickySection {...args} />
      <div className={styles["sticky-section__block"]} />
    </div>
  ),
};
