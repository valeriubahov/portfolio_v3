import { useRef } from "react";
import useOnScreen from "../customHooks/useOnScreen";
import styles from "./Experience.module.css";

const ExperienceItem: React.FC = ({ experience, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isDivVisible = useOnScreen(divRef, 0.6);

  const effect = isDivVisible
    ? `${styles["exp-col--item"]} ${styles["left-effect"]}`
    : styles["exp-col--item"];

  return (
    <div ref={divRef} className={effect}>
      <p className={styles["exp-number"]}>0{index + 1}</p>
      {experience.end.month ? (
        <h6>
          {new Date(experience.start.year, parseInt(experience.start.month) - 1, 1).toLocaleString(
            "default",
            {
              month: "long",
            }
          )}{" "}
          {experience.start.year} -{" "}
          {new Date(experience.end.year, experience.end.month - 1, 1).toLocaleString("default", {
            month: "long",
          })}{" "}
          {experience.end.year}
        </h6>
      ) : (
        <h6>
          {new Date(experience.start.year, parseInt(experience.start.month) - 1, 1).toLocaleString(
            "default",
            {
              month: "long",
            }
          )}{" "}
          {experience.start.year} - Present
        </h6>
      )}

      <h5>{experience.position}</h5>
      <p>{experience.company}</p>
      <p className={styles.small}>
        <strong>Technology: </strong>
        {experience.summary}
      </p>
    </div>
  );
};

export default ExperienceItem;
