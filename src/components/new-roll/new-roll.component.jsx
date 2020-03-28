import React, { useState } from "react";

import "./new-roll.styles.scss";

const NewRoll = () => {
  const [newRoll, setNewRoll] = useState({ playerName: "", rollType: "" });

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setNewRoll({
      ...newRoll,
      [name]: value
    });
  };

  return (
    <div className="new-roll">
      <form className="new-roll__form">
        <div className="new-roll__input-wrapper">
          <label>Player name</label>
          <input
            type="text"
            placeholder="Player name"
            name="playerName"
            onChange={handleChange}
          />
        </div>
        <div className="new-roll__input-wrapper">
          <label>Roll type</label>
          <input
            type="text"
            placeholder="Roll type"
            name="rollType"
            onChange={handleChange}
          />
        </div>
        <button className="new-roll__button" type="submit">
          Roll dice
        </button>
      </form>
    </div>
  );
};

export default NewRoll;
