
import './Components.css';
import { useNavigate, Link } from 'react-router-dom';

const AllDogs = ({dogs, showDogInfo}) => {
  console.log('hej hej!')


  let selectedDog = null
    return (
      <div className='Dogs'>
        <h1>Alla hundar</h1>
        <div className="dogs_list">
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
        </div>
      </div>   
    )

}

export default AllDogs;