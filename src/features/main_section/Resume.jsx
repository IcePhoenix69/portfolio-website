import CardTemplate from "../template/card_template";

function ResumeContent(){
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
function Resume() {
    return (<CardTemplate>
        <ResumeContent/>
    </CardTemplate>)
}
export default Resume;
// TODO: Research a PDF Visualizer for React and apply here, then add the correct resume