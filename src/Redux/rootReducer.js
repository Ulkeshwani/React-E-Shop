import { combineReducers } from "redux";

import cartReducer from "./Cart/cart.reducer";

import userReducer from "./User/user.reducer";

export default combineReducers({
  //this is actual individual reducer here i.e user and so on
  user: userReducer,
  cart: cartReducer,
});
