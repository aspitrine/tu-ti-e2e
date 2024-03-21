import { proxy, useSnapshot, subscribe } from 'valtio';
import { Product } from '../@types/product';
import LocalStorage from '../utils/localStorage';

type ProductWithQty = Product & { qty: number };
type CartState = {
  products: ProductWithQty[];
  totalPrice: number;
  nbProducts: number;
};

function getTotalPrice(products: ProductWithQty[]) {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}

function getNbOfProducts(products: ProductWithQty[]) {
  return products.reduce((acc, product) => acc + product.qty, 0);
}

const products: ProductWithQty[] = LocalStorage.getItem('cart-products') || [];

export const cartState = proxy<CartState>({
  products,
  get totalPrice() {
    return getTotalPrice(this.products);
  },
  get nbProducts() {
    return getNbOfProducts(this.products);
  },
});

subscribe(cartState.products, () => {
  LocalStorage.setItem('cart-products', cartState.products);
});

export function addToCart(product: Product) {
  const existingProduct = cartState.products.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cartState.products.push({ ...product, qty: 1 });
  }
}

export function removeProduct(productId: number) {
  cartState.products = cartState.products.filter((p) => p.id !== productId);
}

const useCart = () => useSnapshot(cartState);

export default useCart;
