import logo from './logo.svg';
import './App.css';
import DogDayCare from './records.json';
import { useState } from 'react';
import Welcome from './Components/Welcome';
import AllDogs from './Components/AllDogs';
import DogInfo from './Components/DogInfo';
import React, { useEffect } from 'react';

  const App = () => {

      const [dogs, setDogs] = useState([]);

    useEffect(() => {
      const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41";
  
      fetch(url)
        .then (response => response.json())
        .then (setDogs);     
    }, []);
      
  const WELCOME = 'welcome', ALLDOGS = 'alldogs', DOGINFO = 'doginfo';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;
  content = <Welcome />
  
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(ALLDOGS)} /> 
      break;
    case ALLDOGS:
      content = <AllDogs showAllDogs={dogs.map(dog =>
        <div key={dog.chipNumber}>{dog.name}</div>)}  showDogInfo={() => setCurrentScreen(DOGINFO)} />
      break;
    case DOGINFO:
      content = <DogInfo startWelcome={() => setCurrentScreen(WELCOME)} />
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Hunddagis</h1> 
      </header>
      <main> 
        <div>
          {dogs.map(dog =>
          <div key={dog.chipNumber}>{dog.name}</div>)}
        </div>
        {content}
      </main>
    </div>
  );
}



export default App;


// useEffect(() => {
//   const url = "https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41";

//   const fetchData = async() => {
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
  
// }, []);
