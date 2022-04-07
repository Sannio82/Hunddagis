import { Link, useParams} from 'react-router-dom';
import React from 'react';

// const DogInfo =({dogs})=> {
//     const params=useParams()

//     const [dog, setDog]=React.useState()

//     React.useEffect(()=> {
//         const selectedDogApiUrl=`https://api.jsonbin.io/b/624c085fd96a510f02914b2b/${dog.chipNumber}`
    
//         fetch(selectedDogApiUrl)
//           .then (response => response.json())
//           .then (setDog); 
//     }, [params])

//     return (
//         <>
//         {
//         dog && ( <div className='dogs_card' key={dog.chipNumber}>
//             <h1 className='dogHeader'>{dog.name}</h1>
//             <p>Age:<span className='normal'>{dog.age}</span></p>
//         <Link to="/welcome">
//          <button>Gå tillbaka till startsidan</button>
//              </Link>
//         </div>
//      )
//   }
//   </>
//  ) 

//  }

// export default DogInfo 

// return (
//     <div className='Dogs'>
//       <h1>All dogs!</h1>
//       <div className="dogs_list">
//         {
//           dogs && dogs.map((dog)=>(
//             // varje hunds unika kort
//             <div className='dogs_card' key={dog.chipNumber}>
//               <Link to={`/alldogs/${dog.chipNumber}`}>
//               <p>Name:<span className='normal'>{dog.name}</span></p>
//               </Link>               
//               <p>Sex:<span className='normal'>{dog.sex}</span></p>
//       </div>
//           ))
//         }
//       </div>
//     </div>
     
  
//   )

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
        <div className='Dogs'>
            <div className='dogs_list'>
            <h2>Här är info om alla hundar och var de befinner sig!</h2>
            {/* {dogs.map(dog=>( */}
        <div className='selectedDogCard' key={selectedDog.chipNumber} > 
        <div className='container'>  
            <img src={selectedDog.img} alt="Picture of dog" />  
               <h4>Jag heter {selectedDog.name}</h4>
               <p>Jag är {selectedDog.age} år gammal! </p>
               </div>    
            </div>
            <Link to="/welcome">
            <button className='button'>Gå tillbaka till startsidan</button>
            </Link>    
        </div>
        </div>
    )
 }

export default DogInfo;




