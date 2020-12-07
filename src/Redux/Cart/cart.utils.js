//logic to check duplicates of cart items
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //checks the first cart item for duplicate with every new item
  //if found then it will be assigned to the exsisting cart item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //if existing cart item having duplicate item
  if (existingCartItem) {
    //it will return new object of existing cart item with quantity property of +1
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : //if not then return the original cart item
          cartItem
    );
  }
  //else return original cart item with quantity propperty of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
