const AllDogs = ({showDogInfo}) => {
    return (
        <section>
            <h2>Här är en liten lista över alla hundar som vi har här!</h2>
            <p>Klicka på en liten hund för att se info om denna</p>
            <button onClick={showDogInfo}>Ja tack!</button>
        </section>
    )
}

export default AllDogs;


// OK! KOllar igen om det blir någon ändring...