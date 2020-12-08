import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/Cart/cart.action";
import { selectCartItemsCounts } from "../../Redux/Cart/cart.selector";

import { ReactComponent as CartLogo } from "../../Assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <CartLogo className="shoping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  //selector
  itemCount: selectCartItemsCounts(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
