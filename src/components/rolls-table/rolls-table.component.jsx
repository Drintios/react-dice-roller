import React from 'react';

import './rolls-table.styles.scss';

import { ROLL_DATA } from '../../data/roll-data-default';

const RollsTable = () => {
  const rollData = ROLL_DATA;
  return (
    <div className="rolls-table">
      <div className="rolls-table__header">
        <div className="rolls-table__header-item">
          Player name
        </div>
        <div className="rolls-table__header-item">
          Roll type
        </div>
        <div className="rolls-table__header-item">
          Roll result
        </div>
        <div className="rolls-table__header-item">
          Time rolled
        </div>
      </div>
      {
        rollData.map(({id, playerName, rollSize, rollResult, timeRolled}) => (
          <div className="rolls-table__body" key={id}>
            <div className="rolls-table__body-item">{playerName}</div>
            <div className="rolls-table__body-item">{rollSize}</div>
            <div className="rolls-table__body-item">{rollResult}</div>
            <div className="rolls-table__body-item">{timeRolled}</div>  
          </div>
        ))
      }
    </div>
  )
};

export default RollsTable;