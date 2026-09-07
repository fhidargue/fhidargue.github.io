export type MediaType = "image" | "video";

export interface MediaProps {
  src: string;
  type?: MediaType;
  alt?: string;
  poster?: string;

  width: number;
  height: number;
  scale?: number;

  hasNoise?: boolean;
  noiseOpacity?: number;
  noiseDensity?: number;
  noiseSpeed?: number;
  noisePixelSize?: number;

  borderRadius?: number;
  isHovered?: boolean;
  className?: string;
}
