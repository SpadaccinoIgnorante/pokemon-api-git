import React from 'react';
import './App.css';
import Header from './Components/Header'
import PokeListContainer from './Components/PokeListContainer';
import TeamListContainer from './Components/TeamListContainer';
import WelcomeText from './Components/WelcomeText'
import {PokemonContextProvider} from './Contexts/PokemonContext'

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <WelcomeText/>
      <br></br>
      <PokemonContextProvider>
      <TeamListContainer />
      <br></br>
      <PokeListContainer />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
