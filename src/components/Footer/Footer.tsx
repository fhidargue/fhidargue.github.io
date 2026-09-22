import Container from "@components/Container/Container";
import Link from "@components/Link/Link";
import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";
import Text from "@components/Text/Text";
import useIsNotFound from "@hooks/useIsNotFound";

import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

interface InformationLink {
  prefix: string;
  label: string;
  changed: string;
  href: string;
  isExternal: false;
}

interface SocialLinks {
  label: string;
  changed: string;
  href: string;
}

const Footer = () => {
  const isNotFound = useIsNotFound();
  const { t } = useTranslation();

  const informationLinks = t("footer.information", {
    returnObjects: true,
  }) as InformationLink[];

  const socialLinks = t("footer.social", {
    returnObjects: true,
  }) as SocialLinks[];

  return (
    <footer className={styles.footer}>
      {isNotFound && (
        <div className={styles["footer__noise"]}>
          <NoiseCanvas opacity={0.15} density={0.7} speed={120} pixelSize={1} />
        </div>
      )}
      <Container className={styles["footer__container"]}>
        <div className={styles["footer__information"]}>
          {informationLinks.map((link) => (
            <div
              key={link.label}
              className={styles["footer__information-line"]}
            >
              <Text
                as="span"
                variant="roboto-large"
                className={styles["footer__information-text"]}
              >
                {link.prefix}{" "}
              </Text>
              {link.isExternal ? (
                <Link
                  href={link.href}
                  changed={link.changed}
                  isExternal
                  className={styles["footer__information-link"]}
                >
                  <Text as="span" variant="roboto-large">
                    {link.label}
                  </Text>
                </Link>
              ) : (
                <Link
                  to={link.href}
                  changed={link.changed}
                  isExternal={false}
                  className={styles["footer__information-link"]}
                >
                  <Text as="span" variant="roboto-large">
                    {link.label}
                  </Text>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className={styles["footer__bottom-section"]}>
          <nav className={styles["footer__links"]} aria-label="Social links">
            {socialLinks.map(({ label, changed, href }) => (
              <Link key={label} href={href} changed={changed} isExternal>
                <Text as="span" variant="roboto-large">
                  {label}
                </Text>
              </Link>
            ))}
          </nav>
          <div className={styles["footer__back-button"]}>
            <Link
              as="button"
              type="button"
              changed={t("footer.backTop.changed")}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <Text as="span" variant="roboto-large">
                {t("footer.backTop.default")}
              </Text>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
