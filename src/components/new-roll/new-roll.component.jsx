import React, { useState } from "react";
import { connect } from "react-redux";

import { pushRollStartAsync } from '../../redux/rolls/rolls.actions';

import "./new-roll.styles.scss";

const NewRoll = ({pushRollStartAsync}) => {
  const [newRoll, setNewRoll] = useState({ playerName: "", rollType: "" });
  const { playerName, rollType } = newRoll;
  const [error, setError] = useState(null)

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setNewRoll({
      ...newRoll,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!playerName || !rollType) {
      setError('Both inputs must be filled to create a new roll');
      return;
    }

    pushRollStartAsync(newRoll);
    setNewRoll({ playerName, rollType: "" });
    setError(null);
  };

  return (
    <div className="new-roll" onSubmit={handleSubmit}>
      {
        error
        ? (<div className="new-roll__error">Error: {error}</div>)
        : ''
      }
      <form className="new-roll__form">
        <div className="new-roll__input-wrapper">
          <label>Player name</label>
          <input
            type="text"
            placeholder="Player name"
            name="playerName"
            onChange={handleChange}
            value={playerName}
          />
        </div>
        <div className="new-roll__input-wrapper">
          <label>Roll type</label>
          <input
            type="text"
            placeholder="Roll type"
            name="rollType"
            onChange={handleChange}
            value={rollType}
          />
        </div>
        <button className="new-roll__button" type="submit">
          Roll dice
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  pushRollStartAsync: newRoll => dispatch(pushRollStartAsync(newRoll))
})

export default connect(null, mapDispatchToProps)(NewRoll);
