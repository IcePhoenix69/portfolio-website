import "./Navbar.css"

function Navbar() {
    const navbarMain = "navbar-main"
    const navbarList = "navbar-list";
    const navbarElement = "navbar-list-element";
    const navbarHome = "navbar-home";
    return (
        <nav className={navbarMain}>
            <ul className={navbarList}>
                <li className={navbarElement}>
                    <a href="#myself">Myself</a>
                </li>
                <li className={navbarElement}>
                    <a href="#skills">My Skills</a>
                </li>
                
                {/* Il bottone centrale Home */}
                <li className={navbarHome}>
                    <a href="#home">Home</a>
                </li>
                
                <li className={navbarElement}>
                    <a href="#resume">My Resume</a>
                </li>
                <li className={navbarElement}>
                    <a href="#projects">My Projects</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;