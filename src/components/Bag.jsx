import EmptyBag from './EmptyBag';
import FilledBag from './FilledBag';
import { useOutletContext } from 'react-router';

function Bag() {
  const { cartItems, addItem } = useOutletContext();
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyBag />
      ) : (
        <FilledBag cartItems={cartItems} addItem={addItem} />
      )}
    </>
  );
}

export default Bag;
