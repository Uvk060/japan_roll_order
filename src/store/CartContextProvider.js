import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existItemIndexInCart = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItemInCart = state.items[existItemIndexInCart];

    let refreshItemAmount;
    let refreshItemsInCart;

    if (existingItemInCart) {
      refreshItemAmount = {
        ...existingItemInCart,
        amount: existingItemInCart.amount + action.item.amount,
      };
      refreshItemsInCart = [...state.items];
      refreshItemsInCart[existItemIndexInCart] = refreshItemAmount;
    } else {
      refreshItemAmount = {
        ...action.item,
      };
      refreshItemsInCart = state.items.concat(refreshItemAmount);
    }

    return {
      items: refreshItemsInCart,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existItemIndexInCart = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItemInCart = state.items[existItemIndexInCart];

    const updateTotalAmount = state.totalAmount - existingItemInCart.price;

    let refreshItemsInCart;
    if (existingItemInCart.amount === 1) {
      refreshItemsInCart = state.items.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...existingItemInCart,
        amount: existingItemInCart.amount - 1,
      };
      refreshItemsInCart = [...state.items];
      refreshItemsInCart[existItemIndexInCart] = updatedItem;
    }
    return {
      items: refreshItemsInCart,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
