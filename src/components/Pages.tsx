import Layout from "./UI/Layout";
import AboutMe from "./About/About";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import ParticlesBackgroud from "./UI/ParticlesBackgroud";
import { useUserContext } from "./context/UserContext";
import { Menu } from "./UI/Navigation/Menu/Menu";

import "../index.css";
import Contact from "./Contact/Contact";

const Pages: React.FC = () => {
  const { user, isLoading } = useUserContext();

  if (!user) {
    return <div></div>;
  }
  return (
    <Layout>
      {!isLoading && <ParticlesBackgroud />}
      <Home />
      <Menu />
      <AboutMe />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default Pages;
