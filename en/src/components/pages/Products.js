import styles from './Products.module.css';
import LinkButton from '../layouts/LinkButton';
import ProductsData from '../products/ProductsData';

function Products({
  productsState,
  setProductsState,
  productsInCart,
  setProductsInCart
}) {
  return (
    <div className={styles.products}>
      <h1>Products</h1>
      <LinkButton to="/newproduct" text="Add New Product" />
      <ProductsData
        products={productsState}
        setProducts={setProductsState}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </div>
  );
}

export default Products;
