import Carousel from '../layouts/Carousel';
import ProductsData from '../products/ProductsData';
import styles from './Home.module.css';

function Home({
  productsState,
  setProductsState,
  productsInCart,
  setProductsInCart
}) {
  return (
    <div>
      <h1>Welcome to the Nexus Store!</h1>
      <Carousel />

      <section className={styles.recommended_products_container}>
        <h2>What we recommend</h2>

        <div className={styles.recommended_products}>
          <ProductsData
            products={productsState}
            setProducts={setProductsState}
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
