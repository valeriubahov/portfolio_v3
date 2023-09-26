import { useRef } from "react";
import useOnScreen from "../../../customHooks/useOnScreen";
import styles from "./Menu.module.css";

const items = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  {
    name: "Resume",
    path: null,
    url: "https://drive.google.com/file/d/1-N8J8FYS7B3THgiS51gT9T5AIaxxegZo/view?usp=sharing",
    target: "_blank",
  },
];

export const Menu: React.FC = () => {
  const headerRef = useRef<HTMLUListElement>(null);
  const isHeaderVisible = useOnScreen(headerRef, 0.5);

  return (
    <header className={styles["app--header"]}>
      <nav>
        <ul ref={headerRef} className={styles["menu-list"]}>
          {isHeaderVisible &&
            items.map((item, id) => (
              <li key={id} className={styles["menu-item"]}>
                {!item.path ? (
                  <a href={item.url} target={item.target}>
                    {item.name}
                  </a>
                ) : (
                  <a href={`#${item.path}`}>{item.path}</a>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};
