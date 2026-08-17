import style from '../styles/Header.module.css';
import { Link } from 'react-router';
import ShoppingBag from '../assets/svgs/ShoppingBag.svg';

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
            <Link to="bag" className={style.link}>
              <img src={ShoppingBag} alt="Bag icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
