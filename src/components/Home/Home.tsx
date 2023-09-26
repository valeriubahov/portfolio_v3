import { useUserContext } from "../context/UserContext";
import { AnimatedTyping } from "./AnimatedTyping";
import styles from "./Home.module.css";
import "../../index.css";
import Wrapper from "../UI/Wrapper";

const Home: React.FC = () => {
  const { user } = useUserContext();

  return (
    <section id="home" className={`${styles["main"]} ${styles["main--dark"]}`}>
      <Wrapper>
        <div className={styles["wrapper--content"]}>
          <span className={styles["tag-line"]}>Hi, my name is</span>
          <h1 className={styles.headline}>{user?.basics?.name}</h1>
          <h2 className={styles["sub-headline"]}>I'm a software developer.</h2>
          <h3 className={styles["sub-header"]}>
            I love building interactive website that run across platforms & devices using&nbsp;
            <span>
              <AnimatedTyping />.
            </span>
          </h3>
        </div>
        <a href="#about" className={styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </Wrapper>
    </section>
  );
};

export default Home;
