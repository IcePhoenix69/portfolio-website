import { Link } from "react-router-dom";
import "./Navbar.css"

// TODO: Update correcly the font, the gradient and the special effects, use graphics libraries in thing-to-remember.txt
function Navbar() {
    const navbarMain = "navbar-main"
    const navbarList = "navbar-list";
    const navbarElement = "navbar-list-element";
    const navbarHome = "navbar-home";
    return (
        <nav className={navbarMain}>
            <ul className={navbarList}>
                <li className={navbarElement}>
                    <Link to="/myself">Myself</Link>
                </li>
                <li className={navbarElement}>
                    <Link to="/skills">My Skills</Link>
                </li>
                
                {/* Il bottone centrale Home */}
                <li className={navbarHome}>
                    <Link to="/homepage">Home</Link>
                </li>
                
                <li className={navbarElement}>
                    <Link to="/resume">My Resume</Link>
                </li>
                <li className={navbarElement}>
                    <Link to="/projects">My Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;