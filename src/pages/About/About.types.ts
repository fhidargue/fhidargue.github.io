import type { ServiceImagePosition } from "@/components/Services/Services.types";

export interface ServiceItem {
  title: string;
  image: string;
  imagePosition: ServiceImagePosition;
}

export interface AwardItem {
  category: string;
  title: string;
  year: string;
  href: string;
}

export interface ColophonItem {
  label: string;
  title: string;
  thumbnail: string;
  video: string;
  disableLink: boolean;
}
