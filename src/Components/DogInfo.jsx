import { Link, useParams} from 'react-router-dom';
import React from 'react';
import './Components.css';

const DogInfo = ({dogs}) => {

    const params=useParams()
    console.log(params.chipNumber)

    let selectedDog = null
    let present = null

    dogs.forEach(dog => {
        if (dog.chipNumber === params.chipNumber) {
            selectedDog = dog
            console.log(dog)
        }
    });

    return (
            <div className='alldogsbackground'>
                        <img src={selectedDog.img} alt="Selected dog"/>              
        <div className='selectedDogCard' key={selectedDog.chipNumber} >  
        <center>  
        <div className='container'>        
                 <h2>{selectedDog.name}</h2> 
               <p>Jag heter {selectedDog.name} och jag är {selectedDog.age} år gammal! </p>
              <p>Jag är&nbsp;{selectedDog.present ? "inne på dagis." : "inte här på dagis just nu." }</p>
               <p>Min ägare är {selectedDog.owner.name}&nbsp;{selectedDog.owner.lastName}&nbsp;och har telefonnummer: {selectedDog.owner.phoneNumber}</p>
               </div>  
               </center>    
            </div>
            <Link to="/welcome">
            <button className='button'>Gå tillbaka till startsidan</button>
            </Link> 
            <Link to="/alldogs">
            <button className='button'>Se alla hundar</button>
            </Link> 
        </div>
    )
 }

export default DogInfo;




