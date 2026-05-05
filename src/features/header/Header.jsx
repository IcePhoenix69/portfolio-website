import pippi from "../../assets/Pippi.jpg"
import human from "../../assets/profile-image.jpg"
import "./Header.css"

function Header() {
    const headerClass = "header-main";
    const headerMessage = "header-message";
    const headerPhoto = "header-photo";
    return (
        <header className={headerClass}>
            <h1 className={headerMessage}>
                Welcome to my Portfolio!
            </h1>
            <div className={headerPhoto}>
                <img src={human} alt="Human profile" />
                <img src={pippi} alt="Cat profile" />
            </div>
        </header>
    )
}

export default Header;