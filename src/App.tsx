import React from 'react';
import './App.css';

import PokemonCards from './components/PokemonCards';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonCards />
    </div>
  );
}

export default App;
