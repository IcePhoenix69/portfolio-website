import CardTemplate from "../template/card_template";

function ProjectsContent(){
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

function Projects() {
    return (
        <CardTemplate>
            <ProjectsContent></ProjectsContent>
        </CardTemplate>
    )
}
export default Projects;
// TODO: Create the card with the selector of the project chosen and the card for the description of said project