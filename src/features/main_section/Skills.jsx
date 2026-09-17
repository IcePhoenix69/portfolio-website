import CardTemplate from "../layout/template/card/card_template";

function SkillsContent() {
    return (
        <div>
            <h2>My Skills</h2>
            <p>React, JS, CSS</p>
        </div>
    )
}

function Skills() {
    return (
        <CardTemplate>
            <SkillsContent/>
        </CardTemplate>
    )
}

export default Skills;
// TODO: Add the card with the card_selector for the skills, divided by soft skill, technical skills and development skills,
// and then the card to actually render them