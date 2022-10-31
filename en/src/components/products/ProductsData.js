import { useNavigate } from 'react-router-dom';

import styles from './ProductsData.module.css';
import Product from './Product';
import { setImageTypeState } from '../form/RadioInputs';

function ProductsData({ products }) {
  const navigate = useNavigate();

  function editProduct(event) {
    let productContainer = event.currentTarget.parentElement;
    navigate('/newproduct');

    for (let product of products) {
      if (product.id === productContainer.id) {
        setTimeout(() => {
          const inputs = document.querySelectorAll('form#addProductForm input');
          document.querySelector('form#addProductForm button').innerHTML =
            'Save Product';

          Object.keys(product).forEach(productInfo => {
            inputs.forEach(input => {
              if (productInfo === input.id) {
                input.value = product[productInfo];
              }

              if (
                productInfo === 'imgSrc' &&
                (product[productInfo].includes('http') ||
                  product[productInfo].includes('jpg') ||
                  product[productInfo].includes('jpeg') ||
                  product[productInfo].includes('png') ||
                  product[productInfo].includes('webp') ||
                  product[productInfo].includes('gif') ||
                  product[productInfo].includes('avif'))
              ) {
                console.log('Image:', product[productInfo]);
                setImageTypeState({ target: 'Image Link' });
              }
            });
          });
        }, 150);
      }
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
            key={product.id}
            id={product.id}
            editProduct={editProduct}
          />
        ))}
    </div>
  );
}

export default ProductsData;
