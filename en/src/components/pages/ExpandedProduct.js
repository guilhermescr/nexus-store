import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import styles from './ExpandedProduct.module.css';
import ShippingInput from '../shipping/ShippingInput';

function ExpandedProduct({ products }) {
  const [product, setProduct] = useState({});
  const url_location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem('products');
    const urlId = url_location.pathname.replace('/product/', '');
    const productData = JSON.parse(data).find(
      $product => $product.id === urlId
    );

    setProduct(productData);
  }, [setProduct]);

  return (
    <div>
      <section className={styles.product_info_container}>
        <section className={styles.product_image_container}>
          <img src={product.imgSrc} alt={product.imgAltText} />
        </section>

        <section className={styles.product_info}>
          <div className={styles.product_content}>
            <h1>{product.productName}</h1>

            <div className={styles.brand_and_rating_container}>
              <p>
                Brand:{' '}
                <span id={styles.brandName}>
                  {product.brand ? product.brand : 'Unknown'}
                </span>
              </p>

              <div className={styles.rating_container}>
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                <AiFillStar /> <span id={styles.ratingAmount}>(0)</span>
              </div>
            </div>

            <div className={styles.product_stock}>
              <p>Product Available</p>
            </div>
          </div>

          <div className={styles.product_payment}>
            <div className={styles.in_cash_payment}>
              {/* cash icon here */}
              <div>
                {product.old_price && (
                  <p
                    className={`${styles.product_old_price} ${styles.red_price}`}
                  >
                    from{' '}
                    <span className={styles.obsolete_price}>
                      ${product.old_price}
                    </span>{' '}
                    to:
                  </p>
                )}
                <p className={styles.product_incash}>
                  in cash{' '}
                  <span className={styles.incash_price}>
                    ${product.inCash_price}
                  </span>
                </p>
                {product.discount && (
                  <p className={styles.product_discount}>
                    with a {product.discount}% discount
                  </p>
                )}
              </div>
            </div>
            <div className={styles.credit_card_payment}>
              {product.creditCard_price && (
                <p className={styles.product_credit_card}>
                  <span
                    className={`${styles.product_credit_card_price} ${styles.red_price}`}
                  >
                    ${product.creditCard_price}
                  </span>

                  <span className={styles.product_credit_card_installment}>
                    until {product.creditCard_installment}x of{' '}
                    <span
                      className={`${styles.installment_price} ${styles.red_price}`}
                    >
                      {product.creditCard_installment_price}
                    </span>
                    <strong>
                      {product.creditCard_fees < 1 ? (
                        <>without fees on credit card</>
                      ) : (
                        <>with {product.creditCard_fees}% fees on credit card</>
                      )}
                    </strong>
                  </span>
                </p>
              )}
            </div>
          </div>

          <ShippingInput />
        </section>
      </section>
    </div>
  );
}

export default ExpandedProduct;
