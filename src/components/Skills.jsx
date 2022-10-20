/* @refresh reload */
import SkillsIcon from "./SkillsIcons";
import SkillsCarousel from "./SkillsCarousel";
import { createEffect, createSignal, For } from "solid-js";
import { aos } from "../utils/helpers";

function Skills(props) {
  let cardRef;
  const skills = props.skills;
  const animationDuration = 500;

  const [currentSkill, setCurrentSkill] = createSignal(skills[0]);

  createEffect(() => {
    const rotationTimer = setInterval(async () => {
      await changeSkill(1, currentSkill());
    }, 5000);
    return () => clearInterval(rotationTimer);
  });

  const changeSkill = async (delta, skill) => {
    const index =
      (((skills.indexOf(skill) + delta) % skills.length) + skills.length) %
      skills.length;
    cardRef.classList.remove("fade--in");
    cardRef.classList.add("fade--out");
    await new Promise((resolve) => setTimeout(resolve, animationDuration));
    setCurrentSkill(skills[index]);
    cardRef.classList.remove("fade--out");
    cardRef.classList.add("fade--in");
    return;
  };

  return (
    <div
      className="skills"
      use:aos={{ name: "fade-in", duration: 0.5, offset: 200, once: true }}
    >
      <h2 id="skills" className="skills-title">
        Skills
      </h2>
      <div className="full-skills-container">
        <div
          className="skills-container"
          use:aos={{ name: "slide-in-left", duration: 1, offset: 200, once: true }}
        >
          <For each={skills} fallback={<></>}>
            {(skill) => 
              <SkillsIcon
                key={skill.id}
                skill={skill}
                changeSkill={changeSkill}
                currentSkill={currentSkill()}
                skills={skills}
              />
            }
          </For>
        </div>
        <SkillsCarousel
          skill={currentSkill()}
          ref={cardRef}
          changeSkill={changeSkill}
        />
      </div>
    </div>
  );
}

export default Skills;
