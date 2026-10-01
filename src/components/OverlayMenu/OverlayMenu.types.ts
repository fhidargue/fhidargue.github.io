import type { RefObject } from "react";

export interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerRef: RefObject<HTMLElement | null>;
  menuButtonRef: RefObject<HTMLElement | null>;
}
