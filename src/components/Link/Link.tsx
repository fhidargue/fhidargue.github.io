import {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type MouseEventHandler,
} from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom";

import type { LinkProps } from "./Link.types";
import styles from "./Link.module.scss";

const UNDERLINE_DURATION_MS = 320;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Link = (props: LinkProps) => {
  const { children, changed, className = "" } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [scaleX, setScaleX] = useState(0);

  const scaleXRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const original = useMemo(() => {
    const childContent = children.props.children;

    return typeof childContent === "string" ? childContent : "";
  }, [children]);

  const textMatch = original.match(/^(\[\s*)(.*?)(\s*\])$/);

  const prefix = textMatch?.[1] ?? "";
  const text = textMatch?.[2] ?? original;
  const suffix = textMatch?.[3] ?? "";

  const changedTextMatch = changed.match(/^(\[\s*)(.*?)(\s*\])$/);
  const changedText = changedTextMatch?.[2] ?? changed;

  const originalCharacters = useMemo(() => Array.from(text), [text]);
  const changedCharacters = useMemo(
    () => Array.from(changedText),
    [changedText],
  );

  useEffect(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const startScale = scaleXRef.current;
    const targetScale = isHovered ? 1 : 0;
    const delta = targetScale - startScale;

    if (Math.abs(delta) < 0.001) {
      return;
    }

    const duration = UNDERLINE_DURATION_MS * Math.abs(delta);

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const next = startScale + delta * easeOutCubic(progress);

      scaleXRef.current = next;
      setScaleX(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isHovered]);

  const animatedText = (
    <>
      {originalCharacters.map((character, index) => {
        const changedCharacter = changedCharacters[index] ?? character;
        const hasChanged = character !== changedCharacter;

        if (character === " ") {
          return " ";
        }

        return (
          <span
            key={`${character}-${index}`}
            className={styles.link__character}
          >
            <span
              className={styles.link__original}
              style={{
                opacity: isHovered && hasChanged ? 0 : 1,
              }}
            >
              {character}
            </span>

            {hasChanged && (
              <span
                aria-hidden="true"
                className={styles.link__changed}
                style={{
                  opacity: isHovered ? 1 : 0,
                }}
              >
                {changedCharacter}
              </span>
            )}
          </span>
        );
      })}
    </>
  );

  const content = (isExternal: boolean) => (
    <span className={styles.link__content}>
      {prefix && <span className={styles.link__bracket}>{prefix}</span>}

      <span className={styles.link__text}>
        {cloneElement(children, {
          children: animatedText,
        })}

        <span
          aria-hidden
          className={styles.link__underline}
          style={{
            transform: `scaleX(${scaleX})`,
          }}
        />
      </span>

      {suffix && <span className={styles.link__bracket}>{suffix}</span>}

      {isExternal && (
        <ArrowUpRightIcon
          size={21}
          weight="bold"
          aria-hidden="true"
          className={styles.link__arrow}
        />
      )}
    </span>
  );

  const handleMouseEnter = (
    event: MouseEvent<HTMLElement>,
    callback?: MouseEventHandler<HTMLElement>,
  ) => {
    setIsHovered(true);
    callback?.(event);
  };

  const handleMouseLeave = (
    event: MouseEvent<HTMLElement>,
    callback?: MouseEventHandler<HTMLElement>,
  ) => {
    setIsHovered(false);
    callback?.(event);
  };

  if (props.as === "button") {
    const {
      onMouseEnter,
      onMouseLeave,
      type = "button",
      ...buttonProps
    } = props;

    return (
      <button
        {...buttonProps}
        type={type}
        className={`${styles.link} ${className}`}
        onMouseEnter={(event) => handleMouseEnter(event, onMouseEnter)}
        onMouseLeave={(event) => handleMouseLeave(event, onMouseLeave)}
      >
        {content(false)}
      </button>
    );
  }

  if (props.isExternal) {
    const { href, target, rel, onMouseEnter, onMouseLeave, ...anchorProps } =
      props;

    return (
      <a
        {...anchorProps}
        href={href}
        className={`${styles.link} ${className}`}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        onMouseEnter={(event) => handleMouseEnter(event, onMouseEnter)}
        onMouseLeave={(event) => handleMouseLeave(event, onMouseLeave)}
      >
        {content(true)}
      </a>
    );
  }

  const { to, onClick, onMouseEnter, onMouseLeave } = props;

  return (
    <RouterLink
      to={to}
      className={`${styles.link} ${className}`}
      onMouseEnter={(event) => handleMouseEnter(event, onMouseEnter)}
      onMouseLeave={(event) => handleMouseLeave(event, onMouseLeave)}
      onClick={onClick}
    >
      {content(false)}
    </RouterLink>
  );
};

export default Link;
