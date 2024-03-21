import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import useCart from '../hooks/cart';

const links = [
  {
    to: '/',
    label: 'Accueil',
  },
  {
    to: '/products',
    label: 'Liste des produits',
  },
];

function MainLayout() {
  const { nbProducts } = useCart();
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <nav className="flex justify-between">
          <ul className="flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    clsx('p-4 block', {
                      'bg-white text-blue-500 font-bold': isActive,
                    })
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/cart">
            <div className="p-4 block">
              Panier{' '}
              {nbProducts && (
                <span>
                  ({nbProducts} produit{nbProducts > 1 ? 's' : ''})
                </span>
              )}
            </div>
          </NavLink>
        </nav>
      </header>
      <main className="p-2">
        <Outlet />
      </main>
      <footer>Copyright © {new Date().getFullYear()}</footer>
    </div>
  );
}

export default MainLayout;
