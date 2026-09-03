import {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom";

import styles from "./Link.module.scss";

type LinkChild = ReactElement<{
  children?: ReactNode;
}>;

interface InternalLinkProps {
  as?: "a";
  to: string;
  isExternal: false;
  changed: string;
  children: LinkChild;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
}

interface ExternalLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> {
  as?: "a";
  href: string;
  isExternal: true;
  changed: string;
  children: LinkChild;
}

interface ButtonLinkProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  as: "button";
  changed: string;
  children: LinkChild;
}

export type LinkProps = InternalLinkProps | ExternalLinkProps | ButtonLinkProps;

const Link = (props: LinkProps) => {
  const { children, changed, className = "" } = props;

  const [isHovered, setIsHovered] = useState(false);

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

  // Underline animation
  const [scaleX, setScaleX] = useState(0);

  const scaleXRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const UNDERLINE_DURATION_MS = 320;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

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

  // Button
  if (props.as === "button") {
    const {
      as: _as,
      changed: _changed,
      children: _children,
      className: _className,
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
        onMouseEnter={(event) => {
          setIsHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setIsHovered(false);
          onMouseLeave?.(event);
        }}
      >
        {content(false)}
      </button>
    );
  }

  // External link
  if (props.isExternal) {
    const {
      as: _as,
      changed: _changed,
      children: _children,
      className: _className,
      isExternal: _isExternal,
      href,
      target,
      rel,
      onMouseEnter,
      onMouseLeave,
      ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        href={href}
        className={`${styles.link} ${className}`}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        onMouseEnter={(event) => {
          setIsHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setIsHovered(false);
          onMouseLeave?.(event);
        }}
      >
        {content(true)}
      </a>
    );
  }

  // Internal React Router link
  const {
    as: _as,
    changed: _changed,
    children: _children,
    className: _className,
    isExternal: _isExternal,
    to,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <RouterLink
      to={to}
      className={`${styles.link} ${className}`}
      onMouseEnter={(event) => {
        setIsHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setIsHovered(false);
        onMouseLeave?.(event);
      }}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      {content(false)}
    </RouterLink>
  );
};

export default Link;
