import React from "react";
import "./cartDropDown.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../Redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
