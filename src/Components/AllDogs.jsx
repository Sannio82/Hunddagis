import React, { useEffect, useState } from 'react'

const AllDogs = ({dogs, showDogInfo}) => {
  console.log('hej hej!')
  
   const dogsList = dogs.map(dog =>
    <div key={dog.chipNumber}>{dog.name}</div>);

  return ( 
    <div>
      <div>Hej hej!!!</div>
     <div onClick={showDogInfo}>{dogsList}</div>   
    </div>
  )

}

export default AllDogs;