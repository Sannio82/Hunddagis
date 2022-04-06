
import './Components.css';
import { useNavigate, Link } from 'react-router-dom';

const AllDogs = ({dogs, showDogInfo}) => {
  console.log('hej hej!')

  let navigate = useNavigate();
  
  //  const dogsList = dogs.map(dog =>
  //   <div  className='dog' key={dog.chipNumber}>{dog.name}</div>);

    return (
      <div className='Dogs'>
        <h1>All dogs!</h1>
        <div className="dogs_list">
          {
            dogs && dogs.map((dog)=>(
              // varje hunds unika kort
              <div className='dogs_card' key={dog.chipNumber}>
                <Link to={`/alldogs/${dog.chipNumber}`}>
                <p>Name:<span className='normal'>{dog.name}</span></p>
                </Link>               
                <p>Sex:<span className='normal'>{dog.sex}</span></p>
        </div>
            ))
          }
        </div>
      </div>
       
    
    )

  // return ( 
  //   <div>
  //     <div>Hej hej!!!</div>
  //     <Link to="/doginfo">
  //    <div>{dogsList}</div> 
  //    </Link>  
  //   </div>
  // )

}

export default AllDogs;