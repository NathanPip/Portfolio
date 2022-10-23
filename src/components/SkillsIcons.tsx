function SkillsIcon(props) {
  const skillIndex = props.skills.indexOf(props.skill);

  return (
    <div
      className={`skills__icon`}
      id={props.skill.id}
      onClick={()=>props.changeSkill(skillIndex - props.skills.indexOf(props.currentSkill), props.currentSkill)}
    >
    <img className="skills__icon__img" src={props.skill.src} alt={props.skill.id} />
    <p className="skills__icon__title">{props.skill.title}</p>
    </div>
  );
}

export default SkillsIcon;
