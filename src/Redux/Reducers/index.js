import { combineReducers } from "redux"; 
import { CovidReducer } from "./CovideReducer";

export const RootReducers = combineReducers({
  allCovide : CovidReducer,  
});