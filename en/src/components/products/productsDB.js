import { v4 as uuidv4 } from 'uuid';

import Kit1_Ryzen from '../../img/what_we_recommend_computers/ryzen_kit1.png';

let productsDB = [
  {
    productName:
      'PC Gamer - Ryzen 5 5600G, B450M Aorus Gigabyte, x2 8GB RAM Memory, RGB Cabinet with one fan',
    id: uuidv4(),
    description:
      "This Ryzen kit was designed for people who strive to play amazing games with no low memory or lags. The Ryzen 5 5600G is one of the best processors for friendly games, as well as it's good for homework and video editing.",
    old_price: 2455.49,
    inCash_price: 2210.99,
    discount: 15,
    creditCard_price: 2350.99,
    creditCard_installment: 10,
    creditCard_installment_price: 235.33,
    creditCard_fees: 0,
    imgSrc: Kit1_Ryzen,
    imgAltText: 'Kit 1 - Ryzen'
  }
];

function updateDatabase(updatedDatabase) {
  productsDB = updatedDatabase;
}

export { productsDB, updateDatabase };
