import RollsActionTypes from "./rolls.types";

export const fetchRollsStart = () => ({
  type: RollsActionTypes.FETCH_ROLLS_START
});

export const fetchRollsSuccess = rolls => ({
  type: RollsActionTypes.FETCH_ROLLS_SUCCESS,
  payload: rolls
});

export const fetchRollsFailure = error => ({
  type: RollsActionTypes.FETCH_ROLLS_FAILURE,
  payload: error
});

export const fetchRollsStartAsync = () => {
  return dispatch => {
    dispatch(fetchRollsStart());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        dispatch(fetchRollsSuccess(users));
      })
      .catch(error => dispatch(fetchRollsFailure(error)));
  };
};
