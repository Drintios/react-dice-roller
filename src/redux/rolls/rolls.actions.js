import RollsActionTypes from "./rolls.types";

export const fetchRollsStart = () => ({
  type: RollsActionTypes.FETCH_ROLLS_START
});

export const pushRollStart = () => ({
  type: RollsActionTypes.PUSH_ROLL_START
})

export const fetchRollsSuccess = rolls => ({
  type: RollsActionTypes.FETCH_ROLLS_SUCCESS,
  payload: rolls
});

export const pushRollSuccess = newRoll => ({
  type: RollsActionTypes.PUSH_ROLL_SUCCESS,
  payload: newRoll
})

export const rollsFailure = error => ({
  type: RollsActionTypes.ROLLS_FAILURE,
  payload: error
});

export const fetchRollsStartAsync = () => {
  return dispatch => {
    dispatch(fetchRollsStart());

    fetch("//134.209.42.95/api/get-rolls")
      .then(response => response.json())
      .then(users => {
        dispatch(fetchRollsSuccess(users));
      })
      .catch(error => dispatch(rollsFailure(error)));
  };
};

export const pushRollStartAsync = (newRoll) => {
  return dispatch => {
    dispatch(pushRollStart);

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
        dispatch(pushRollSuccess(result));
      })
      .catch(error => console.log(error));
  }
}
