import { combineReducers } from "redux";
import { featuresReducer } from "./features/reducer";

const rootReducer = combineReducers({
  featuresReducer,
});

export default rootReducer;
