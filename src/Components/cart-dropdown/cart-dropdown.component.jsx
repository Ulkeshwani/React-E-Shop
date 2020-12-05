import React from "react";

import CButton from "../Custom-Button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CButton>GO TO CHECKOUT</CButton>
      </div>
    </div>
  );
};

export default CartDropdown;
