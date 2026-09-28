// Myself.jsx
import "../layout/template/card/card_template.css"
import CardTemplate from "../layout/template/card/card_template";

// 1. Contenuto "Nudo" organizzato a frammenti
export function MyselfContent() {
    let myYears = Math.floor((new Date().getTime() - new Date("1997-08-31").getTime()) / (1000 * 60 * 60 * 24 * 365.25));
    return (
        <>
            <p>
                Ciao! <br/>
                Mi chiamo Matteo Ventura e sono un Full Stack Developer.
            </p>

            <div className="card_section">
                <h3>Info su di me</h3>
                <p>
                    Sono un ragazzo di {myYears} anni che ha una grande passione per il mondo dell'informatica. <br/>
                    Da quando avevo 4 anni mi sono messo al computer con mio padre ad imparare l'uso del pc per fare
                    delle fatture e disegnare su paint. <br/>
                    Durante l'adolescenza ho iniziato ad usare il pc in maniera più consapevole, iniziando a fare pagine
                    HTML e CSS di base, allo scopo di fare un sito web per un server di Minecraft moddato. Avevo tempo
                    libero e mi sono divertito tanto. <br/>
                    Dopo l'università, che a causa del Covid-19 non ho potuto proseguire gli studi, mi sono dedicato al
                    volontariato e
                    servizio civile, ma volevo riprovare a programmare, e quindi ho partecipato a
                    <a href="https://refresh-academy.org" target="_blank" rel="noopener noreferrer" className="card_section_a">
                        Refresh Academy
                    </a>
                    , una cooperativa sociale che aiuta ad introdurre inclusività nel mondo della programmazione. <br/>
                    Dopo ho avuto la possibilità di lavorare dentro CINECA per 6 mesi, e ho imparato molto sul mondo
                    aziendale. <br/>
                </p>
            </div>

            <p>
                Questo portfolio è stato costruito separando la logica di layout
                dal contenuto puro.
            </p>
            <p>
                Questo portfolio è stato costruito separando la logica di layout
                dal contenuto puro.
            </p>
            <p>
                Questo portfolio è stato costruito separando la logica di layout
                dal contenuto puro.
            </p>
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
            <MyselfContent/>
        </CardTemplate>
    );
}

export default Myself;
// TODO: Create a card to contain the information, with a card_selector and different informations