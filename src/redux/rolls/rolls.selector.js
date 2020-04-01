import { createSelector } from "reselect";

const selectRolls = state => state.rolls;

export const selectRoll = createSelector([selectRolls], rolls => rolls.rolls);

export const selectRollsOfToday = createSelector([selectRoll], roll => {
  if (roll) {
    return roll.data.filter(rollItem => {
      const dateCreatedAt = new Date(rollItem.created_at);
      const dateOfToday = new Date();

      return (
        dateCreatedAt.getDate() >= dateOfToday.getDate() &&
        dateCreatedAt.getMonth() >= dateOfToday.getMonth() &&
        dateCreatedAt.getFullYear() >= dateOfToday.getFullYear()
      );
    });
  } else {
    return roll;
  }
});

export const selectIsRollsFetching = createSelector(
  [selectRolls],
  rolls => rolls.isFetching
);

export const selectIsRollsLoaded = createSelector(
  [selectRolls],
  rolls => !!rolls.rolls
);
