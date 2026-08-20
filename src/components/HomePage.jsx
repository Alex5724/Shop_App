import style from '../styles/HomePage.module.css';
import { Link } from 'react-router';

function HomePage() {
  return (
    <main className={style.main}>
      <h2 className={style.title}>Welcome, enjoy your shopping!</h2>
      <Link to="shop" className={style.btnContainer}>
        <button className={style.shopBtn}>Shop now</button>
      </Link>
    </main>
  );
}

export default HomePage;
