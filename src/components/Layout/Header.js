import React from "react";
import styles from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCarButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sacura SUSHI</h1>
        <HeaderCarButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="japanese food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
