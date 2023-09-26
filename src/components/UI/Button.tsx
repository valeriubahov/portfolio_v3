import { useRef } from "react";
import useOnScreen from "../customHooks/useOnScreen";
import styles from "./Layout.module.css";

interface IProp {
  target?: string;
  url?: string;
  name?: string;
  type?: string;
}

const Button: React.FC<IProp> = (props) => {
  const buttonRef = useRef(null);
  const isButtonVisible = useOnScreen(buttonRef, 0.6);

  const buttonClass = isButtonVisible
    ? `${styles["text-center"]} ${styles["fade-effect"]} ${styles["fade-up"]}`
    : `${styles["text-center"]} ${styles["fade-effect"]}`;

  const Link = props.target ? (
    <a href={props.url} target={props.target} className={styles["btn-effect-link"]}>
      <span>{props.name}</span>
    </a>
  ) : (
    <a href={props.url} className={styles["btn-effect-link"]}>
      <span>{props.name}</span>
    </a>
  );

  return (
    <div ref={buttonRef} className={buttonClass}>
      <div className={styles["btn-effect"]}>
        <div className={styles["btn-effect-point"]}>
          {props.type ? (
            <button className={styles["btn-effect-link"]} type="submit">
              <span>{props.name}</span>
            </button>
          ) : (
            Link
          )}
        </div>
      </div>
    </div>
  );
};

export default Button;
