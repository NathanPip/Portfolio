import { Component } from "solid-js";
import { skill } from "../DATA";

const SkillsIcon: Component<{
  skill: skill 
  changeSkill: any,
  currentSkill: skill,
  skills: Array<skill>
}> = (props) => {
  const skillIndex = props.skills.indexOf(props.skill);

  return (
    <div
      class={`skills__icon`}
      id={props.skill.id}
      onClick={()=>props.changeSkill(skillIndex - props.skills.indexOf(props.currentSkill), props.currentSkill)}
      style={{"background-color": props.skill.color}}
    >
    <img class="skills__icon__img" src={`/imgs/${props.skill.id}-logo.svg`} alt={props.skill.id} style={{"background-color": props.skill.color}} />
    <p class="skills__icon__title">{props.skill.title}</p>
    </div>
  );
}

export default SkillsIcon;
