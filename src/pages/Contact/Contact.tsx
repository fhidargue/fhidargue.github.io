import Container from "@components/Container/Container";
import ContactForm from "@components/ContactForm/ContactForm";
import DigitalClock from "@components/DigitalClock/DigitalClock";
import Media from "@components/Media/Media";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <Container className={styles["contact__container"]}>
        <div className={styles["contact__form"]}>
          <ContactForm />
        </div>
        <div className={styles["contact__media"]}>
          <Media
            src="/images/services/girl.png"
            alt="Abstract purple artwork"
            borderRadius={32}
            hasParallax
            hasNoise
          />
        </div>
      </Container>
      <DigitalClock timeZone="Europe/London" location="BOURNEMOUTH, UK" />
    </main>
  );
};

export default Contact;
