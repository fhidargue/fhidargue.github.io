import type { ReactNode } from "react";

export type ServiceImagePosition = "left" | "right";

export interface ServiceItem {
  title: ReactNode;
  image: string;
  imagePosition: ServiceImagePosition;
}

export interface ServicesProps {
  services: ServiceItem[];
  className?: string;
}
