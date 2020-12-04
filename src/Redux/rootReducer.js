import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";

export default combineReducers({
  //this is actual individual reducer here i.e user
  user: userReducer,
});
