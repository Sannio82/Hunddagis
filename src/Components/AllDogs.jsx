import './Components.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllDogs = ({dogs, showDogInfo}) => {
 
  const [name, setName] = useState('');

  const [foundDogs, setFoundDogs] = useState(dogs);

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
      <div className='container'>
    
       <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
        />
        <div className="dogs_list">
        <h1>Alla hundar</h1>
       
          {foundDogs && foundDogs.length > 0? (
            foundDogs.map((dog)=>(           
              // varje hunds unika kort
              <center>
              <div className='dogs_card' key={dog.chipNumber} >
                <div className='container'>
                <Link to={`/doginfo/${dog.chipNumber}`}>
                <p>{dog.name}</p>
                </Link>   
                </div>            
        </div>
        </center>
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

{/* <div className="dogs_list">
<h1>Alla hundar</h1>

  {
    dogs && dogs.map((dog)=>(           
      // varje hunds unika kort
      <center>
      <div className='dogs_card' key={dog.chipNumber} >
        <div className='container'>
        <Link to={`/doginfo/${dog.chipNumber}`}>
        <p>{dog.name}</p>
        </Link>   
        </div>            
</div>
</center>
    ))
  }
{/* </div> */}
// </div>  */}