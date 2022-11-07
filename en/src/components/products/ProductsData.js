import { useNavigate } from 'react-router-dom';

import styles from './ProductsData.module.css';
import Product from './Product';
import { setImageTypeState } from '../form/RadioInputs';

export let currentProduct;

function ProductsData({ products, setProducts }) {
  const navigate = useNavigate();

  function saveCurrentProduct(productId) {
    currentProduct = products.find($product => $product.id === productId);
  }

  function editProduct(event) {
    let productContainer = event.currentTarget.parentElement.parentElement;

    currentProduct = products.find(
      $product => $product.id === productContainer.id
    );

    if (currentProduct) {
      navigate(`/newproduct?id=${currentProduct.id}`);

      setTimeout(() => {
        const inputs = document.querySelectorAll('form#addProductForm input');
        document.querySelector('form#addProductForm button').innerHTML =
          'Save Product';

        Object.keys(currentProduct).forEach(productInfo => {
          inputs.forEach(input => {
            if (productInfo === input.id) {
              input.value = currentProduct[productInfo];
            }

            if (
              productInfo === 'imgSrc' &&
              (currentProduct[productInfo].includes('http') ||
                currentProduct[productInfo].includes('jpg') ||
                currentProduct[productInfo].includes('jpeg') ||
                currentProduct[productInfo].includes('png') ||
                currentProduct[productInfo].includes('webp') ||
                currentProduct[productInfo].includes('gif') ||
                currentProduct[productInfo].includes('avif'))
            ) {
              setImageTypeState({ target: 'Image Link' });

              // radio input
              document.getElementById('Image Link').click();

              // image link input
              document.getElementById('imgLink').value = currentProduct.imgSrc;
            }

            if (document.querySelector('#description')) {
              document.querySelector('#description').value =
                currentProduct.description;
            }
          });
        });
      }, 150);
    }
  }

  function deleteProduct({ currentTarget }) {
    const productToBeDeleted = currentTarget.parentElement.parentElement;

    const updatedProducts = products.filter(
      $product => $product.id !== productToBeDeleted.id
    );
    if (updatedProducts.length > 0) {
      setProducts(updatedProducts);
    } else {
      localStorage.removeItem('products');
      setProducts([]);
    }
  }

  return (
    <div className={styles.products_container}>
      {products.length === 0 && (
        <>There's no products in our stock, come back later.</>
      )}

      {products.length > 0 &&
        products.map(product => (
          <Product
            productName={product.productName}
            old_price={product.old_price}
            inCash_price={product.inCash_price}
            discount={product.discount}
            creditCard_price={product.creditCard_price}
            creditCard_installment={product.creditCard_installment}
            creditCard_installment_price={product.creditCard_installment_price}
            creditCard_fees={product.creditCard_fees}
            imgSrc={product.imgSrc}
            imgAltText={product.imgAltText}
            key={product.id ? product.id : Math.random() * 10000}
            id={product.id}
            saveCurrentProduct={saveCurrentProduct}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        ))}
    </div>
  );
}

export default ProductsData;
