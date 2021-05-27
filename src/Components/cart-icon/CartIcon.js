import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../Redux/cart/cart.selector";

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

// code for rerendering state even cart list is not changing

// const selectCartItemsCountV2 = (state) => {
//   console.log("i am here");
//   return state.cart.cartItems.reduce(
//     (accumatedQuantity, cartItem) => accumatedQuantity + cartItem.quantity,
//     0
//   );
// };

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
