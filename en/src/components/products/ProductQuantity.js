import { useState } from 'react';
import styles from './ProductQuantity.module.css';

function ProductQuantity({ amount }) {
  const [productAmount, setProductAmount] = useState(1);

  function decreaseQuantity() {
    if (productAmount === 1) return;
    setProductAmount(productAmount - 1);
  }

  function increaseQuantity() {
    if (productAmount === amount) return;
    setProductAmount(productAmount + 1);
  }

  return (
    <div className={styles.product_quantity}>
      <div className={styles.product_amount}>
        <span className={styles.amountSelector} onClick={decreaseQuantity}>
          -
        </span>
        <p>{productAmount}</p>
        <span className={styles.amountSelector} onClick={increaseQuantity}>
          +
        </span>
      </div>
      <p>
        <span>{amount}</span> products available
      </p>
    </div>
  );
}

export default ProductQuantity;
