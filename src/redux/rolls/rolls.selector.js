import { createSelector } from "reselect";

const selectRolls = state => state.rolls;

export const selectRoll = createSelector([selectRolls], rolls => rolls.rolls);

export const selectIsRollsFetching = createSelector(
  [selectRolls],
  rolls => rolls.isFetching
);

export const selectIsRollsLoaded = createSelector(
  [selectRolls],
  rolls => !!rolls.rolls
);
