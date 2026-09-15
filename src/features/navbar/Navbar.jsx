import { NavLink} from "react-router-dom";
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
                    <NavLink to="/myself">Myself</NavLink>
                </li>
                <li className={navbarElement}>
                    <NavLink to="/skills">My Skills</NavLink>
                </li>
                
                {/* Il bottone centrale Home */}
                <li className={navbarHome}>
                    <NavLink to="/homepage">Home</NavLink>
                </li>
                
                <li className={navbarElement}>
                    <NavLink to="/resume">My Resume</NavLink>
                </li>
                <li className={navbarElement}>
                    <NavLink to="/projects">My Projects</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;