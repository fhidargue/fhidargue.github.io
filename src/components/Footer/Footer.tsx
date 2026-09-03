import Container from "@components/Container/Container";
import Link from "@components/Link/Link";
import Text from "@components/Text/Text";

import styles from "./Footer.module.scss";

const informationLinks = [
  {
    prefix: "FUTURE FOLIO TEMPLATE FOR",
    label: "FRAMER",
    changed: "FR4MER",
    to: "#",
  },
  {
    prefix: "BUILT AND",
    label: "DESIGNED BY FELIPE",
    changed: "DE5IGN3D BY F3L1PE",
    to: "#",
  },
];

const socialLinks = [
  {
    label: "DRIBBBLE",
    changed: "DR1BBBLE",
    href: "https://dribbble.com",
  },
  {
    label: "INSTAGRAM",
    changed: "INST4GRAM",
    href: "https://instagram.com",
  },
  {
    label: "TWITTER",
    changed: "TW1TTER",
    href: "https://twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer__container"]}>
        <div className={styles["footer__information"]}>
          {informationLinks.map(({ prefix, label, changed, to }) => (
            <div key={label} className={styles["footer__information-line"]}>
              <Text
                as="span"
                variant="roboto-large"
                className={styles["footer__information-text"]}
              >
                {prefix}{" "}
              </Text>
              <Link
                to={to}
                changed={changed}
                isExternal={false}
                className={styles["footer__information-link"]}
              >
                <Text as="span" variant="roboto-large">
                  {label}
                </Text>
              </Link>
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
              changed="B4CK TO T0P"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <Text as="span" variant="roboto-large">
                BACK TO TOP
              </Text>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
