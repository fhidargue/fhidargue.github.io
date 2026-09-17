import type { ReactNode } from "react";

export type WorkProjectTagVariant = "primary" | "secondary";

export interface WorkProjectTag {
  label: string;
  variant: WorkProjectTagVariant;
}

export interface WorkProjectMedia {
  src: string;
  alt: string;
  type: "image" | "video";
  hasNoise: boolean;
  isHovered: boolean;
}

export interface WorkProjectProps {
  title: string;
  description: string;
  tags: WorkProjectTag[];
  media: WorkProjectMedia[];
  children?: ReactNode;
  className?: string;
}
