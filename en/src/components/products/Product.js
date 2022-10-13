import styles from './Product.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import ImageTest from '../../img/what_we_recommend_computers/ryzen_kit1.png';

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.product_image_container}>
        <img
          className={styles.product_image}
          src={ImageTest}
          alt="Image testing"
        />
      </div>
      <div className={styles.product_info}>
        <h3>
          PC Gamer - Ryzen 5 5600G, B450M Aorus Gigabyte, x2 8GB RAM Memory, RGB
          Cabinet with one fan
        </h3>
        <p className={`${styles.product_old_price} ${styles.red_price}`}>
          from <span className={styles.obsolete_price}>R$ 2455.49</span> to:
        </p>
        <p className={styles.product_incash}>
          in cash <span className={styles.incash_price}>R$2210.99</span>
        </p>
        <p className={styles.product_discount}>with a 15% discount</p>

        <span className={styles.horizontal_row}></span>

        <p className={styles.product_credit_card}>
          <span
            className={`${styles.product_credit_card_price} ${styles.red_price}`}
          >
            R$ 2350.99
          </span>

          <span className={styles.product_credit_card_installment}>
            until 10x of{' '}
            <span className={`${styles.installment_price} ${styles.red_price}`}>
              235.22
            </span>
            <strong>without fees on credit card</strong>
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
