import style from '../styles/EmptyBag.module.css';

function EmptyBag() {
  return (
    <main className={style.main}>
      <h2 className={style.title}>Your shopping bag is empty</h2>
      <p className={style.details}>Add something to get started</p>
    </main>
  );
}

export default EmptyBag;
