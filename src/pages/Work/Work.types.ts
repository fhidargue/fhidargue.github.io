export interface WorkCard {
  media: string;
  type: "image" | "video";
  title: string;
  category: string;
  to: string;
  autoPlay?: boolean;
  hasNoise?: boolean;
}
