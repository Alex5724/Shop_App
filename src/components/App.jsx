import '../styles/App.css';
import Header from './Header';
import { Outlet } from 'react-router';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(element) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === element.id);

      if (exists) {
        return prev.map((item) =>
          item.id === element.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                cost: item.price * (item.quantity + 1),
              }
            : item,
        );
      }

      return [...prev, { ...element, quantity: 1, cost: element.price }];
    });
  }

  console.log(cartItems);

  function removeItem(element) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === element.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                cost: item.price * (item.quantity - 1),
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function deleteItem(element) {
    setCartItems((prev) => prev.filter((item) => item.id !== element.id));
  }

  return (
    <>
      <Header />
      <Outlet context={{ cartItems, addItem, removeItem, deleteItem }} />
    </>
  );
}

export default App;
