import { useState } from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

import Container from "@components/Container/Container";
import Logo from "@components/Logo/Logo";
import Link from "@components/Link/Link";
import Text from "@components/Text/Text";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import OverlayMenu from "@components/OverlayMenu/OverlayMenu";
import useTheme from "@hooks/useTheme";
import useIsNotFound from "@hooks/useIsNotFound";

import { ROUTES } from "@constants/routes";

import styles from "./TopBar.module.scss";

interface TopBarProps {
  className?: string;
}

const TopBar = ({ className }: TopBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const isNotFound = useIsNotFound();

  const isHome = location.pathname === ROUTES.HOME;

  let linkText = "[ GO BACK ]";
  let changedText = "[ G0 B4CK ]";

  if (isHome) {
    linkText = "FELIPE";
    changedText = "F3L1PE";
  }

  if (isNotFound) {
    linkText = "[ GO HOME ]";
    changedText = "[ G0 H0M3 ]";
  }

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={cx(styles["top-bar"], className)}>
        <Container className={styles["top-bar__container"]}>
          <div className={styles["top-bar__logo"]}>
            <Logo size={40} theme={theme} />
            <Link
              to={ROUTES.HOME}
              changed={changedText}
              isExternal={false}
              onClick={closeMenu}
            >
              <Text as="span" variant="roboto-large">
                {linkText}
              </Text>
            </Link>
          </div>
          <nav className={styles["top-bar__navigation"]}>
            <Link
              as="button"
              type="button"
              changed={isMenuOpen ? "[ CL0S3 ]" : "M3NU"}
              onClick={toggleMenu}
            >
              <Text as="span" variant="roboto-large">
                {isMenuOpen ? "[ CLOSE ]" : "MENU"}
              </Text>
            </Link>
            <ThemeToggle iconSize={26} />
          </nav>
        </Container>
      </header>

      <OverlayMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default TopBar;
