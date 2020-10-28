import React from 'react';
import './App.css';
import Header from './Components/Header'
import PokeListContainer from './Components/PokeListContainer';
import TeamListContainer from './Components/TeamListContainer';
import WelcomeText from './Components/WelcomeText'
import {PokemonContextProvider} from './Contexts/PokemonContext'
import {FunctionContextProvider} from './Contexts/FunctionPokemonContext'

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <WelcomeText/>
      <br></br>
      <FunctionContextProvider>
      <PokemonContextProvider>
      <TeamListContainer />
      <br></br>
      <PokeListContainer />
      </PokemonContextProvider>
      </FunctionContextProvider>
    </div>
  );
}

export default App;
