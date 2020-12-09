import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
        cartItems: addItemToCart(currentState.cartItems, action.payload),
        //pev value + New Value as payload
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload),
      };
    default:
      return currentState;
  }
};

export default cartReducer;
