import { useUserContext } from "../context/UserContext";
import styles from "./Experience.module.css";
import ExperienceItem from "./ExperienceItem";
import Wrapper from "../UI/Wrapper";

import "../../index.css";
import Button from "../UI/Button";
import { IWork } from "../../interfaces/types";

const Experience: React.FC = () => {
  const { user } = useUserContext();

  return (
    <section id="experience" className={styles["section--exp"]}>
      <Wrapper>
        <div className={styles["exp-col"]}>
          {user?.work?.map((work: IWork, i: number) => (
            <ExperienceItem key={i} experience={work} index={i} />
          ))}
        </div>
        <Button
          url={"https://www.linkedin.com/in/valeriu-bahov-46324886/"}
          target={"_blank"}
          name={"Know more about me"}
        />
      </Wrapper>
    </section>
  );
};

export default Experience;
