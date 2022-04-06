import { Link, useParams} from 'react-router-dom';
import React from 'react';

const DogInfo =()=> {
    const params=useParams()

    React.useEffect(()=> {
        console.log("Params", params)
    }, [params])

    return (
        <div>DogInfo
        <Link to="/welcome">
         <button>Gå tillbaka till startsidan</button>
             </Link>
        </div>
    )
}

export default DogInfo 

// const DogInfo = ({}) => {
//     return (
//         <div>
//             <h2>Här är info om alla hundar och var de befinner sig!</h2>
//             <Link to="/welcome">
//             <button>Gå tillbaka till startsidan</button>
//             </Link>
//         </div>
//     )
// }

// export default DogInfo;

// Gör lite ändringar här nu bara för att teeeesta



