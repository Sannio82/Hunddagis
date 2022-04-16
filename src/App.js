import './App.css';
import { useState } from 'react';
import Welcome from './Components/Welcome';
import AllDogs from './Components/AllDogs';
import DogInfo from './Components/DogInfo';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


    function App() {     
      const [dogs, setDogs] = useState([]);

    useEffect(() => {
      const url = "https://api.jsonbin.io/b/624c085fd96a510f02914b2b"

      fetch(url)
        .then (response => response.json())
        .then (setDogs);    
    }, []);
    
  return (
    <div className="App">
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
            <Route path="/doginfo/:chipNumber" element={
              <DogInfo dogs = {dogs}/>
            } />
          </Routes>       
    </Router>
    </main>
    </div>
  );
}

export default App;
