import {  Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div>
            <h1>Sannas hunddagis</h1>
            <p>Välkommen till Sannas hunddagis. Här kan du se alla hundar som vi har här hos oss och du kan även klicka på dem för att få upp mer information om en specifik hund.</p>
            <Link to="/alldogs">
            <button className='button'>Se hundar</button>
            </Link>           
        </div>
    )
}

export default Welcome;
