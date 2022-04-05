import {  Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h2>Välkommen till mitt lilla hunddagis!</h2>
            <p>Vill du fortsätta till nästa sida för att se alla våra små hundar?</p>
            <Link to="/alldogs">
            <button>Ja tack!</button>
            </Link>
            
        </div>
    )
}

export default Welcome;
