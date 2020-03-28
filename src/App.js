import React from 'react';

import RollsTable from './components/rolls-table/rolls-table.component';
import NewRoll from './components/new-roll/new-roll.component';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Dice roller
      </header>
      <RollsTable />
      <NewRoll />
    </div>
  );
}

export default App;
