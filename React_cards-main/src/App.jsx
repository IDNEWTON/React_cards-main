// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
