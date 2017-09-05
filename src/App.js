import React from 'react'
import GameMap from './GameMap'
import Header from './Header'
import Footer from './Footer'

import './App.css'

const App = () => {

    return (
      <div className="App">
        <Header />
        <GameMap />
        <Footer />
      </div>
    );
  
}

export default App;
