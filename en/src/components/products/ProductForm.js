import { useState } from 'react';

import styles from './ProductForm.module.css';

import LinkButton from '../layouts/LinkButton';
import Input from '../form/Input';
import Textarea from '../form/Textarea';

function ProductForm({ handleOnSubmit }) {
  const [product, setProduct] = useState({});

  function handleChange(event) {
    setProduct({ ...product, [event.target.name]: event.target.value });

    if (event.target.name === 'imgSrc') {
      product.imgSrc = URL.createObjectURL(event.target.files[0]);
      // const [file] = event.target.files;
      // product.imgSrc = URL.createObjectURL(file);
    }
  }

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Name"
        name="name"
        placeholder="Insert a name..."
        handleOnChange={handleChange}
      />
      <Textarea
        name="description"
        text="Description"
        placeholder="Insert a description..."
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Old Price"
        name="old_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="In Cash Price"
        name="inCash_price"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Discount"
        name="discount"
        placeholder="0%"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
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
      <LinkButton
        to="/products"
        text="Add Product"
        onSubmit={() => handleOnSubmit(product)}
      ></LinkButton>
    </form>
  );
}

export default ProductForm;
