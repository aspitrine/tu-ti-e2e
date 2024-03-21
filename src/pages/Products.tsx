import Button from '../components/Button';
import products from '../data/products';
import { addToCart } from '../hooks/cart';

function Products() {
  return (
    <div>
      <h1 className="text-3xl my-4 font-bold">Liste des articles</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <img
              loading="lazy"
              src={product.image}
              alt={product.name}
              className="w-full"
            />
            <div className="flex justify-between">
              <p>{product.description}</p>
              <p className="font-bold text-blue-700">{product.price} €</p>
            </div>
            <Button onClick={() => addToCart(product)}>
              Ajouter au panier
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
