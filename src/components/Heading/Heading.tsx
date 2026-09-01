import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const Heading = ({ children, level = 2, className = "" }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const headingClass = styles[`heading-${level}`];

  return <Tag className={`${headingClass} ${className}`}>{children}</Tag>;
};

export default Heading;
