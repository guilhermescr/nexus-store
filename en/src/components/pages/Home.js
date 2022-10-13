import Carousel from '../layouts/Carousel';
import Product from '../products/Product';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <h1>Welcome to the Nexus Store!</h1>
      <Carousel />

      <section className={styles.recommended_products_container}>
        <h2>What we recommend</h2>

        <div className={styles.recommended_products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
