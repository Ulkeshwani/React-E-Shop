import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SHOW_CART:
      return {
        ...currentState,
        hidden: !currentState.hidden, //set Hidden or show
      }; //here no need to assign to payload..because it dont actully need

    case CartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: [...currentState.cartItems, action.payload],
      };
    default:
      return currentState;
  }
};

export default cartReducer;
