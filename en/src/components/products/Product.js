import styles from './Product.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrEdit, GrTrash } from 'react-icons/gr';
import LinkButton from '../layouts/LinkButton';
import { useEffect, useState } from 'react';

function Product({
  productName,
  old_price,
  inCash_price,
  discount,
  creditCard_price,
  creditCard_installment,
  creditCard_installment_price,
  creditCard_fees,
  imgSrc,
  imgAltText,
  id,
  saveCurrentProduct,
  editProduct,
  deleteProduct,
  productsInCart,
  setProductsInCart
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('products');

    if (data !== null) {
      setProducts(JSON.parse(data));
    }
  }, [setProducts]);

  function addProductToCart() {
    const product = products.find($product => $product.id === id);
    if (
      !productsInCart.some(productInCart => productInCart.id === product.id)
    ) {
      setProductsInCart([...productsInCart, product]);
    }
  }

  return (
    <div className={styles.product} id={id}>
      <div className={styles.product_settings}>
        <div
          className={styles.edit_product_container}
          onClick={event => editProduct(event)}
        >
          <GrEdit />
        </div>
        <div
          className={styles.delete_product_container}
          onClick={event => deleteProduct(event)}
        >
          <GrTrash />
        </div>
      </div>

      <div className={styles.product_image_container}>
        <img className={styles.product_image} src={imgSrc} alt={imgAltText} />
      </div>
      <div className={styles.product_info}>
        <LinkButton
          to={`/product/${id}`}
          text={
            <h3
              id={styles.product_name}
              onClick={() => saveCurrentProduct(id)}
            >{`${productName}`}</h3>
          }
        ></LinkButton>
        {old_price && (
          <p className={`${styles.product_old_price} ${styles.red_price}`}>
            from <span className={styles.obsolete_price}>${old_price}</span> to:
          </p>
        )}
        <p className={styles.product_incash}>
          in cash <span className={styles.incash_price}>${inCash_price}</span>
        </p>
        <p className={styles.product_discount}>
          {discount !== 0
            ? `with a ${discount}% discount`
            : 'without discounts'}
        </p>

        <span className={styles.horizontal_row}></span>

        {creditCard_price && (
          <p className={styles.product_credit_card}>
            <span
              className={`${styles.product_credit_card_price} ${styles.red_price}`}
            >
              ${creditCard_price}
            </span>

            <span className={styles.product_credit_card_installment}>
              until {creditCard_installment}x of{' '}
              <span
                className={`${styles.installment_price} ${styles.red_price}`}
              >
                {creditCard_installment_price}
              </span>
              <strong>
                {creditCard_fees < 1 ? (
                  <>without fees on credit card</>
                ) : (
                  <>with {creditCard_fees}% fees on credit card</>
                )}
              </strong>
            </span>
          </p>
        )}
      </div>

      <button
        className={styles.addToCartBtn}
        type="button"
        onClick={addProductToCart}
      >
        Add to Cart <AiOutlineShoppingCart />
      </button>
    </div>
  );
}

export default Product;
