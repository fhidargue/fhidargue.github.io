import Text from "@components/Text/Text";

import type { ProjectContentProps } from "./ProjectContent.types";

import styles from "./ProjectContent.module.scss";

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <div className={styles["project-content"]}>
      {content.map((section) => (
        <section
          key={section.title}
          className={styles["project-content__section"]}
        >
          <Text variant="roboto-large">{section.title}</Text>
          {section.blocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <Text key={index} variant="roboto-small" colorType="secondary">
                  {block.text}
                </Text>
              );
            }

            if (
              block.type === "ordered-list" ||
              block.type === "unordered-list"
            ) {
              const List = block.type === "ordered-list" ? "ol" : "ul";

              return (
                <List key={index} className={styles["project-content__list"]}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Text
                        as="span"
                        variant="roboto-small"
                        colorType="secondary"
                      >
                        {item.title && <strong>{item.title}</strong>}
                        {item.title && ": "}
                        {item.text}
                      </Text>
                    </li>
                  ))}
                </List>
              );
            }

            if (block.type === "table") {
              return (
                <div
                  key={index}
                  className={styles["project-content__table-wrapper"]}
                >
                  <table className={styles["project-content__table"]}>
                    <thead>
                      <tr>
                        {block.columns.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </section>
      ))}
    </div>
  );
};

export default ProjectContent;
