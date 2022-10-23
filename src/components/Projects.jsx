import { createSignal, For } from "solid-js";
import ProjectCard from "./ProjectCard";
import { aos } from "../utils/helpers";

const Projects = (props) => {
  
  const buttons = ["Featured", "Client Work", "Cool Projects", "All"];
  const [selectedButton, setSelectedButton] = createSignal(0);
  const [currentFilter, setCurrentFilter] = createSignal("Featured");

  const displayProjects = (filter) => {
    let displayed = [];
    props.projects.forEach((project) => {
      if (project.skills.includes(filter) || project.filter.includes(filter))
        displayed.push(project);
    });
    if (displayed.length === 0) displayed = props.projects;
    return displayed;
  };

  const handleOnClick = (index, filter) => {
    setSelectedButton(index);
    setCurrentFilter(filter);
  };

  return (
    <div
      className="projects"
      use:aos={{name: "fade-in", duration: .5, offset: 200, once: true}}
    >
      <div id="projects" className="projects-header-container">
        <h2 className="projects-title">Projects</h2>

        <For each={buttons} fallback={<></>}>
          {(button, index) => (
            <button
              className={
                index() === selectedButton() ? "filter-button active" : "filter-button"
              }
              onClick={() => handleOnClick(index(), button)}
            >
              {button}
            </button>
          )}
        </For>

      </div>
      <div className="projects-container">

        <For each={displayProjects(currentFilter())} fallback={<></>}>
          {(proj) => <ProjectCard project={proj} />}
        </For>

      </div>
      <div
        className={`projects-view-more-container ${
          currentFilter() === "All" ? "hide" : null
        }`}
        use:aos={{name: "fade-in", duration: .5, offset: 200, once: true}}
      >
        <button
          className={`projects-view-more-btn ${
            currentFilter() === "All" ? "hide" : null
          }`}
          onClick={() => setCurrentFilter("All")}
        >
          View More<span>🡣</span>
        </button>
      </div>
    </div>
  );
};
export default Projects;
