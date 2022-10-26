import { useState } from 'react';

import styles from './ProductForm.module.css';

import Input from '../form/Input';
import Textarea from '../form/Textarea';
import RadioInputs from '../form/RadioInputs';

function ProductForm({ handleOnSubmit }) {
  const [product, setProduct] = useState({});

  function handleChange({ target }) {
    if (target.name === 'imgLink') {
      setProduct({ ...product, imgSrc: target.value });
    } else if (target.name === 'imgFile') {
      const reader = new FileReader();
      let img;

      reader.addEventListener('load', () => {
        img = reader.result;
        setProduct({ ...product, imgSrc: img });
      });

      reader.readAsDataURL(target.files[0]);

      /* another way

        let img = event.target.files[0];
        img = URL.createObjectURL(img);
        console.log(img);

        setProduct({ ...product, [event.target.name]: img });
      */
    } else {
      if (target.className === 'priceData') {
        let regex = /[0-9][.|,]?/gi;

        if (!regex.test(target.value)) {
          console.log('not a match');
          // show an error message to the user
        }
        setProduct({ ...product, [target.name]: Number(target.value) });
      } else {
        setProduct({ ...product, [target.name]: target.value });
      }
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
        type="text"
        text="Old Price"
        name="old_price"
        dataType="priceData"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="In Cash Price"
        name="inCash_price"
        dataType="priceData"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Discount"
        name="discount"
        dataType="priceData"
        placeholder="0%"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Credit Card Price"
        name="creditCard_price"
        dataType="priceData"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Installment"
        name="creditCard_installment"
        dataType="priceData"
        placeholder="0"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Credit Card Installment Price"
        name="creditCard_installment_price"
        dataType="priceData"
        placeholder="R$0.00"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Credit Card Fees"
        name="creditCard_fees"
        dataType="priceData"
        placeholder="0%"
        handleOnChange={handleChange}
      />
      <RadioInputs
        name="imageType"
        text="Upload an image or use a link (Tip: Links are great for website optimization):"
        inputAmount="2"
        values={['Image File', 'Image Link']}
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
