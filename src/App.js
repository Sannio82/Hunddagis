import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Welcome from './Components/Welcome';
import AllDogs from './Components/AllDogs';
import DogInfo from './Components/DogInfo';

function App() {

  const WELCOME = 'welcome', ALLDOGS = 'alldogs', DOGINFO = 'doginfo';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;
  content = <Welcome />
  
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(ALLDOGS)} /> 
      break;
    case ALLDOGS:
      content = <AllDogs showDogInfo={() => setCurrentScreen(DOGINFO)} />
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
        {content}
      </main>
    </div>
  );
}

export default App;
