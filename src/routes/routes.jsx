import App from '../components/App';
import HomePage from '../components/HomePage';
import ShopPage from '../components/ShopPage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
    ],
  },
];

export default routes;
