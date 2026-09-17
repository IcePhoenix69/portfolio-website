// Myself.jsx
import "../template/card_template.css"
import CardTemplate from "../template/card_template";

// 1. Contenuto "Nudo" organizzato a frammenti
export function MyselfContent() {
    return (
        <>
            <p>
                Ciao! Sono uno sviluppatore appassionato di React e web dev.
                Amo creare interfacce pulite e ben strutturate.
            </p>

            <div className="card-section">
                <h3>Un po' di me</h3>
                <p>Oltre al codice, mi piace la musica e passare il tempo con i miei animali.</p>
            </div>

            <p>
                Questo portfolio è stato costruito separando la logica di layout
                dal contenuto puro.
            </p>
        </>
    );
}

// 2. Componente esportato per le rotte (avvolto nel CardTemplate)
export function Myself() {
    return (
        <CardTemplate title="Chi Sono">
            <MyselfContent />
        </CardTemplate>
    );
}

export default Myself;
// TODO: Create a card to contain the information, with a selector and different informations