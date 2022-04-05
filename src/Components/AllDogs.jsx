
import './Components.css';
import { useNavigate, Link } from 'react-router-dom';

const AllDogs = ({dogs, showDogInfo}) => {
  console.log('hej hej!')

  let navigate = useNavigate();
  
   const dogsList = dogs.map(dog =>
    <div  className='dog' key={dog.chipNumber}>{dog.name}</div>);

  return ( 
    <div>
      <div>Hej hej!!!</div>
      <Link to="/doginfo">
     <div>{dogsList}</div> 
     </Link>  
    </div>
  )

}

export default AllDogs;