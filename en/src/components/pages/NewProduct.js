import styles from './NewProduct.module.css';

import Input from '../form/Input';

function NewProduct() {
  return (
    <div>
      <h1>New Product</h1>
      <p>Add a product to the list</p>
      <form>
        <Input
          type="text"
          text="Name"
          name="productName"
          placeholder="Insert Name"
        />
        <Input
          type="text"
          text="Old Price"
          name="productOldPrice"
          placeholder="Insert Old Price"
        />
        <Input
          type="text"
          text="In Cash Price"
          name="productInCashPrice"
          placeholder="Insert In Cash Price"
        />
        <Input
          type="text"
          text="Discount"
          name="productDiscount"
          placeholder="Insert Discount"
        />
        <Input
          type="text"
          text="Credit Card Price"
          name="productCreditCardPrice"
          placeholder="Insert Credit Card Price"
        />
        <Input
          type="text"
          text="Credit Card Installment"
          name="productCreditCardInstallment"
          placeholder="Insert Credit Card Installment"
        />
        <Input
          type="number"
          text="Credit Card Fees"
          name="productCreditCardFees"
          placeholder="Insert Credit Card Fees"
        />
        <Input
          type="file"
          text="Image"
          name="productImage"
          placeholder="Insert An Image"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default NewProduct;
