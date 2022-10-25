import { useState } from 'react';

import styles from './ProductForm.module.css';

import LinkButton from '../layouts/LinkButton';
import Input from '../form/Input';
import Textarea from '../form/Textarea';

function ProductForm({ handleOnSubmit }) {
  const [product, setProduct] = useState({});

  function handleChange(event) {
    if (event.target.name === 'imgSrc') {
      let img = event.target.files[0];
      img = URL.createObjectURL(img);

      setProduct({ ...product, [event.target.name]: img });
    } else {
      setProduct({ ...product, [event.target.name]: event.target.value });
    }
  }

  return (
    <form
      id="addProductForm"
      className={styles.form}
      onSubmit={event => handleOnSubmit(product, event)}
    >
      <Input
        type="text"
        text="Product Name"
        name="productName"
        placeholder="Insert a name..."
        handleOnChange={handleChange}
      />
      <Textarea
        name="description"
        text="Description (Optional)"
        placeholder="Insert a description..."
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Old Price"
        name="old_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="In Cash Price"
        name="inCash_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Discount"
        name="discount"
        placeholder="0%"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Price"
        name="creditCard_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Installment"
        name="creditCard_installment"
        placeholder="0"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Installment Price"
        name="creditCard_installment_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Fees"
        name="creditCard_fees"
        placeholder="0%"
        handleOnChange={handleChange}
      />
      <Input
        type="file"
        text="Image"
        name="imgSrc"
        placeholder="Insert An Image"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Image Description (Alt Text)"
        name="imgAltText"
        placeholder="Ex.: A motherboard with RGB"
        handleOnChange={handleChange}
      />
      <button id={styles.submit_button} type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
