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

  const handleSubmit = event => {
    event.preventDefault();

    const newRollStringify = JSON.stringify(newRoll);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: newRollStringify,
      redirect: "follow"
    };

    fetch("//134.209.42.95/api/new-roll", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setNewRoll({ playerName: "", rollType: "" });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="new-roll" onSubmit={handleSubmit}>
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
