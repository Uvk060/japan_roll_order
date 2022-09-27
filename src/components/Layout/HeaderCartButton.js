import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCarButton = (props) => {
  const [buttonAnimated, setButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  const buttonAnimation = `${styles.button} ${
    buttonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonAnimated(true);
    const timer = setTimeout(() => {
      //for refresh animation then push button"ADD"
      setButtonAnimated(false);
    }, 300);
    return () => {
      //remove timer, if I didnt remove every time than use button "add" customer push another new 'timer'
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonAnimation} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCarButton;
