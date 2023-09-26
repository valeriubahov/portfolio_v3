import styles from "./Layout.module.css";

interface Wrap {
  children: React.ReactNode;
}

const Wrapper: React.FC<Wrap> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper--push"]}>{children}</div>
    </div>
  );
};

export default Wrapper;
