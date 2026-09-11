import cx from "classnames";

import type { StatusIndicatorProps } from "./StatusIndicator.types";
import styles from "./StatusIndicator.module.scss";

const StatusIndicator = ({
  children,
  className,
  hasDot = false,
}: StatusIndicatorProps) => {
  return (
    <div className={cx(styles["status-indicator"], className)}>
      {hasDot && (
        <span className={styles["status-indicator__dot"]} aria-hidden="true" />
      )}
      {children}
    </div>
  );
};

export default StatusIndicator;
