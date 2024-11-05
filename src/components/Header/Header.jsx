import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/TravelTrucks.svg";

export default function Header() {
  return (
    <header>
      <div className={css.container}>
        <a href="" className={css.logo}>
          <img src={logo} alt="Logo" />
        </a>
        <nav className={css.navigation}>
          <ul className={css.navlist}>
            <li>
              <NavLink to="/" className={css.navListItem}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={css.navListItem}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
