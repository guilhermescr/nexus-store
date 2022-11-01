import { useNavigate } from 'react-router-dom';

import styles from './ProductsData.module.css';
import Product from './Product';
import { setImageTypeState } from '../form/RadioInputs';

function ProductsData({ products }) {
  const navigate = useNavigate();

  function editProduct(event) {
    let productContainer = event.currentTarget.parentElement;

    for (let product of products) {
      if (product.id === productContainer.id) {
        navigate(`/newproduct?id=${product.id}`);

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
                setImageTypeState({ target: 'Image Link' });

                // radio input
                document.getElementById('Image Link').click();

                // image link input
                document.getElementById('imgLink').value = product.imgSrc;
              }

              if (document.querySelector('#description')) {
                document.querySelector('#description').value =
                  product.description;
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
            key={product.id ? product.id : Math.random() * 10000}
            id={product.id}
            editProduct={editProduct}
          />
        ))}
    </div>
  );
}

export default ProductsData;
