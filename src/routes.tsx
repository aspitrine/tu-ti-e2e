import { createHashRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

export default router;
