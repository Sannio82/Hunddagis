const Welcome = ({nextScreen}) => {
    return (
        <section>
            <h2>Välkommen till mitt lilla hunddagis!</h2>
            <button onClick={nextScreen}>Ja tack!</button>
            <p>Vill du fortsätta till nästa sida för att se alla våra små hundar?</p>
            
        </section>
    )
}

export default Welcome;
