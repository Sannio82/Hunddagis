import logo from './logo.svg';
import './App.css';
import DogDayCare from './records.json';
import { useState } from 'react';
import Welcome from './Components/Welcome';
import AllDogs from './Components/AllDogs';
import DogInfo from './Components/DogInfo';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

    function App() {

      let content = null;
     // content = <Welcome />    
      const [dogs, setDogs] = useState([]);

    useEffect(() => {
      const url = "https://api.jsonbin.io/b/624c085fd96a510f02914b2b"
    
      fetch(url)
        .then (response => response.json())
        .then (setDogs);     
    }, []);

     {dogs.map(dog =>
          <div key={dog.chipNumber}>{dog.name}</div>)};
    
  // Detta används om vi ej ska använda routes.
  // const WELCOME = 'welcome', ALLDOGS = 'alldogs', DOGINFO = 'doginfo';
  // const [currentScreen, setCurrentScreen] = useState(WELCOME);

  // content är ju det här som bestämmer vad som ska visas upp på alla sidor.
  // Detta sätts nere i appdelen och ändras beroende på vilket state [currentScreen]
  // som vi använder oss av just då. 
 
  // switch(currentScreen) {
  //   case WELCOME:
  //     content = <Welcome nextScreen={() => setCurrentScreen(ALLDOGS)} /> 
  //     break;
  //   case ALLDOGS:
  //     content = <AllDogs dogs={dogs}  showDogInfo={() => setCurrentScreen(DOGINFO)} />
  //     break;
  //   case DOGINFO:
  //     content = <DogInfo startWelcome={() => setCurrentScreen(WELCOME)} />
  // }

  return (
    <div className="App">
      <header className="App-header">
         <h1>Hunddagis</h1> 
         </header>
        <main>
          <Router>
          <Routes>
            <Route exact path="/" element={
              <Welcome />
            } />
            <Route path="/welcome" element={
              <Welcome />
            } />
            <Route path="/alldogs" element={
              <AllDogs dogs = {dogs} />
            } />
            <Route path="/alldogs/:chipNumber" element={
              <DogInfo selectedDog = {dogs.name} />
            } />
          </Routes>
         
        {/* {content} */}
        
    </Router>
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
