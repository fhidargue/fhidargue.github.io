export type FilmStripSize = "sm" | "md" | "lg";

export interface FilmStripProps {
  images: string[];
  size?: FilmStripSize;
  speed?: number;
  isFullWidth?: boolean;
  className?: string;
}

export const SLIDE_WIDTHS: Record<FilmStripSize, number> = {
  sm: 240,
  md: 360,
  lg: 480,
};

export const BORDER_RADII: Record<FilmStripSize, number> = {
  sm: 28,
  md: 32,
  lg: 42,
};

export const FILM_STRIP_GAP = 16;
