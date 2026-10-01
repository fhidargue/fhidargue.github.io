import type { ReactNode } from "react";

export interface StickySectionItem {
  title: string;
  children: ReactNode;
}

export interface StickySectionProps {
  sections: StickySectionItem[];
  className?: string;
}
