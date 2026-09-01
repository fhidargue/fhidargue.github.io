import styles from "./Logo.module.scss";

type LogoTheme = "light" | "dark";

interface LogoProps {
  theme?: LogoTheme;
  size?: number;
}

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
