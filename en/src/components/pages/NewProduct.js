import { v4 as uuidv4 } from 'uuid';

import styles from './NewProduct.module.css';

import ProductForm from '../products/ProductForm';
import { productsDB } from '../products/productsDB';

function NewProduct() {
  function handleSubmit(product, event) {
    event.preventDefault();

    product.id = uuidv4();
    console.log(product);

    productsDB.push(product);

    localStorage.setItem('productsDB', JSON.stringify(productsDB));
  }

  return (
    <div className={styles.new_product_container}>
      <h1>New Product</h1>
      <p>Add a product to the list</p>
      <ProductForm handleOnSubmit={handleSubmit} />
    </div>
  );
}

export default NewProduct;
