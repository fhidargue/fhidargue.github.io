import type { ReactNode } from "react";

export interface TechStackCard {
  icon: ReactNode;
  title: string;
  category: string;
  href: string;
}

export interface TechStackGridProps {
  title?: string;
  featuredCards: TechStackCard[];
  techStackCards: TechStackCard[];
}
