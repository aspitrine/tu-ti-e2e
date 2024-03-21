import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className="text-3xl my-4 font-bold">
        Bienvenue sur le site de vente en ligne
      </h1>
      <p>
        Vous pouvez consulter la liste des produits en cliquant sur le lien{' '}
        <Link to="/products" className="text-blue-500 hover:text-blue-700">
          &quot;Liste des produits&quot;
        </Link>{' '}
        dans le menu de navigation.
      </p>
    </div>
  );
}

export default Home;
