import { CartItem } from "../types/cart";
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

function generateCartItem():CartItem {
  return {
    id: uuidv4(),
    title: faker.commerce.productName(),
    quantity: 1,
    price: Number(faker.commerce.price(1, 1000, 0))
  }
}

export default generateCartItem