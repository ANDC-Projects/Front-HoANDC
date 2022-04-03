import { combineReducers } from "redux";
import registerReducer from "../Components/Forms-components/dependencies/reducers";

const rootReducer = combineReducers({
  registerReducer: registerReducer,
});
export default rootReducer;
