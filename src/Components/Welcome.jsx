const Welcome = ({nextScreen}) => {
    return (
        <section>
            <h2>Välkommen till mitt lilla hunddagis!</h2>
            <p>Vill du fortsätta till nästa sida för att se alla våra små hundar?</p>
            <button onClick={nextScreen}>Ja tack!</button>
        </section>
    )
}

export default Welcome;
