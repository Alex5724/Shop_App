import App from '../components/App';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';
import Bag from '../components/Bag';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'bag', element: <Bag /> },
    ],
  },
];

export default routes;
