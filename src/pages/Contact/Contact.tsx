import Container from "@components/Container/Container";
import ContactForm from "@components/ContactForm/ContactForm";
import DigitalClock from "@components/DigitalClock/DigitalClock";
import Media from "@components/Media/Media";

import styles from "./Contact.module.scss";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.contact}>
      <Container className={styles["contact__container"]}>
        <div className={styles["contact__form"]}>
          <ContactForm
            title={t("contact.form.title")}
            description={t("contact.form.description")}
            successTitle={t("contact.form.successTitle")}
            successDescription={t("contact.form.successDescription")}
          />
        </div>
        <div className={styles["contact__media"]}>
          <Media
            src="/images/home/dancer.png"
            alt="Abstract purple artwork"
            borderRadius={32}
            hasNoise
          />
        </div>
      </Container>
      <DigitalClock timeZone="Europe/London" location="BOURNEMOUTH, UK" />
    </main>
  );
};

export default Contact;
