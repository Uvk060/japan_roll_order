import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const ifHasItemInCart = cartContext.items.length > 0;

  const addItemInCartHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeItemFromCartHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemInCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}

      <div className={styles.total}>
        <span>Summary</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {ifHasItemInCart && <button className={styles.button}>Checkout</button>}
      </div>
    </Modal>
  );
};

export default Cart;
