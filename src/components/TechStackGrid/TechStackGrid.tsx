import {
  AndroidLogoIcon,
  AppleLogoIcon,
  DiscordLogoIcon,
  FigmaLogoIcon,
  FramerLogoIcon,
  GithubLogoIcon,
  SpotifyLogoIcon,
  TwitchLogoIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react";

import { SiReact, SiTypescript } from "@icons-pack/react-simple-icons";

import Card from "@components/Card/Card";

import styles from "./TechStackGrid.module.scss";

const featuredCards = [
  {
    icon: <FramerLogoIcon weight="fill" />,
    title: "Framer",
    category: "WEBSITE BUILDER",
    to: "/stack/framer",
  },
  {
    icon: <FigmaLogoIcon weight="fill" />,
    title: "Figma",
    category: "DESIGN",
    to: "/stack/figma",
  },
];

const techStackCards = [
  {
    icon: <GithubLogoIcon weight="fill" />,
    title: "GitHub",
    category: "VERSION CONTROL",
    to: "/stack/github",
  },
  {
    icon: <AppleLogoIcon weight="fill" />,
    title: "Apple",
    category: "TECHNOLOGY",
    to: "/stack/apple",
  },
  {
    icon: <SiReact />,
    title: "React",
    category: "FRONTEND",
    to: "/stack/react",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    category: "LANGUAGE",
    to: "/stack/typescript",
  },
  {
    icon: <DiscordLogoIcon />,
    title: "Discord",
    category: "COMMUNITY",
    to: "/stack/discord",
  },
  {
    icon: <SpotifyLogoIcon />,
    title: "Spotify",
    category: "MUSIC",
    to: "/stack/spotify",
  },
  {
    icon: <AndroidLogoIcon />,
    title: "Android",
    category: "MOBILE",
    to: "/stack/android",
  },
  {
    icon: <WindowsLogoIcon weight="fill" />,
    title: "Windows",
    category: "OPERATING SYSTEM",
    to: "/stack/windows",
  },
  {
    icon: <TwitchLogoIcon />,
    title: "Twitch",
    category: "STREAMING",
    to: "/stack/twitch",
  },
];

const TechStackGrid = () => {
  return (
    <div className={styles["tech-stack-grid"]}>
      <div className={styles["tech-stack-grid__featured"]}>
        {featuredCards.map((card) => (
          <Card key={card.to} variant="tech-stack" {...card} />
        ))}
      </div>

      <div className={styles["tech-stack-grid__items"]}>
        {techStackCards.map((card) => (
          <Card key={card.to} variant="tech-stack" {...card} />
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;
