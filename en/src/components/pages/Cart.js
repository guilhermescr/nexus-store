import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './Cart.module.css';

function Cart({ productsInCart, setProductsInCart }) {
  const [productsSubtotal, setProductsSubtotal] = useState([]);
  const [productQuantity, setProductQuantity] = useState(productsInCart.length);

  useEffect(() => {
    productsInCart.forEach(productInCart => {
      setProductsSubtotal([...productsSubtotal, productInCart.inCash_price]);
    });
  }, [setProductsSubtotal]);

  function handleChange(event, productInCart) {
    if (event.target.value < 1 && event.target.value.length > 0) {
      event.target.value = 1;
      setProductQuantity(1);
      return;
    }

    if (event.target.value > productInCart.amountInStock) {
      event.target.value = productInCart.amountInStock;
      setProductQuantity(productInCart.amountInStock);
      return;
    }

    setProductQuantity(event.target.value);
  }

  function removeProductFromCart(productInCart) {
    const updatedCart = productsInCart.filter(
      $productInCart => $productInCart.id !== productInCart.id
    );
    setProductsInCart(updatedCart);

    localStorage.setItem('productsInCart', JSON.stringify(updatedCart));
  }

  function renderProductsInCart() {
    return productsInCart.map(productInCart => {
      return (
        <tr key={productInCart.id}>
          <td className={styles.remove_product_from_cart}>
            <AiOutlineClose
              onClick={() => removeProductFromCart(productInCart)}
            />
          </td>
          <td>
            <img src={productInCart.imgSrc} alt={productInCart.imgAltText} />
          </td>
          <td className={styles.product_name}>{productInCart.productName}</td>
          <td>{productInCart.inCash_price}</td>
          <td className={styles.product_quantity}>
            <input
              type="number"
              name="productQuantity"
              onChange={event => handleChange(event, productInCart)}
              value={productQuantity === 0 ? 1 : productQuantity}
            />
          </td>
          <td>{productInCart.inCash_price * productQuantity}</td>
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
