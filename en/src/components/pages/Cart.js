import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './Cart.module.css';

function Cart({ productsInCart, setProductsInCart }) {
  const [productsSubtotal, setProductsSubtotal] = useState([]);

  useEffect(() => {
    console.log(productsInCart);

    productsInCart.forEach(productInCart => {
      setProductsSubtotal([...productsSubtotal, productInCart.inCash_price]);
    });
  }, [setProductsSubtotal]);

  function renderProductsInCart() {
    // come back
    return productsInCart.map(productInCart => {
      return (
        <tr key={productInCart.id}>
          <td className={styles.remove_product_from_cart}>
            <AiOutlineClose
              onClick={() =>
                setProductsInCart(
                  productsInCart.filter(
                    $productInCart => $productInCart.id !== productInCart.id
                  )
                )
              }
            />
          </td>
          <td>
            <img src={productInCart.imgSrc} alt={productInCart.imgAltText} />
          </td>
          <td className={styles.product_name}>{productInCart.productName}</td>
          <td>{productInCart.inCash_price}</td>
          <td className={styles.product_quantity}>
            <input type="number" name="productQuantity" />
          </td>
          <td>{productsSubtotal}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <div id={styles.wrapper}>
        <h1>Shopping Cart</h1>
        <div id={styles.shopping_cart_container}>
          <table className={styles.shopping_cart_table}>
            <thead>
              <tr>
                <th>Remove Item</th>
                <th>Product Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>{renderProductsInCart()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
