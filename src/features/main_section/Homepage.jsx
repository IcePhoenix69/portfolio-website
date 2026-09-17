
import {Link} from "react-router-dom";
import CardTemplate from "../template/card_template";

function HomepageContent() {
    return (
        <div>
            <h2>Hi, and welcome to my website. Here is what you use to check the sections:</h2>
            <Link to={"/myself"}>Myself</Link>
            <Link to={"/skills"}>Skills</Link>
            <Link to={"/resume"}>Resume</Link>
            <Link to={"/projects"}>Projects</Link>
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