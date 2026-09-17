import {Link} from "react-router-dom";
import "./card_selector_template.css"

function CardSelectorTemplate({title, description, to}) {
    return (
        <div className="card_selector">
            <Link to={to}>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </Link>
        </div>
    )
}
export default CardSelectorTemplate;