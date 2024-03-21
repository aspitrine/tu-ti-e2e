import { proxy, useSnapshot, subscribe } from 'valtio';
import { Product } from '../@types/product';
import LocalStorage from '../utils/localStorage';

type ProductWithQty = Product & { qty: number };
type CartState = { products: ProductWithQty[] };

const initialCartValue: CartState = LocalStorage.getItem('cart') || {
  products: [],
};

const cartState = proxy(initialCartValue);

subscribe(cartState, () => {
  LocalStorage.setItem('cart', cartState);
});

function addToCart(product: Product) {
  const existingProduct = cartState.products.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cartState.products.push({ ...product, qty: 1 });
  }
}

function getTotalPrice(products: ProductWithQty[]) {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}

function getNbOfProducts(products: ProductWithQty[]) {
  return products.reduce((acc, product) => acc + product.qty, 0);
}

function removeProduct(productId: number) {
  cartState.products = cartState.products.filter((p) => p.id !== productId);
}

function useCart() {
  const cart = useSnapshot(cartState);
  const totalPrice = getTotalPrice(cartState.products);
  const nbProducts = getNbOfProducts(cartState.products);

  return {
    products: cart.products,
    addToCart,
    removeProduct,
    nbProducts,
    totalPrice,
  };
}

export default useCart;
