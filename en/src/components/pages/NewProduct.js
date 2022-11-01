import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from './NewProduct.module.css';

import ProductForm from '../products/ProductForm';
import Message from '../layouts/Message';

function NewProduct({ setProducts, products }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [type, setType] = useState('');

  function handleSubmit(product, event) {
    event.preventDefault();
    setMessage('');

    if (
      document.querySelector('form#addProductForm button').innerHTML ===
      'Save Product'
    ) {
      const changedProduct = products.find(
        $product => $product.id === window.location.search
      );
      setProducts([...products, changedProduct]);
      console.log(product, changedProduct);
    } else {
      product.id = uuidv4();
      console.log(product);
      setProducts([...products, product]);

      setMessage('Product successfully added!');
      setType('success');
    }
    navigate('/products');
  }

  return (
    <div className={styles.new_product_container}>
      <h1>New Product</h1>
      <p>Add a product to the list</p>
      <Message type={type} msg={message} />
      <ProductForm handleOnSubmit={handleSubmit} />
    </div>
  );
}

export default NewProduct;
