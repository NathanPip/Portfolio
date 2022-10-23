import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// import Socials from "./Socials";

import DATA from "../DATA";

const Main = () => {
  return (
    <div className="main">
      <Projects projects={DATA.PROJECTS_DATA} />
      <Skills skills={DATA.SKILLS_DATA} />
      {/* <Socials /> */}
      <Contact />
    </div>
  );
}

export default Main;
