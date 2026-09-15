import pippi from "../../assets/Pippi.jpg"
import human from "../../assets/profile-image.jpg"
import "./Header.css"

function Header() {
    const headerClass = "header-main";
    const headerMessage = "header-message";
    const headerPhotoGroup = "header-photo-group";
    const headerPhotoSingle = "header-photo-single";
    return (
        <header className={headerClass}>
            <h1 className={headerMessage}>
                Welcome to my Portfolio!
            </h1>
            <div className={headerPhotoGroup}>
                <img src={human} alt="Human profile" className={headerPhotoSingle} />
                <img src={pippi} alt="Cat profile" className={headerPhotoSingle} />
            </div>
        </header>
    )
}

export default Header;
// TODO: Use the libraries for effect to decorate it