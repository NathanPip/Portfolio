import { For } from "solid-js";
import { aos } from "../utils/helpers";

function ProjectCard(props) {
  const project = props.project;

  return (
    <div
      className="project-card"
      use:aos={{ name: "fade-in", duration: 1, offset: 200, once: true }}
    >
      <h3 className="project-title">{project.title}</h3>
      <div className="project-head">
        <a href={project.live} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            alt={project.title + "image"}
            src={project.thumbnail}
          />
        </a>
        <ul className="project-skills">
          <For each={project.skills} fallback={<></>}>
            {(skill) => {
              <li key={skill} className="project-skills-item">
                {skill}
              </li>;
            }}
          </For>
        </ul>
      </div>
      <div className="project-body">
        {project.alert ? <p className="project-alert">{project.alert}</p> : null}
        {project.demo ? <p className="project-alert">{project.demo}</p> : null}
        <p className="project-desc">{project.desc}</p>
        <div className="project-buttons">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              <button className="live-demo">Live Demo</button>
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="github">Github</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
