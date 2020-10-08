import React from 'react';
import './App.css';
import Header from './Components/Header'
import PokeListContainer from './Components/PokeListContainer';
import WelcomeText from './Components/WelcomeText'
function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <WelcomeText/>
      <br></br>
      <PokeListContainer />
    </div>
  );
}

export default App;
