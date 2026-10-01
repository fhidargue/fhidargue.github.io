import type { HeadingProps } from "./Heading.types";
import styles from "./Heading.module.scss";

const Heading = ({
  children,
  level = 2,
  className = "",
  id = "",
}: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const headingClass = styles[`heading-${level}`];

  return (
    <Tag id={id} className={`${headingClass} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
