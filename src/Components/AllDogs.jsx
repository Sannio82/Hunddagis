import './Components.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllDogs = ({dogs, showDogInfo}) => {
 
  const [name, setName] = useState('');

  const [foundDogs, setFoundDogs] = useState(dogs);

  const present = false 

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = dogs.filter((dog) => {
        return dog.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundDogs(results);
    } else {
      setFoundDogs(dogs);
    }
    setName(keyword);
  }
    return (
      <div className='alldogsbackground'>
    
       <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Sök hund"
        />
         <h1>Alla hundar</h1>
        <div className="dogs_list" >      
          {foundDogs && foundDogs.length > 0? (
            foundDogs.map((dog)=>(                     
              <div className='dogs_card' key={dog.chipNumber}>       
                <Link to={`/doginfo/${dog.chipNumber}`}>
                <p className='dogName'>{dog.name}</p>
                </Link>                              
        </div>
            ))
          ):(
            <h1>No results found!</h1>
          )
          }
      </div>  
      </div> 
    )
}
export default AllDogs;
