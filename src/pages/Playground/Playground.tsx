import PlaygroundBanner from "@components/PlaygroundBanner/PlaygroundBanner";

import styles from "./Playground.module.scss";

const Playground = () => {
  return (
    <main>
      <PlaygroundBanner
        topHeading="EXPLORE THE"
        bottomHeading="GROUND"
        label="UNLEASH YOUR CREATIVITY. SHOWCASE YOUR BEST CONCEPT WORK AND HIGHLIGHT YOUR UNIQUE SKILLS TO ATTRACT NEW CLIENTS."
        media="/videos/bunny.mp4"
        mediaType="video"
        mediaAlt="Playground video"
        className={styles["playground__container"]}
      />
    </main>
  );
};

export default Playground;
