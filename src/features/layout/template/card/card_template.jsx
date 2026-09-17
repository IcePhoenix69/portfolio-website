import "./card_template.css"

function CardTemplate({title, children}) {
    return (
        <div className="card-template">
            {title && (
                <div className="card-template__header">
                    <h2>{title}</h2>
                </div>
            )}
            <div className="card-template__body">
                {children}
            </div>
        </div>
    )
}

export default CardTemplate;