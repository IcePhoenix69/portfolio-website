import CardTemplate from "../layout/template/card/card_template";
import CardSelectorTemplate from "../layout/template/card_selector/card_hp_selector_template";
import "./homepage.css"

const desc_myself = "I'm just a guy who want to program things"
const desc_skills = "I have a lot of tech skills i'm proud of"
const desc_resume_c = "Last course: Refresh Academy"
const desc_resume_w = "Last work: CINECA"
const desc_projects = "This website is one of them, check the others"

function HomepageContent() {
    return (
        <div className="homepage">
            <h2>Hi, and welcome to my website. Here is what you use to check the sections:</h2>
            <div className="card_position">
                <div className="card_position_up">
                    <CardSelectorTemplate to={"/myself"} title={"Myself"} description={desc_myself} />
                    <CardSelectorTemplate to={"/skills"} title={"Skills"} description={desc_skills} />
                </div>
                <div className="card_position_down">
                    <CardSelectorTemplate to={"/resume"} title={"Resume"} description={desc_resume_w} description2={desc_resume_c} />
                    <CardSelectorTemplate to={"/projects"} title={"Projects"} description={desc_projects} />
                </div>
            </div>
        </div>
    )
}

function Homepage() {
    return (
        <CardTemplate>
            <HomepageContent/>
        </CardTemplate>)
}

export default Homepage;
// TODO: Create the 4 micro-section, then add a short version of each one, place a link on the micro-card to the section