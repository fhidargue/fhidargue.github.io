import { useEffect, useState } from "react";

import Container from "@components/Container/Container";
import Link from "@components/Link/Link";
import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";
import OverlayMenuItem from "@components/OverlayMenuItem/OverlayMenuItem";
import Text from "@components/Text/Text";

import styles from "./OverlayMenu.module.scss";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OVERLAY_TIMEOUT = 200;

const menuItems = [
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about" },
  { label: "PLAYGROUND", to: "/playground" },
  { label: "STACK", to: "/stack" },
  { label: "CONTACT", to: "/contact" },
];

const socialLinks = [
  {
    label: "DRIBBBLE",
    changed: "DR1BBBL3",
    href: "https://dribbble.com",
  },
  {
    label: "INSTAGRAM",
    changed: "1NST4GRAM",
    href: "https://instagram.com",
  },
  {
    label: "TWITTER",
    changed: "7WITT3R",
    href: "https://twitter.com",
  },
];

const OverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) return;
    const timer = setTimeout(() => setVisible(false), OVERLAY_TIMEOUT);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (isOpen && !visible) setVisible(true);

  if (!visible) return null;

  return (
    <div className={styles["overlay-menu"]}>
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
