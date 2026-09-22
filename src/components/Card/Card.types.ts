import type { ReactNode } from "react";

export type ProjectCardProps = {
  variant: "project";
  image: string;
  title: string;
  category: string;
  to: string;
  type?: "image" | "video";
  poster?: string;
  hasNoise?: boolean;
  className?: string;
};

export type TechStackCardProps = {
  variant: "tech-stack";
  icon: ReactNode;
  title: string;
  category: string;
  to: string;
  className?: string;
};

export type ClientCardProps = {
  variant: "client";
  icon: ReactNode | string;
  name?: string;
  to?: string;
  href?: string;
  className?: string;
};

export type ColophonCardProps = {
  variant: "colophon";
  video: string;
  thumbnail: string;
  title: string;
  category: string;
  to?: string;
  href?: string;
  hasNoise?: boolean;
  className?: string;
  disableLink?: boolean;
};

export type AwardCardProps = {
  variant: "award";
  category: string;
  title: string;
  year: string;
  to?: string;
  href?: string;
  className?: string;
};

export type PlaygroundCardProps = {
  variant: "playground";
  media: string;
  title: string;
  category: string;
  to: string;
  type?: "image" | "video";
  poster?: string;
  hasNoise?: boolean;
  className?: string;
  autoPlay?: boolean;
};

export type CardProps =
  | ProjectCardProps
  | TechStackCardProps
  | ClientCardProps
  | ColophonCardProps
  | AwardCardProps
  | PlaygroundCardProps;
