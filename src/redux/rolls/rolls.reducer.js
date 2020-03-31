import RollsActionTypes from "./rolls.types";

const INITIAL_STATE = {
  newRoll: null,
  rolls: null,
  isFetching: false,
  error: null
};

const rollsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RollsActionTypes.FETCH_ROLLS_START:
    case RollsActionTypes.PUSH_ROLL_START:
      return {
        ...state,
        isFetching: true
      };
    case RollsActionTypes.FETCH_ROLLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        rolls: action.payload
      };
    case RollsActionTypes.PUSH_ROLL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        newRoll: action.payload
      };
    case RollsActionTypes.ROLLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rollsReducer;
