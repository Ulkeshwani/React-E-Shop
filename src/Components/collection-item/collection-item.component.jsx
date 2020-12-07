import React from "react";
import "./collection-item.styles.scss";

import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cart.action";

import CButton from "../Custom-Button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { price, imageUrl, name } = item;
  
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">Rs.{price}</span>
      </div>
      <CButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
