import { Link, useParams} from 'react-router-dom';
import React from 'react';
import './Components.css';

const DogInfo = ({dogs}) => {

    const params=useParams()
    console.log(params.chipNumber)

    let selectedDog = null

    dogs.forEach(dog => {
        if (dog.chipNumber === params.chipNumber) {
            selectedDog = dog
            console.log(dog)
        }
    });
    return (
            <div>
            {/* {dogs.map(dog=>( */}
        <div className='selectedDogCard' key={selectedDog.chipNumber} > 
        <div className='container'>  
            <img src={selectedDog.img} alt="Selected dog" />
               <p>Jag heter {selectedDog.name} och jag är {selectedDog.age} år gammal! </p>
               </div>    
            </div>
            <Link to="/welcome">
            <button className='button'>Gå tillbaka till startsidan</button>
            </Link>    
        </div>
    )
 }

export default DogInfo;




