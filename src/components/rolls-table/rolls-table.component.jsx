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

const RollsTable = ({ fetchRollsStartAsync, rolls, isLoaded }) => {
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

  if (isLoaded) {
    return (
      <div className="rolls-table">
        <div className="rolls-table__header">
          <div className="rolls-table__header-item">Player name</div>
          <div className="rolls-table__header-item">Roll type</div>
          <div className="rolls-table__header-item">Roll result</div>
          <div className="rolls-table__header-item">Time rolled</div>
        </div>
        {rolls.data.map(
          ({ id, player_name, roll_type, roll_result, created_at }) => (
            <div className="rolls-table__body" key={id}>
              <div className="rolls-table__body-item">{player_name}</div>
              <div className="rolls-table__body-item">{roll_type}</div>
              <div className="rolls-table__body-item">
                {roll_result.map(result => `${result}, `)}
              </div>
              <div className="rolls-table__body-item">{created_at}</div>
            </div>
          )
        )}
      </div>
    );
  } else {
    return <div className="rolls-table">Loading...</div>;
  }
};

const mapStateToPorps = createStructuredSelector({
  rolls: state => selectRoll(state),
  isLoaded: state => selectIsRollsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRollsStartAsync: () => dispatch(fetchRollsStartAsync())
});

export default connect(mapStateToPorps, mapDispatchToProps)(RollsTable);
