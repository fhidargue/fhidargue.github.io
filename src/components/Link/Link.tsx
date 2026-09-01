import {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import styles from "./Link.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal: boolean;
  changed: string;
  children: ReactElement<{
    children?: ReactNode;
  }>;
}

const Link = ({
  children,
  changed,
  className = "",
  isExternal = false,
  target,
  rel,
  style,
  ...props
}: LinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const original = useMemo(() => {
    const childContent = children.props.children;

    return typeof childContent === "string" ? childContent : "";
  }, [children]);

  const originalCharacters = useMemo(() => Array.from(original), [original]);
  const changedCharacters = useMemo(() => Array.from(changed), [changed]);

  // Underline
  const [scaleX, setScaleX] = useState(0);

  const scaleXRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const UNDERLINE_DURATION_MS = 320;

  const easeOutCubic = (t: number) => {
    return 1 - Math.pow(1 - t, 3);
  };

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
      const easedProgress = easeOutCubic(progress);
      const next = startScale + delta * easedProgress;

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

  return (
    <a
      className={`${styles.link} ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noopener noreferrer" : rel}
      {...props}
    >
      <span className={styles.link__content}>
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
        {isExternal && (
          <ArrowUpRightIcon
            size={21}
            weight="bold"
            aria-hidden="true"
            className={styles.link__arrow}
          />
        )}
      </span>
    </a>
  );
};

export default Link;
