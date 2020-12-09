import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//local storage

import cartReducer from "./Cart/cart.reducer";
import userReducer from "./User/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  //this is actual individual reducer here i.e user and so on
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
