import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './NewProduct.module.css';

import Message from '../layouts/Message';
import ProductForm from '../products/ProductForm';

function NewProduct({ setProducts, products }) {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  function handleSubmit(product, event) {
    event.preventDefault();
    event.target.reset();
    setMessage('');

    if (
      document.querySelector('form#addProductForm button').innerHTML ===
      'Save Product'
    ) {
      const urlID = window.location.search.replace('?id=', '');
      const updatedProducts = products.map($product => {
        if ($product.id === urlID) {
          return { ...product };
        } else {
          return $product;
        }
      });

      setProducts([...updatedProducts]);
      console.log(product);
    } else {
      product.id = uuidv4();
      console.log(product);
      setProducts([...products, product]);

      setMessage('Product successfully added!');
      setType('success');
    }
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.new_product_container}>
      <Message type={type} msg={message} />
      <h1>New Product</h1>
      <p>Add a product to the list</p>
      <ProductForm handleOnSubmit={handleSubmit} />
    </div>
  );
}

export default NewProduct;
