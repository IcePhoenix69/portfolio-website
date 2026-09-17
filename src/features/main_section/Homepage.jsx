import CardTemplate from "../layout/template/card/card_template";
import CardSelectorTemplate from "../layout/template/card_selector/card_selector_template";

function HomepageContent() {
    return (
        <div>
            <h2>Hi, and welcome to my website. Here is what you use to check the sections:</h2>
            <div className="card_position">
                <div className="card_position_up">
                    <CardSelectorTemplate to={"/myself"} title={"Myself"}/>
                    <CardSelectorTemplate to={"/skills"} title={"skills"}/>
                </div>
                <div className="card_position_down">
                    <CardSelectorTemplate to={"/resume"} title={"resume"}/>
                    <CardSelectorTemplate to={"/projects"} title={"projects"}/>
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