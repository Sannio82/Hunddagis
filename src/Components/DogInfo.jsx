const DogInfo = ({startWelcome}) => {
    return (
        <section>
            <h2>Här är info om alla hundar och var de befinner sig!</h2>
            <button onClick={startWelcome}>Gå tillbaka till startsidan</button>
        </section>
    )
}

export default DogInfo;

// Gör lite ändringar här nu bara för att teeeesta