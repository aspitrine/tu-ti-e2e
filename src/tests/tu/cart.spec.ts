/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect, beforeEach } from 'vitest';
import products from '../../data/products';
import { addToCart, cartState, removeProduct } from '../../hooks/cart';

describe('Cart', () => {
  beforeEach(() => {
    // On réinitialise le panier avant chaque test
    cartState.products = [];
  });

  it('should failed', () => {
    expect(true).toBe(false);
  });

  it('addToCart should increase the totalPrice of the cart state', () => {
    const expectedTotalPrice = products[0].price + products[1].price;

    addToCart(products[0]);
    addToCart(products[1]);

    expect(cartState.totalPrice).toBe(expectedTotalPrice);
  });

  it('addToCart should increase the nbProducts of the cart state', () => {
    const expectedNbProducts = 2;

    addToCart(products[0]);
    addToCart(products[1]);

    expect(cartState.nbProducts).toBe(expectedNbProducts);
  });

  it('addToCart should add the product to the cart state', () => {
    addToCart(products[0]);

    expect(cartState.products).toContainEqual({ ...products[0], qty: 1 });
  });

  it('addToCart should increase the qty of the product if it is already in the cart', () => {
    addToCart(products[0]);
    addToCart(products[0]);

    expect(cartState.products).toContainEqual({ ...products[0], qty: 2 });
  });

  it('removeProduct should remove the product from the cart state', () => {
    addToCart(products[0]);
    addToCart(products[1]);

    expect(cartState.products).toContainEqual({ ...products[0], qty: 1 });
    expect(cartState.products).toContainEqual({ ...products[1], qty: 1 });

    removeProduct(products[0].id);

    expect(cartState.products).not.toContainEqual({ ...products[0], qty: 1 });
  });
});
