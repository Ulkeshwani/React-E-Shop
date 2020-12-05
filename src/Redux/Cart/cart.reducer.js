import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SHOW_CART:
      return {
        ...currentState,
        hidden: !currentState.hidden, //set Hidden or show
      }; //here no need to assign to payload..because it dont actully need

    default:
      return currentState;
  }
};

export default cartReducer;
