import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Dice roller
      </header>
      <div className="rolls-wrapper">
        <div className="rolls-wrapper__header">
          <div className="rolls-wrapper__header-item">
            Player name
          </div>
          <div className="rolls-wrapper__header-item">
            Roll type
          </div>
          <div className="rolls-wrapper__header-item">
            Roll result
          </div>
          <div className="rolls-wrapper__header-item">
            Time rolled
          </div>
        </div>
        <div className="rolls-wrapper__body">
          <div className="rolls-wrapper__body-item"></div>
          <div className="rolls-wrapper__body-item"></div>
          <div className="rolls-wrapper__body-item"></div>
          <div className="rolls-wrapper__body-item"></div>  
        </div>
      </div>
    </div>
  );
}

export default App;
