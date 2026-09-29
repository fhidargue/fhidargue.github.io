import Container from "@components/Container/Container";
import Card from "@components/Card/Card";
import CardGrid from "@components/CardGrid/CardGrid";
import Text from "@components/Text/Text";
import Ticker from "@components/Ticker/Ticker";
import WorkProject from "@components/WorkProject/WorkProject";
import Video from "@components/Video/Video";
import type {
  WorkProjectMedia,
  WorkProjectTag,
} from "@components/WorkProject/WorkProject.types";

import styles from "./DccTranslation.module.scss";

import { useTranslation } from "react-i18next";
import { ROUTES } from "@constants/routes";

const DccTranslation = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: t("work.threeColumnCards.0.poster"),
      title: t("work.threeColumnCards.0.title"),
      category: t("work.threeColumnCards.0.category"),
      to: ROUTES.PROJECTS.SNOWBALL_SIM,
    },
    {
      image: t("work.bottomCards.0.poster"),
      title: t("work.bottomCards.0.title"),
      category: t("work.bottomCards.0.category"),
      to: ROUTES.PROJECTS.MOCAP_RETARGET,
    },
    {
      image: t("work.topCards.1.poster"),
      title: t("work.topCards.1.title"),
      category: t("work.topCards.1.category"),
      to: ROUTES.PROJECTS.WAVEFRONT_PATHTRACER,
    },
  ];

  return (
    <main className={styles["dcc-translation"]}>
      <WorkProject
        title={t("projects.dccTranslation.title")}
        description={t("projects.dccTranslation.description")}
        tags={
          t("projects.dccTranslation.tags", {
            returnObjects: true,
          }) as WorkProjectTag[]
        }
        media={
          t("projects.dccTranslation.media", {
            returnObjects: true,
          }) as WorkProjectMedia[]
        }
      >
        <div className={styles["dcc-translation__content"]}>
          <Text variant="roboto-large">ABOUT</Text>
          <Text variant="roboto-small" colorType="secondary">
            A validation-driven Maya to OpenUSD pipeline for standardising scene
            publishing between Maya and Unreal Engine. Maya scene data is
            extracted into a lightweight, DCC-independent SceneGraph, validated
            against configurable rules, converted to USD, and published with
            structured metadata.
          </Text>
          <Text variant="roboto-large">PIPELINE</Text>
          <Text variant="roboto-small" colorType="secondary">
            The pipeline separates each stage of the publishing process:
          </Text>
          <ol className={styles["dcc-translation__list"]}>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Scene Extraction</strong>: Maya DAG hierarchy,
                transforms, geometry and metadata are converted into a
                SceneGraph.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Validation</strong>: YAML rule profiles check the scene
                before publishing.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>USD Export</strong>: the validated SceneGraph is
                translated into a structured OpenUSD stage.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Publishing</strong>: publish metadata is generated and
                translation activity is recorded.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Unreal Engine</strong>: the resulting USD stage can be
                imported while preserving scene hierarchy and per-object
                separation.
              </Text>
            </li>
          </ol>
          <Text variant="roboto-large">SCENEGRAPH</Text>
          <Text variant="roboto-small" colorType="secondary">
            The SceneGraph acts as the intermediate representation between Maya
            and OpenUSD. It stores the essential structural data required for
            cross-DCC translation and USD stage construction, keeping the core
            publishing system independent from Maya.
          </Text>
          <Text variant="roboto-large">VALIDATION & PUBLISHING</Text>
          <Text variant="roboto-small" colorType="secondary">
            Scenes are validated using configurable YAML profiles covering:
          </Text>
          <ul className={styles["dcc-translation__list"]}>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                Naming and hierarchy
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                Supported node types
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                Transforms and geometry
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                Scene scale
              </Text>
            </li>
          </ul>
          <Text variant="roboto-small" colorType="secondary">
            The Maya plugin provides the artist-facing validation and publishing
            workflow, while a CLI exposes the same functionality for
            command-line workflows.
          </Text>
          <Text variant="roboto-large">INFRASTRUCTURE</Text>
          <Text variant="roboto-small" colorType="secondary">
            Publishing generates structured metadata and records translation
            activity through interchangeable registry backends. SQLite supports
            local workflows, while MongoDB provides a database-backed option.
            The project also includes automated testing with Nox and mayapy and
            a drag-and-drop Maya installation workflow.
          </Text>
          <Text variant="roboto-large">RESULTS</Text>
          <Text variant="roboto-small" colorType="secondary">
            The completed pipeline provides a standardised path from Maya scene
            data to Unreal Engine through OpenUSD, with validation and
            publishing handled as separate stages.
          </Text>
          <ul className={styles["dcc-translation__list"]}>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Validated publishing</strong>: invalid scenes can be
                identified before USD export.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>DCC-independent translation</strong>: the SceneGraph
                separates Maya extraction from USD publishing.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Structured USD output</strong>: scene hierarchy and
                per-object separation are preserved for Unreal Engine.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Tracked publishing</strong>: publish metadata and
                translation activity are recorded through SQLite or MongoDB.
              </Text>
            </li>
            <li>
              <Text as="span" variant="roboto-small" colorType="secondary">
                <strong>Multiple workflows</strong>: the system is accessible
                through the Maya plugin and CLI.
              </Text>
            </li>
          </ul>
        </div>
      </WorkProject>
      <Container className={styles["dcc-translation__video-container"]}>
        <Video
          src={t("projects.dccTranslation.video.src")}
          poster={t("projects.dccTranslation.video.poster")}
          category={t("projects.dccTranslation.video.category")}
          title={t("projects.dccTranslation.video.title")}
          hasBorder
        />
      </Container>
      <Container className={styles["dcc-translation__ticker"]}>
        <Ticker title1="MORE WORK" title2="YOU MIGHT BE INTERESTED" />
      </Container>
      <Container className={styles["dcc-translation__grid"]}>
        <CardGrid variant="three-column">
          {projects.map((project) => (
            <Card
              key={project.image}
              variant="project"
              image={project.image}
              title={project.title}
              category={project.category}
              to={project.to}
              type="image"
              hasNoise
            />
          ))}
        </CardGrid>
      </Container>
    </main>
  );
};

export default DccTranslation;
