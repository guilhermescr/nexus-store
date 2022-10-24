import styles from './Product.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';

function Product({
  name,
  old_price,
  inCash_price,
  discount,
  creditCard_price,
  creditCard_installment,
  creditCard_installment_price,
  creditCard_fees,
  imgSrc,
  imgAltText
}) {
  return (
    <div className={styles.product}>
      <div className={styles.product_image_container}>
        <img
          onLoad={() => {
            document.querySelectorAll('img').forEach(img => {
              URL.revokeObjectURL(img.src);
            });
          }}
          className={styles.product_image}
          src={imgSrc}
          alt={imgAltText}
        />
      </div>
      <div className={styles.product_info}>
        <h3>{name}</h3>
        <p className={`${styles.product_old_price} ${styles.red_price}`}>
          from <span className={styles.obsolete_price}>R$ {old_price}</span> to:
        </p>
        <p className={styles.product_incash}>
          in cash <span className={styles.incash_price}>R${inCash_price}</span>
        </p>
        <p className={styles.product_discount}>with a {discount}% discount</p>

        <span className={styles.horizontal_row}></span>

        <p className={styles.product_credit_card}>
          <span
            className={`${styles.product_credit_card_price} ${styles.red_price}`}
          >
            R$ {creditCard_price}
          </span>

          <span className={styles.product_credit_card_installment}>
            until {creditCard_installment}x of{' '}
            <span className={`${styles.installment_price} ${styles.red_price}`}>
              {creditCard_installment_price}
            </span>
            <strong>
              {creditCard_fees === 0
                ? 'without fees on credit card'
                : `with ${creditCard_fees} on credit card`}
            </strong>
          </span>
        </p>
      </div>

      <button className={styles.addToCartBtn} type="button">
        Add to Cart <AiOutlineShoppingCart />
      </button>
    </div>
  );
}

export default Product;
