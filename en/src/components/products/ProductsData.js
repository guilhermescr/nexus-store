import styles from './ProductsData.module.css';

import { productsDB } from './productsDB';
import Product from './Product';

function ProductsData() {
  return (
    <div className={styles.products_container}>
      {productsDB.length === 0 && (
        <>There's no products in our stock, come back later.</>
      )}

      {productsDB.length > 0 &&
        productsDB.map(product => (
          <Product
            productName={product.productName}
            old_price={product.old_price}
            inCash_price={product.inCash_price}
            discount={product.discount}
            creditCard_price={product.creditCard_price}
            creditCard_installment={product.creditCard_installment}
            creditCard_installment_price={product.creditCard_installment_price}
            creditCard_fees={product.creditCard_fees}
            imgSrc={product.imgSrc}
            imgAltText={product.imgAltText}
            key={product.id}
          />
        ))}
    </div>
  );
}

export default ProductsData;