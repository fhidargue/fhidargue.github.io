export type MediaType = "image" | "video";

export interface MediaProps {
  src: string;
  type?: MediaType;
  alt?: string;
  poster?: string;
  scale?: number;
  hasNoise?: boolean;
  noiseOpacity?: number;
  noiseDensity?: number;
  noiseSpeed?: number;
  noisePixelSize?: number;
  borderRadius?: number;
  isHovered?: boolean;
  autoPlay?: boolean;
  className?: string;
  hasParallax?: boolean;
}
