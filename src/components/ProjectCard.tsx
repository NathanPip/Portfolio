import { Component, For } from "solid-js";
import { project } from "../DATA";
import { aos } from "../utils/helpers";

const ProjectCard: Component<{project: project}> = (props) => {

  const AOS = aos;

  return (
    <div
      className="project-card"
      use:AOS={{ name: "fade-in", duration: 1, offset: 200, once: true }}
    >
      <h3 className="project-title">{props.project.title}</h3>
      <div className="project-head">
        <a href={props.project.live} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            alt={props.project.title + "image"}
            src={props.project.thumbnail}
          />
        </a>
        <ul className="project-skills">
          <For each={props.project.skills} fallback={<></>}>
            {(skill) => 
              <li key={skill} className="project-skills-item">
                {skill}
              </li>
            }
          </For>
        </ul>
      </div>
      <div className="project-body">
        {props.project.alert ? <p className="project-alert">{props.project.alert}</p> : null}
        {props.project.demo ? <p className="project-alert">{props.project.demo}</p> : null}
        <p className="project-desc">{props.project.desc}</p>
        <div className="project-buttons">
          {props.project.live ? (
            <a href={props.project.live} target="_blank" rel="noreferrer">
              <button className="live-demo">Live Demo</button>
            </a>
          ) : null}
          {props.project.github ? (
            <a href={props.project.github} target="_blank" rel="noreferrer">
              <button className="github">Github</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
