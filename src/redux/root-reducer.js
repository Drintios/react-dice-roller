import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rollsReducer from "./rolls/rolls.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["diceRoll"]
};

const rootReducer = combineReducers({
  rolls: rollsReducer
});

export default persistReducer(persistConfig, rootReducer);
