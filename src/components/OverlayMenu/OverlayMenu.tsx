import { useCallback, useEffect, useRef, useState } from "react";

import Container from "@components/Container/Container";
import Link from "@components/Link/Link";
import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";
import OverlayMenuItem from "@components/OverlayMenuItem/OverlayMenuItem";
import Text from "@components/Text/Text";
import { ROUTES } from "@constants/routes";
import type { SocialLinks } from "@components/Footer/Footer";

import { useTranslation } from "react-i18next";

import styles from "./OverlayMenu.module.scss";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerRef: React.RefObject<HTMLElement | null>;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const OVERLAY_TIMEOUT = 200;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const OverlayMenu = ({
  isOpen,
  onClose,
  headerRef,
  menuButtonRef,
}: OverlayMenuProps) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(isOpen);

  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const menuItems = [
    { label: t("overlayMenu.items.0"), to: ROUTES.ABOUT },
    { label: t("overlayMenu.items.1"), to: ROUTES.WORK },
    { label: t("overlayMenu.items.2"), to: ROUTES.STACK },
    { label: t("overlayMenu.items.3"), to: ROUTES.CONTACT },
  ];

  const socialLinks = t("footer.social", {
    returnObjects: true,
  }) as SocialLinks[];

  const getFocusableElements = useCallback(() => {
    const headerElements =
      headerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ??
      [];

    const overlayElements =
      overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ??
      [];

    return [...headerElements, ...overlayElements];
  }, [headerRef]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });

      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);

      const previousFocus = previousFocusRef.current;

      if (previousFocus && document.contains(previousFocus)) {
        previousFocus.focus();
      }

      previousFocusRef.current = null;
    }, OVERLAY_TIMEOUT);

    return () => clearTimeout(timer);
  }, [isOpen, menuButtonRef]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, getFocusableElements]);

  if (!isOpen && !visible) return null;

  return (
    <div
      ref={overlayRef}
      className={styles["overlay-menu"]}
      role="dialog"
      aria-modal="true"
      aria-label={t("overlayMenu.label")}
    >
      <div className={styles["overlay-menu__noise"]}>
        <NoiseCanvas opacity={0.15} density={0.7} speed={120} pixelSize={1} />
      </div>
      <Container className={styles["overlay-menu__container"]}>
        <nav className={styles["overlay-menu__navigation"]}>
          {menuItems.map(({ label, to }) => (
            <OverlayMenuItem
              key={to}
              label={label}
              to={to}
              fullWidth
              onClick={onClose}
            />
          ))}
        </nav>
        <div className={styles["overlay-menu__links"]}>
          {socialLinks.map(({ label, changed, href }) => (
            <Link key={href} href={href} changed={changed} isExternal>
              <Text as="span" variant="roboto-large">
                {label}
              </Text>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OverlayMenu;
