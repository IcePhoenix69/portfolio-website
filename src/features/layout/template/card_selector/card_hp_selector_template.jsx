import {Link} from "react-router-dom";
import "./card_hp_selector_template.css"

function CardSelectorTemplate({title, description, description2, to}) {
    return (
        <div className="card_selector">
            <Link to={to}>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h3>{description2}</h3>
            </Link>
        </div>
    )
}
export default CardSelectorTemplate;