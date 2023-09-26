import { useRef } from "react";
import { useUserContext } from "../context/UserContext";
import useOnScreen from "../customHooks/useOnScreen";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import layout from "../UI/Layout.module.css";
import styles from "./About.module.css";

const LIKES = ["Animals", "Snowboarding", "Video Games", "Films", "TV Series"];
const LEARNING = ["React", "AWS", "Material UI"];

const AboutMe: React.FC = () => {
  const { user } = useUserContext();

  const headerRef = useRef<HTMLDivElement>(null);
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef(null);

  // Check with
  const isHeaderVisible = useOnScreen(headerRef, 0.5);
  const isSubheaderVisible = useOnScreen(subHeaderRef, 0.3);

  const headerClass = isHeaderVisible ? styles["scroll-effect"] : "";
  const subHeaderClass = isSubheaderVisible ? styles["scroll-effect"] : "";

  return (
    <section id="about" className={`${styles.section} ${layout["section--about"]}`}>
      <Wrapper>
        <h3 className={`${layout.tagline} ${layout["tagline--long"]} ${layout["tagline--dark"]}`}>
          About
        </h3>
        <div className={styles["section--about-content"]}>
          <div className={styles.large}>
            <h4 className={headerClass} ref={headerRef}>
              {user?.basics?.headline}
            </h4>

            <p className={subHeaderClass} ref={subHeaderRef}>
              Hi there! I was born and rised in{" "}
              <a href="https://en.wikipedia.org/wiki/Moldova" target="_blank">
                Moldova <img src="/moldova-flag.svg" alt="Moldova's Flag" />
              </a>{" "}
              and lived in Italy for 17 years, and am currently based in{" "}
              {user?.basics?.locationAsString}
              {user?.basics?.summary}
            </p>
          </div>
        </div>

        <Button url={"#contact"} name={"Contact"} />
      </Wrapper>
    </section>
  );
};

export default AboutMe;
