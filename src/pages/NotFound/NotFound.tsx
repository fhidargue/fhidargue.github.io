import Ticker from "@components/Ticker/Ticker";
import Globe from "@components/Globe/Globe";
import NoiseCanvas from "@components/NoiseCanvas/NoiseCanvas";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <main className={styles["not-found"]}>
      <div className={styles["not-found__globe"]}>
        <Globe />
      </div>
      <div className={styles["not-found__noise"]}>
        <NoiseCanvas opacity={0.15} density={0.7} speed={120} pixelSize={1} />
      </div>
      <div className={styles["not-found__content"]}>
        <Ticker
          title1="[404]"
          title2="PAGE NOT FOUND"
          className={styles["not-found__ticker"]}
        />
      </div>
    </main>
  );
};

export default NotFound;
