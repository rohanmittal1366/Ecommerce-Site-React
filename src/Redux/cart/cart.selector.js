import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectcartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    //console.log("i am here");
    return cartItems.reduce(
      (accumatedQuantity, cartItem) => accumatedQuantity + cartItem.quantity,
      0
    );
  }
);
