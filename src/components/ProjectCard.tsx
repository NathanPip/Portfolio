import { Component, For } from "solid-js";
import { project } from "../DATA";
import { aos } from "../utils/helpers";

const ProjectCard: Component<{project: project}> = (props) => {

  const Aos = aos;

  return (
    <div
      class="project-card"
      use:Aos={{ name: "fade-in", duration: 1, offset: 200, once: true }}
    >
      <h3 class="project-title">{props.project.title}</h3>
      <div class="project-head">
        <a href={props.project.live} target="_blank" rel="noreferrer">
          <img
            class="project-image"
            alt={props.project.title + "image"}
            src={props.project.thumbnail}
          />
        </a>
        <ul class="project-skills">
          <For each={props.project.skills} fallback={<></>}>
            {(skill) => 
              <li key={skill} className="project-skills-item">
                {skill}
              </li>
            }
          </For>
        </ul>
      </div>
      <div class="project-body">
        {props.project.alert ? <p class="project-alert">{props.project.alert}</p> : null}
        {props.project.demo ? <p class="project-alert">{props.project.demo}</p> : null}
        <p class="project-desc">{props.project.desc}</p>
        <div class="project-buttons">
          {props.project.live ? (
            <a href={props.project.live} target="_blank" rel="noreferrer">
              <button class="live-demo">Live Demo</button>
            </a>
          ) : null}
          {props.project.github ? (
            <a href={props.project.github} target="_blank" rel="noreferrer">
              <button class="github">Github</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
