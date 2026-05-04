import pippi from "../../assets/Pippi.jpg"
import human from "../../assets/profile-image.jpg"
import "./Header.css"

function Header() {
    return (
        <header class="header-main">
            <h1 class="header-message">
                Welcome to my Portfolio!
            </h1>
            <div class="header-photo">
                <img src={human} alt="Human profile"/>
                <img src={pippi} alt="Cat profile"/>
            </div>
        </header>
    )
}

export default Header;