import style from '../styles/ShopPage.module.css';
import { useState, useEffect } from 'react';
import RenderArticle from './RenderArticle';
import Loading from './LoadingComponent';
import { useOutletContext } from 'react-router';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const { addItem, cartItems, removeItem } = useOutletContext();

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request Aborted');
          return;
        }
        console.error(error);
      });

    return () => controller.abort();
  }, [setProducts]);

  return (
    <main className={style.main}>
      {products.length === 0 ? (
        <div className={style.loadingWrapper}>
          <Loading />
        </div>
      ) : (
        <RenderArticle
          products={products}
          cartItems={cartItems}
          setProducts={setProducts}
          style={style}
          addItem={addItem}
          removeItem={removeItem}
        />
      )}
    </main>
  );
}

export default ShopPage;
