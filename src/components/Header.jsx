import style from '../styles/Header.module.css';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <h1 className={style.shopName}>Alio</h1>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="shop" className={style.link}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="cart" className={style.link}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
