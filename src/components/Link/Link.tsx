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

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  changed: string;

  children: ReactElement<{
    children?: ReactNode;
  }>;
}

const Link = ({
  children,
  changed,
  className = "",
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
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              style={{
                display: "inline-block",
                opacity: isHovered && hasChanged ? 0 : 1,
                transition: "opacity 220ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {character}
            </span>
            {hasChanged && (
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 220ms cubic-bezier(0.16, 1, 0.3, 1)",
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
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        cursor: "pointer",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {cloneElement(children, {
        children: animatedText,
      })}

      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "1px",
          background: "currentColor",
          transform: `scaleX(${scaleX})`,
          transformOrigin: "left center",
          willChange: "transform",
        }}
      />
    </a>
  );
};

export default Link;
