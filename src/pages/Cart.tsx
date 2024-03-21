import Button from '../components/Button';
import useCart, { removeProduct } from '../hooks/cart';

function Cart() {
  const { products, totalPrice } = useCart();
  return (
    <div>
      <h1 className="text-2xl font-bold">Panier</h1>
      {products.length ? (
        <div className="flex flex-col gap-2">
          {products.map((product) => (
            <article key={product.id} className="flex gap-2">
              <div>
                <img loading="lazy" src={product.image} alt={product.name} />
              </div>
              <div>
                <div>
                  <span className="font-bold">{product.name}</span> x{' '}
                  {product.qty}
                </div>
                <div>{product.description}</div>
                <div>Prix : {product.price} € / u</div>
                <div>Total : {product.price * product.qty} €</div>
                <div className="mt-auto">
                  <Button onClick={() => removeProduct(product.id)} color="red">
                    Retirer
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>Votre panier est vide :(</p>
      )}

      <div className="font-bold text-2xl mt-2">Total : {totalPrice} €</div>
    </div>
  );
}

export default Cart;
