import type { ReactNode } from "react";

type BaseCardProps = {
  className?: string;
  disableLink?: boolean;
  animateOnView?: boolean;
};

export type ProjectCardProps = BaseCardProps & {
  variant: "project";
  image: string;
  title: string;
  category: string;
  to: string;
  type?: "image" | "video";
  poster?: string;
  hasNoise?: boolean;
};

export type TechStackCardProps = BaseCardProps & {
  variant: "tech-stack";
  icon: ReactNode;
  title: string;
  category: string;
  to?: string;
  href?: string;
};

export type ClientCardProps = BaseCardProps & {
  variant: "client";
  icon: ReactNode | string;
  name?: string;
  to?: string;
  href?: string;
};

export type ColophonCardProps = BaseCardProps & {
  variant: "colophon";
  video: string;
  thumbnail: string;
  title: string;
  category: string;
  to?: string;
  href?: string;
  hasNoise?: boolean;
};

export type AwardCardProps = BaseCardProps & {
  variant: "award";
  category: string;
  title: string;
  year: string;
  to?: string;
  href?: string;
};

export type PlaygroundCardProps = BaseCardProps & {
  variant: "playground";
  media: string;
  title: string;
  category: string;
  to: string;
  type?: "image" | "video";
  poster?: string;
  hasNoise?: boolean;
  autoPlay?: boolean;
};

export type CardProps =
  | ProjectCardProps
  | TechStackCardProps
  | ClientCardProps
  | ColophonCardProps
  | AwardCardProps
  | PlaygroundCardProps;
