// src/App.js
import React from 'react';
import PlayersList from './component/playersList';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;