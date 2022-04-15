import { combineReducers } from "redux";
import registerReducer from "../Components/Forms-components/dependencies/reducers";
import {adminStatus} from './adminStatus'

const rootReducer = combineReducers({
  registerReducer: registerReducer,
  adminStatus: adminStatus,
});

export default rootReducer;
