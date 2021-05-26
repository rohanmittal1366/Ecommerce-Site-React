import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
import { connect } from "react-redux";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumatedQuantity, cartItem) => accumatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
