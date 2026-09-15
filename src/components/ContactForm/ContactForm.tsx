import { useRef, useState, type SubmitEvent } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import cx from "classnames";

import Button from "@components/Button/Button";
import Text from "@components/Text/Text";

import styles from "./ContactForm.module.scss";
import type { ContactFormProps } from "./ContactForm.types";

const MIN_NAME_LENGTH = 4;
const MIN_MESSAGE_LENGTH = 4;
const MAX_MESSAGE_LENGTH = 1000;

const ContactForm = ({
  title = "Contact",
  description = "I'm currently available for Freelance Projects. Email me for Inquiries.",
  successTitle = "Message sent",
  successDescription = "Thanks for getting in touch. I'll get back to you soon.",
  className,
}: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const containsHtml = (value: string) => {
    return /<[^>]+>/.test(value);
  };

  const validateForm = () => {
    const nextErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!name.trim()) {
      nextErrors.name = "Name is required.";
    } else if (name.trim().length < MIN_NAME_LENGTH) {
      nextErrors.name = `Name must be more than ${MIN_NAME_LENGTH - 1} letters.`;
    }

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (message.trim().length < MIN_MESSAGE_LENGTH) {
      nextErrors.message = `Message must be more than ${MIN_MESSAGE_LENGTH - 1} characters.`;
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      nextErrors.message = `Message must be less than ${MAX_MESSAGE_LENGTH + 1} characters.`;
    } else if (containsHtml(message)) {
      nextErrors.message = "HTML or scripts are not allowed.";
    }

    setErrors(nextErrors);

    if (nextErrors.name) {
      nameRef.current?.focus();
    } else if (nextErrors.email) {
      emailRef.current?.focus();
    } else if (nextErrors.message) {
      messageRef.current?.focus();
    }

    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace this with the actual form submission.
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      setIsSuccess(true);
    } catch {
      setErrors((current) => ({
        ...current,
        message: "Something went wrong. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setErrors((current) => ({
      ...current,
      name: "",
    }));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((current) => ({
      ...current,
      email: "",
    }));
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    setErrors((current) => ({
      ...current,
      message: "",
    }));
  };

  return (
    <section className={cx(styles["contact-form"], className)}>
      <div className={styles["contact-form__heading"]}>
        <Text as="p" variant="section-title-small">
          {title}
        </Text>
        <Text
          as="p"
          variant="paragraph-large"
          className={styles["contact-form__description"]}
        >
          {description}
        </Text>
      </div>
      {isSuccess ? (
        <div
          className={styles["contact-form__success"]}
          role="status"
          aria-live="polite"
        >
          <div className={styles["contact-form__success-icon"]}>
            <CheckIcon size={32} weight="bold" />
          </div>
          <Text
            as="p"
            variant="paragraph-large"
            className={styles["contact-form__success-title"]}
          >
            {successTitle}
          </Text>
          <Text
            as="p"
            variant="roboto-small"
            className={styles["contact-form__success-description"]}
          >
            {successDescription}
          </Text>
        </div>
      ) : (
        <form
          className={styles["contact-form__form"]}
          onSubmit={handleSubmit}
          noValidate
        >
          <Text
            as="p"
            variant="roboto-small"
            className={styles["contact-form__label"]}
          >
            INQUIRY FORM
          </Text>
          <div className={styles["contact-form__fields"]}>
            <div
              className={cx(
                styles["contact-form__field"],
                errors.name && styles["contact-form__field--error"],
              )}
            >
              <div className={styles["contact-form__input-wrapper"]}>
                <input
                  ref={nameRef}
                  className={cx(styles["contact-form__input"], {
                    [styles["contact-form__input--error"]]: errors.name,
                  })}
                  type="text"
                  name="name"
                  placeholder="NAME"
                  aria-label="Name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={name}
                  onChange={(event) => handleNameChange(event.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              {errors.name && (
                <Text
                  as="span"
                  variant="roboto-small"
                  className={styles["contact-form__error"]}
                  aria-live="polite"
                  id="name-error"
                >
                  {errors.name}
                </Text>
              )}
            </div>
            <div
              className={cx(
                styles["contact-form__field"],
                errors.email && styles["contact-form__field--error"],
              )}
            >
              <div className={styles["contact-form__input-wrapper"]}>
                <input
                  ref={emailRef}
                  className={cx(styles["contact-form__input"], {
                    [styles["contact-form__input--error"]]: errors.email,
                  })}
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  aria-label="Email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={email}
                  onChange={(event) => handleEmailChange(event.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <Text
                  as="span"
                  variant="roboto-small"
                  className={styles["contact-form__error"]}
                  aria-live="polite"
                  id="email-error"
                >
                  {errors.email}
                </Text>
              )}
            </div>
          </div>
          <div
            className={cx(
              styles["contact-form__field"],
              errors.message && styles["contact-form__field--error"],
            )}
          >
            <div className={styles["contact-form__input-wrapper"]}>
              <textarea
                ref={messageRef}
                className={styles["contact-form__textarea"]}
                name="message"
                placeholder="MESSAGE"
                aria-label="Message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                value={message}
                onChange={(event) => handleMessageChange(event.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles["contact-form__message-footer"]}>
              {errors.message && (
                <Text
                  as="span"
                  variant="roboto-small"
                  className={styles["contact-form__error"]}
                  aria-live="polite"
                  id="message-error"
                >
                  {errors.message}
                </Text>
              )}
              <Text
                as="span"
                variant="roboto-small"
                className={styles["contact-form__counter"]}
                aria-live="polite"
              >
                {message.length}/{MAX_MESSAGE_LENGTH}
              </Text>
            </div>
          </div>
          <Button
            className={styles["contact-form__submit"]}
            type="submit"
            variant={isSubmitting ? "alpha" : "primary"}
            disabled={isSubmitting}
          >
            <Text as="span" variant="roboto-small" inheritColor>
              {isSubmitting ? "SENDING..." : "SEND EMAIL"}
            </Text>
          </Button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
