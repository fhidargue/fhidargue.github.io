import styles from "./Logo.module.scss";
import type { LogoProps } from "./Logo.types";

const Logo = ({ theme = "dark", size = 48 }: LogoProps) => {
  const logo =
    theme === "dark" ? "/logos/star-white.svg" : "/logos/star-black.svg";

  return (
    <div
      className={styles.logo}
      style={{
        width: size,
        height: size,
      }}
    >
      <img src={logo} alt="Logo" className={styles.logo__icon} />
    </div>
  );
};

export default Logo;
