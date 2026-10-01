import type { ReactNode } from "react";

import type { MediaType } from "@components/Media/Media.types";

export interface PlaygroundBannerProps {
  topHeading: ReactNode;
  bottomHeading: ReactNode;
  label: ReactNode;
  media: string;
  mediaType?: MediaType;
  mediaAlt?: string;
  mediaPoster?: string;
  className?: string;
  headingClassName?: string;
  containerClassName?: string;
}
