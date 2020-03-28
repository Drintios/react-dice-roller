import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Pusher from "pusher-js";

import { fetchRollsStartAsync } from "../../redux/rolls/rolls.actions";
import {
  selectRoll,
  selectIsRollsLoaded
} from "../../redux/rolls/rolls.selector";

import "./rolls-table.styles.scss";

import { ROLL_DATA } from "../../data/roll-data-default";

const RollsTable = ({ fetchRollsStartAsync, rolls, isLoaded }) => {
  const rollData = ROLL_DATA;

  useEffect(() => {
    fetchRollsStartAsync();

    const pusher = new Pusher("32b5f8b8cdf96e5ef793", {
      cluster: "us2",
      encrypted: true
    });

    const channel = pusher.subscribe("dices-rolls");

    channel.bind("new-roll", () => {
      fetchRollsStartAsync();
    });
  }, [fetchRollsStartAsync]);

  return (
    <div className="rolls-table">
      <div className="rolls-table__header">
        <div className="rolls-table__header-item">Player name</div>
        <div className="rolls-table__header-item">Roll type</div>
        <div className="rolls-table__header-item">Roll result</div>
        <div className="rolls-table__header-item">Time rolled</div>
      </div>
      {!isLoaded
        ? rollData.map(
            ({ id, playerName, rollSize, rollResult, timeRolled }) => (
              <div className="rolls-table__body" key={id}>
                <div className="rolls-table__body-item">{playerName}</div>
                <div className="rolls-table__body-item">{rollSize}</div>
                <div className="rolls-table__body-item">{rollResult}</div>
                <div className="rolls-table__body-item">{timeRolled}</div>
              </div>
            )
          )
        : rolls.map(({ id, name, email, phone, username }) => (
            <div className="rolls-table__body" key={id}>
              <div className="rolls-table__body-item">{name}</div>
              <div className="rolls-table__body-item">{email}</div>
              <div className="rolls-table__body-item">{phone}</div>
              <div className="rolls-table__body-item">{username}</div>
            </div>
          ))}
    </div>
  );
};

const mapStateToPorps = createStructuredSelector({
  rolls: state => selectRoll(state),
  isLoaded: state => selectIsRollsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRollsStartAsync: () => dispatch(fetchRollsStartAsync())
});

export default connect(mapStateToPorps, mapDispatchToProps)(RollsTable);
