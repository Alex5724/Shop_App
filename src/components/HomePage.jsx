import style from '../styles/HomePage.module.css';

function HomePage() {
  return (
    <main>
      <h2 className={style.title}>Welcome, enjoy your shopping!</h2>
      <button className={style.shopBtn}>Shop now</button>
    </main>
  );
}

export default HomePage;
