import styles from './Products.module.css';
import LinkButton from '../layouts/LinkButton';
import ProductsData from '../products/ProductsData';

function Products() {
  return (
    <div className={styles.products}>
      <h1>Products</h1>
      <LinkButton to="/newproduct" text="Add New Product" />
      <ProductsData />
    </div>
  );
}

export default Products;
