import React from "react";
import styles from "./coin.module.css";
const Coin = ({ image, name, symbol, price, priceChange, marketCap }) => {
  return (
    <div>
      <img  src={image} alt="coin" />
      <span className={styles.price}>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>{price.toLocaleString()}</span>
      <span>{priceChange}</span>
      <span>{marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
