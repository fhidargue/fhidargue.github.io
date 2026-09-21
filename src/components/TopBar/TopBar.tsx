import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const location = useLocation();
  const isNotFound = useIsNotFound();

  const isHome = location.pathname === ROUTES.HOME;

  let linkText = t("topBar.back.default");
  let changedText = t("topBar.back.changed");

  if (isHome) {
    linkText = t("topBar.home.default");
    changedText = t("topBar.home.changed");
  }

  if (isNotFound) {
    linkText = t("topBar.notFound.default");
    changedText = t("topBar.notFound.changed");
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
              changed={
                isMenuOpen
                  ? t("topBar.close.changed")
                  : t("topBar.menu.changed")
              }
              onClick={toggleMenu}
            >
              <Text as="span" variant="roboto-large">
                {isMenuOpen
                  ? t("topBar.close.default")
                  : t("topBar.menu.default")}
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
