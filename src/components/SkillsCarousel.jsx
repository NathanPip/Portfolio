/* @refresh reload */
import { aos } from "../utils/helpers";
function SkillsCarousel(props) {

  return (
    <div
      className="skills__carousel"
      use:aos={{name: "slide-in-right", duration: 1, offset: 200, once: true}}
    >
      <button
        className="skills__carousel__left"
        onClick={() => props.changeSkill(-1, props.skill)}
      >
        {"<"}
      </button>
      <div className="skills__carousel__card__container">
        <div ref={props.ref} className="icon-full fade--in" id={props.skill.id}>
          <div className="icon-img">
            <img src={props.skill.src} alt={props.skill.id} />
          </div>
          <div className="icon-main">
            <h3 className="skills__card__title"> {props.skill.title} </h3>
            <p className="skills__card__desc">{props.skill.desc}</p>
            <a className="view__projects__button" href="#projects">
              view projects<span>🡣</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className="skills__carousel__right"
        onClick={() => props.changeSkill(1, props.skill)}
      >
        {">"}
      </button>
    </div>
  );
}

export default SkillsCarousel;
